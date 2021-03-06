const BASE_URL = '/api/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(token => {
    localStorage.setItem('token', token.token)
  });
}

function getUser() {
  let token = localStorage.getItem('token')
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log(payload)
    return payload.user
  }
  return null;
}

async function login(creds) {
  let endpoint = BASE_URL + 'login'
  let fetchResult = await fetch(endpoint, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  if (fetchResult.ok) {
    let result = await fetchResult.json()
    localStorage.setItem('token', result.token)
  } else {
    throw new Error('An error occurred')
  }
}

export default {
  signup,
  getUser,
  login
};