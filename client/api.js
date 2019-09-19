import request from 'superagent'

import { getEncodedToken } from 'authenticare/client'

const rootUrl = '/api/v1/clients'

// export function getFruits (url = rootUrl) {
//   return request.get(url)
//     .set({ 'Accept': 'application/json' })
//     .then(res => {
//       return res.body.fruits
//     })
//     .catch(logError)
// }

// export function addFruit (fruit, url = rootUrl) {
//   return request.post(url)
//     .set({ 'Accept': 'application/json' })
//     .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
//     .send(fruit)
//     .then(res => res.body.fruits)
//     .catch(logError)
// }


export function getClients (url = rootUrl){
  return request.get(url)
  .set({'Accept': 'application/json'})
  .then(res => {
    return res.body.clients
  })
  .catch(logError)
}

export function addClient(client, url=rootUrl){
  return request.post(url)
  .set({'Accept': 'application/json'})
  .set({'Authorization': `Bearer ${getEncodedToken()}`})
  .send(client)
  .then(res => res.body.clients)
  .catch(logError)
}
export function updateCLient (client, utl=rootUrl) {
  return request.put(url)
  .set({ 'Accept': 'application/json' })
  .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
  .send(client)
  .then(res => res.body.clients)
  .catch(logError)
}

export function updateFruit (fruit, url = rootUrl) {
  return request.put(url)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(fruit)
    .then(res => res.body.fruits)
    .catch(logError)
}

// export function deleteFruit (id, url = rootUrl) {
//   return request.delete(`${url}/${id}`)
//     .set({ 'Accept': 'application/json' })
//     .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
//     .then(res => res.body.fruits)
//     .catch(logError)
// }

function logError (err) {
  // eslint-disable-next-line no-console
  console.error(
    'Error consuming the API (in client/api.js):',
    err.message
  )
}
