const BASE_URL = '/api/';

async function addRequest(newRequest) {
    let endpoint = BASE_URL + 'request-pickup'
    let fetchResult = await fetch(endpoint, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')}),
      body: JSON.stringify(newRequest)
    })
    if (fetchResult.ok) {
        return await fetchResult.json()
    }
}

// function addRequest(newRequest) {
//     return fetch(BASE_URL + 'request-pickup', {
//       method: 'POST',
//       headers: new Headers({'Content-Type': 'application/json'}),
//       body: JSON.stringify(newRequest)
//     })
//     .then(res => {
//       if (res.ok) return res.json();
//       // Probably a duplicate email
//       throw new Error('error getting json');
//     })
//   }

 export default {
     addRequest
 }