class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}