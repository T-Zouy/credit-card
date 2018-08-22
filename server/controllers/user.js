/**
 * Created by lin_yu on 2018/8/20
 */
const User = require('../models/user')

class UserController {
  static async getUser(ctx) {
    let result = await User.findOne({name: 'zouy'})
    console.log(result)
    ctx.success({
      msg: '查询成功!',
      data: result
    })
  }
}

module.exports = UserController
