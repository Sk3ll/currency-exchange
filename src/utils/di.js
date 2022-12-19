let container;

export class Container {
  #providers;

  #instances = {};

  /**
   * @param {object} config
   * @param {Array<Provider>} config.providers
   * */
  constructor(config) {
    if (container) {
      // eslint-disable-next-line no-constructor-return
      return container;
    }
    this.#providers = config.providers || [];
    this.#registerDependencies();
    container = this;
  }

  /**
   * Returning dependency instance by name
   * @param {Array<string>} interfaces
   */
  dependency(interfaces) {
    const res = [];
    interfaces.forEach(el => {
      if (this.#instances[el]) {
        const instance = this.#instances[el].getInstance?.() || new this.#instances[el]();
        res.push(instance);
      }
    });
    return res;
  }

  /** Registers all dependencies and adds Proxy */
  #registerDependencies() {
    const map = {};
    this.#providers.forEach(el => {
      map[el.providerName] = el.useClass;
    });
    this.#instances = map;
  }
}

/** Getting all params passed to constructor
 * @param {sting} str - the source code of the
 * @returns {Array<string>}
 * */
export const getConstructorParams = str =>
  str
    ?.replace(/ /g, '')
    ?.match(/(?<=constructor\()(.*?)(?=\s*\))/gi)?.[0]
    ?.split(',')
    ?.map(e => e.trim())
    ?.filter(Boolean) || [];

const deps = {};
let counter = 0;

export function injectable(Class) {
  const C = Class;
  return new Proxy(C, {
    construct(Target, argArray) {
      if (!container) {
        throw new Error('DI container is not created');
      }

      /** List of interfaces required by
       * @type {Array<string>}
       * */
      const str = C.toString();
      const dependenciesArray = getConstructorParams(str);
      const injectesDeps = container?.dependency(dependenciesArray) || [];
      const initialDeps = JSON.stringify(deps);
      deps[Target.name] = dependenciesArray;
      const finalDeps = JSON.stringify(deps);
      // eslint-disable-next-line no-plusplus
      if (initialDeps === finalDeps) ++counter;

      if (dependenciesArray.includes(Target.name) || counter > 5) {
        throw new Error(`Cyclic dependencies detected`);
      }
      if (dependenciesArray.length !== injectesDeps.length) {
        throw new Error('The dependency in missing!');
      }
      return new Target(...injectesDeps, ...argArray);
    },
  });
}
