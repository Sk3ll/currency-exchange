import { Attributes } from '@/utils';

export class CommonComponent {
  #component;

  constructor(tagName) {
    this.#component = document.createElement(tagName);
  }

  addEventListener(event, cb) {
    this.#component.addEventListener(event, cb);
    return this;
  }

  getComponent() {
    return this.#component;
  }

  addClassName(className) {
    this.#component.className = className;
    return this;
  }

  setValue(value) {
    this.#component.value = value;
    return this;
  }

  setAttribute(type, value) {
    this.#component.setAttribute(type, value);
    return this;
  }

  isDisabled(boolean) {
    this.#component.toggleAttribute(Attributes.DISABLED, boolean);
    return this;
  }

  setChildren(children) {
    this.#component.innerHTML = children;
    return this;
  }

  appendChild(child) {
    this.#component.appendChild(child);
    return this;
  }

  appendChildren(...children) {
    children.forEach(child => {
      this.appendChild(child);
    });
    return this;
  }
}
