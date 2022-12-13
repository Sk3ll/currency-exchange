export class Observable {
  #observers = [];

  attach(observer) {
    this.#observers.push(observer);
  }

  detach(observer) {
    this.#observers = this.#observers.filter(o => o !== observer);
  }

  notifyObservers() {
    this.#observers.forEach(observer => {
      observer.update();
    });
  }
}
