/**
 * Created by lin_yu on 2018/8/20
 */

const tracer = require('tracer');
const fs = require('fs');

const logger = tracer.colorConsole({
  level: 'error',
  format: '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})',
  dateformat: 'HH:MM:ss.L',
  transport: data => {
    console.log(data.output)
    fs.appendFile('./error.log', data.output + '\n', {encoding: 'utf8'}, (err) => {
      if (err) {
        throw err;
      }
    });
  }
})

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    logger.error(e.stack)
    throw(e)
  }
}
