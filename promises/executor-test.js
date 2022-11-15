(async () => {
  const firstTest = 'First Test';
  console.group(firstTest);
  
  console.log('Synchronous 1');
  
  const test1 = new Promise((resolve, reject) => {
    // Promise syntax: Promise(executor)
    
    // Everything inside the executor is still part of
    // the main thread. So 'Promise 2' will be outputted
    // after Synchronous 1
    console.log('Promise 2');
    
    resolve('Resolve 3');
  }).then((text) => {
    console.log(text);
  });
  
  console.log('Synchronous 4');

  await test1;
  console.groupEnd(firstTest);

  // TEST 2 ------------------------------------------------
  const secondTest = 'Second Test';
  console.group(secondTest);
  
  console.log('Synchronous 1');
  
  const test2 = Promise.resolve().then(() => {
    // Now we are wrapping our Promise's executor inside
    // another Promise so it will now be handled
    // asynchronously
    return new Promise((resolve, reject) => {
      console.log('Promise 2');
      
      resolve('Resolve 3');
    });
  }).then((text) => {
    console.log(text);
  });
  
  console.log('Synchronous 4');

  await test2;
  console.groupEnd(secondTest);
})();
