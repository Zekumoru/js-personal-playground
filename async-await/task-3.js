// https://javascript.info/task/async-from-regular

const wait = async () => await new Promise((resolve) => setTimeout(resolve.bind(null, 10), 1000));
const f = () => wait().then(console.log);
f();
