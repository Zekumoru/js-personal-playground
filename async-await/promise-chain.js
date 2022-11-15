// promise-chain.js
// The main goal of this program is to be able to handle
// promises in their order when they resolve.
//

const db = {
  docs: [],
  post(doc) {
    return new Promise((resolve) => {
      this.docs.push(doc);
      setTimeout(resolve.bind(null, doc), 3000);;
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
// It does all tasks concurrently, not waiting for
// the one to resolve before doing the next
//
// (async () => {
//   db.docs = [];
  
//   const asyncDocs = docs.map((doc) => db.post(doc));
//   const results = await Promise.all(asyncDocs);

//   results.forEach((result) => console.log(result));
//   console.log(db.docs);
// })();
