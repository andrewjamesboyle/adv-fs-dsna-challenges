class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    return this.#list.push(item);
  }

  dequeue() {
    if (this.#list.length === 0) {
      return null;
    } else return this.#list.shift();
  }

  hasNext() {
    if (this.#list.length > 0) {
      return true;
    } else return false;
  }
}

module.exports = { Queue };

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log('queue', queue);
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
