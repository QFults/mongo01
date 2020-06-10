const mongo = require('mongojs')
const db = mongo('animalDB')

db.animals.find((err, dogs) => {
  if (err) { console.log(err) }
  console.log(dogs)
})

db.animals.findOne({ name: 'Beef' }, (err, dog) => {
  if (err) { console.log(err) }
  console.log(dog)
})

db.animals.insert({ name: 'Brutus', age: 12, breed: 'bulldog'}, (err, dog) => {
  if (err) { console.log(err) }
  console.log(dog)
})

db.animals.update({ name: 'Brutus' }, { $set: { age: 13 } }, (err, info) => {
  if (err) { console.log(err) }
  console.log(info)
})

db.animals.remove({ name: 'Brutus' }, (err, info) => {
  if (err) { console.log(err) }
  console.log(info)
})
