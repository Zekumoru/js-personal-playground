const Node = require('./BstNode');

module.exports = class BinarySearchTree {
  #root;

  constructor(array) {
    for (let i = 0; i < array.length; i++) this.insert(array[i]);
  }

  get root() {
    return this.#root;
  }

  insert(value) {
    this.#insert(this.#root, new Node(value));
  }

  #insert(node, newNode) {
    if (this.#root == null) {
      this.#root = newNode;
      return;
    }

    if (node.value > newNode.value) {
      if (node.left == null) {
        node.left = newNode;
        return;
      }

      this.#insert(node.left, newNode);
    } else {
      if (node.right == null) {
        node.right = newNode;
        return;
      }

      this.#insert(node.right, newNode);
    }
  }
};
