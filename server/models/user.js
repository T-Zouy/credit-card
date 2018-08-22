/**
 * Created by lin_yu on 2018/8/20
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model('users', UserSchema)
