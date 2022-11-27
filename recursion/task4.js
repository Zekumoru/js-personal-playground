// https://javascript.info/task/output-single-linked-list
//
// Output a single-linked list
//

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const loop = {
  name: 'loop',
  printList(list) {
    let current = list;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const recursion = {
  name: 'recursion',
  printList(list) {
    if (!list) return;
    console.log(list.value);
    this.printList(list.next);
  }
}

function run(obj, list) {
  console.log(obj.name);
  obj.printList(list);
}

run(recursion, list);
