const connection = require('./connection')

module.exports = {
  getClients,
  addClient,
  updateClient
}


async function getClients (db = connection) {
  return db('clients').select() //.then(sort)
}

async function addClient (client, db = connection) {
  return db('clients')
    .insert(client)
    .then(() => getClients(db))
    //.then(sort)
}

async function updateClient (newClient, db = connection) {
  return db('clients')
    .where('id', newClient.id)
    .update(newClient)
    .then(() => getClients(db))
    //.then(sort)
}








//not in use for this
// async function deleteClient (id, db = connection) {
//   return db('clients')
//     .where('id', id)
//     .del()
//     .then(() => db)
//     .then(getClients)
//     .then(sort)
// }


//not in use for now
// function sort (clientArray) {
//   const allClients = [...clientArray]
//   allClients.sort((a, b) => a.id - b.id)
//   return allClients
// }
