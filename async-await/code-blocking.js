// Video: https://www.youtube.com/watch?v=vn3tm0quoqE
// At: 4:01 

const codeBlockerOriginal = () => {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000000) i++;
  
    resolve('Billion loops done!');
  });
}

const codeBlockerResolve = () => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1000000000) i++;
  
    return 'Billion loops done!';
  });
}

const codeBlockerAsync = () => {
  return new Promise(async (resolve, reject) => {
    await Promise.resolve();
    
    let i = 0;
    while (i < 1000000000) i++;
  
    resolve('Billion loops done!');
  });
};

function run(label, codeBlocker) {
  console.group(label);
  console.time(label);

  console.timeLog(label);
  const promise = codeBlocker().then(() => console.timeLog(label));
  console.timeLog(label);
  
  return promise.then(() => console.groupEnd(label));
}

(async () => {
  await run('Original', codeBlockerOriginal);
  await run('Resolve', codeBlockerResolve);
  await run('Async', codeBlockerAsync);
})();
