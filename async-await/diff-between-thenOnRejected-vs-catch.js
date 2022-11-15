function asyncFunction() {
  return Promise.reject('Error!!!');
}

asyncFunction().then(null, function onRejected(error) {
  throw error;
}).catch((finalError) => {
  console.error(`Inside catch: ${finalError}`);
});
