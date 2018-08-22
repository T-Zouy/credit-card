/**
 * Created by lin_yu on 2018/8/20
 */
// 接口多的话需要对此文件按模块进行拆分

const config = require('../config')
const Router = require('koa-router')
const router = new Router({
  prefix: config.app.routerBaseApi
})

const creditCard = require('../controllers/credit-card')
const user = require('../controllers/user')

router
  .get('/credit/card', creditCard.getCreditCardById)
  .post('/credit/card', creditCard.createCreditCard)
  .get('/user', user.getUser)

module.exports = router
