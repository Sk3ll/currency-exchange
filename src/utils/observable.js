export class Observable {
  #observers = [];

  subscribe(observer) {
    this.#observers.push(observer);
  }

  unsubscribe(observer) {
    this.#observers = this.#observers.filter(o => o !== observer);
  }

  notifyObservers() {
    this.#observers.forEach(observer => {
      observer.update();
    });
  }
}
