// https://javascript.info/task/rewrite-async

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status !== 200) throw new Error(response.status);
  return await response.json();
}

loadJson('https://javascript.info/no-such-user.json').catch(console.log);
