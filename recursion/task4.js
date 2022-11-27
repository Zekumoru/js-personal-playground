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

function run(obj, list) {
  obj.printList(list);
}

run(loop, list);
