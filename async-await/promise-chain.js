const db = {
  docs: [],
  post(doc) {
    return new Promise((resolve) => {
      this.docs.push(doc);
      resolve();
    });
  }
};

const docs = [{ a: 'a' }, { b: 'b' }, { c: 'c' }];
let promise = Promise.resolve();

// This creates a promise chain where we
// wait for each entry to finish before
// doing the next one.
docs.forEach(function (doc) {
  promise = promise.then(function() { 
    // 'return' is important here! Without it, 
    // these promises will run concurrently
    // which is not what we want since we want
    // them executing like a chain, one after 
    // the next.
    // The way this works is that we return the
    // promise from db.post and using this forEach
    // loop, we're basically chaining these db.post
    // promises.
    return db.post(doc);
  });
});

// This will be invoked when all of the
// promises have finished.
promise.then(function () {
  console.log(db.docs);
});

// ES7 Alternative
// (async () => {
//   db.docs = [];

//   for (let doc of docs) {
//     await db.post(doc);
//     console.log(doc);
//   }

//   console.log(db.docs);
// })();
