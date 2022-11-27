// https://javascript.info/task/output-single-linked-list-reverse
//
// Output a single-linked list in the reverse order
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
  printListReverse(list) {
    const output = [];

    let current = list;
    while (current) {
      output.push(current.value);
      current = current.next;
    }

    for (let i = output.length - 1; i >= 0; i--) {
      console.log(output[i]);
    }
  }
}

const recursion = {
  name: 'recursion',
  printListReverse(list) {
    if (!list) return;
    this.printListReverse(list.next);
    console.log(list.value);
  }
}

function run(obj, list) {
  console.log(obj.name);
  obj.printListReverse(list);
}

run(recursion, list);
