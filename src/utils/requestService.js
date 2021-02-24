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

 export default {
     addRequest
 }