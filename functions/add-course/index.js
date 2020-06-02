// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event) => {
  const wxContext = cloud.getWXContext()

  await db.collection('mycourse').add({
    // data 字段表示需新增的 JSON 数据
    data: event
  })
  

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}