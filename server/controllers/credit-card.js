/**
 * Created by lin_yu on 2018/8/20
 */
const CreditCard = require('../models/credit-card')

class CreditCardControllers {
  // 获取单条信息
  static async getCreditCardById(ctx) {
    const {user_id} = ctx.request.query
    console.log(ctx.request.query)
    let result = await CreditCard.findOne({user_id: user_id}).catch(err => {
      ctx.throw(500, '服务器内部错误-数据查找错误!')
    })
    console.log(result)
    // await result.populate('tags').execPopulate().catch((err) => {
    //   ctx.throw(500, '服务器内部错误-数据polulate错误!');
    // })
    ctx.success({
      msg: '查询成功!',
      data: result
    });
  }
  // 信用卡信息创建
  static async createCreditCard(ctx, next) {
    const {user_id, base_info, recipient_info} = ctx.request.body
    const creditCard = new CreditCard({
      user_id,
      base_info,
      recipient_info
    })
    //article.save()返回promise
    let result = await creditCard.save().catch((err) => {
      ctx.throw(500, '服务器内部错误-数据存储错误！');
    })
    await result.populate('tags').execPopulate().catch((err) => {
      ctx.throw(500, '服务器内部错误-数据populate错误！');
    })
    ctx.success({
      msg: '创建信用卡信息成功',
      data: result
    })
  }
}

module.exports = CreditCardControllers
