function getSampleData() {
  return new Promise((resolve, reject) => {
    const error = !!Math.floor(Math.random() * 2);
    setTimeout(() => {
      if (error) reject(Error('Data could not be retrieved.'));
      resolve('Foo');
    }, 3000);
  });
}

getSampleData().then((text) => {
  console.log(text);
}).catch((e) => {
  console.log(e);
})
.finally(() => {
  console.log('Retrieving data completed.');
});
