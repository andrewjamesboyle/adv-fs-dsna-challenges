class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    return this.#list.push(item);
  }

  pop() {
    if (this.#list.length === 0) {
      return null;
    } else return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

}

module.exports = { Stack };


const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log('stack', stack);
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null
