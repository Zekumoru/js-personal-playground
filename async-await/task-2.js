// https://javascript.info/task/rewrite-async-2

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);  
  if (response.status == 200) return response.json();
  throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let user, name;
  
  while (true) {
    name = prompt("Enter a name?", "iliakan");
    
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    }
    catch(error) {
      if (!(error instanceof HttpError && error.response.status == 404)) throw error;
      alert("No such user, please reenter.");
    }
  }
  
  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();
