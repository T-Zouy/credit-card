/**
 * Created by lin_yu on 2018/8/20
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const moment = require('moment')
// moment.locale('zh-cn')

const CreditCardSchema = new Schema({
  user_id: Number,
  base_info: {
    name: String,
    id_card: String,
    education: String,
    company: {
      name: String,
      address: String,
      addr_detail: String
    }
  },
  recipient_info: {
    name: String,
    telephone: String,
    address: String,
    addr_detail: String
  }
})

module.exports = mongoose.model('creditcards', CreditCardSchema)
