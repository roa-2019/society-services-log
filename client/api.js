import request from 'superagent'

const rootUrl = '/api/v1/clients'



export function getClients (url = rootUrl){
  return request.get(url)
  .then(res => {
      return res.body.clients
  })
  .catch(logError)
}

export function addClient(client, url=rootUrl){
  return request.post(url)
  .send(client)
  .then(res => res.body.clients)
  .catch(logError)
}

export function updateCLient (client, url=rootUrl) {
  return request.put(url)
  .send(client)
  .then(res => res.body.clients)
  .catch(logError)
}



function logError (err) {
  // eslint-disable-next-line no-console
  console.error(
    'Error consuming the API (in client/api.js):',
    err.message
  )
}
