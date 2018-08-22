/**
 * Created by lin_yu on 2018/8/20
 */
const Koa = require('koa')
const app = new Koa()
const config = require('./config') // 配置文件
const response = require('./middlewares/response') // response 统一处理
const errorHandler = require('./middlewares/error-handler') // try/catch错误处理
const router = require('./routes')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const mongoUrl = `mongodb://${ config.mongodb.user }:${ config.mongodb.password }@${ config.mongodb.host }:${ config.mongodb.port }/${ config.mongodb.database }`
mongoose.connect(mongoUrl)
const db = mongoose.connection
db.on('error', () => {
  console.log('数据库连接出错!')
})
db.once('open', () => {
  console.log('数据库连接成功！')
})

app.use(async (ctx, next) => {
  await next()
})

//bodyParser中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//使用response中间件(放在最前面)
app.use(response);

//使用errorHandle中间件
app.use(errorHandler);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.app.port, () => {
  console.log('The server is running at http://localhost:' + config.app.port);
});
