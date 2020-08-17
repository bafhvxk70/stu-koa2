const mongoose = require('mongoose')
const conection = require('./connection')

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})


const userModel = conection.model('Gogo', userSchema)

userModel.create({
  name: 'ccq',
  age: 18
}).then((value) => {
  console.log(value, 'value')
}).catch((err) => {
  console.log(err, 'err')
})