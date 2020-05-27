const cloud = require('wx-server-sdk')
// 给定 DYNAMIC_CURRENT_ENV 常量：接下来的 API 调用都将请求到与该云函数当前所在环境相同的环境
// 请安装 wx-server-sdk v1.1.0 或以上以使用该常量
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()

exports.main = async (event, context) => {
  db.collection('mycourse').doc(event._id) .remove({
   
   
  success: function(res) {
    console.log(res.data)
  }
})
}