<template>
<div class="indexcontainer">
  <img v-if="isShow" class="index_img" :src = "userInfo.avatarUrl" alt="">
  <button class="btn" v-else open-type="getUserInfo" @getuserinfo = "getUserInfo">授权登录</button>
    <p class="userName">hello {{userInfo.nickName}}</p>
  <div @tap="toChoose" class="goStudy">
    <p>点击进入</p>
    
    <i-toast id="toast" />
  </div>
</div>

</template>

<script>
const { $Toast } = require('../../../static/iview/base/index');
export default {
  data(){
    return{
      userInfo:{},
      isShow:false,//用户未授权,
      terms:["hello"]
    }
  },
  beforeMount(){
    console.log('---获取授权信息---');
    //获取用户登录信息
    this.handleGetUserInfo()
  },
  methods:{
    handleGetUserInfo(){
    //获取用户信息
      wx.getUserInfo({
        success:(data) =>{
          console.log(data);
          //更新data中的数据
         this.userInfo = data.userInfo
         this.isShow = true;
        },
        fail:() =>{
          console.log('获取失败')
        }
      })
    },
    getUserInfo(data){
      //console.log(data)
      //判断用户是否授权
      if(data.mp.detail.rawData)
      //用户信息
      this.handleGetUserInfo()
    },
    toChoose(){
      if(this.userInfo.nickName){
        let event = this.userInfo
        console.log (event)
        wx.cloud.callFunction({ name: 'creat', data:event })
          .then(
            res => {
              console.log(res)
            },
            wx.setStorage({
              key: "dbname",
              data: event.nickName,
              success(){
                wx.switchTab({
                  url:'../choose/main'
                })
              }
            }),
            
          )
        
       
      }
      else{
        console.log('未授权')
        $Toast({
                content: '请点击用户授权登录',
                type: 'warning'
            })
      }
      
      
    }
  }

}
</script>

<style>
 page{
   background:#eee ;
 }
 .indexcontainer{
   display: flex;     /*显示布局*/ 
   flex-direction: column;     /*排列方向竖向*/ 
   align-items: center;     /*内容居中 */
 }
 .index_img{
   width: 100px;
   height: 100px;  
   border-radius: 100px;  /*圆角*/
   margin:50px 0;         /*外边距，上下50，左右0*/ 
 }
 .userName{
   font-size: 40rpx;      /*字体大小*/
   font-weight: bold;     /*字体粗细*/
   margin: 20px 0;
 }
 .goStudy{
   width: 220rpx;
   height: 80rpx;
   border: 1rpx solid aliceblue;
   background-color:aliceblue; /*边框为粗细1px的实线*/
   font-size: 24rpx;          /*字体大小*/
   line-height: 80rpx;        /*行高*/
   text-align: center;        /*段落排版居中*/
   border-radius: 10rpx;
   margin: 50px;
 }
 .btn{
   width: 100px;
   height: 100px;  
   border-radius: 100px;
   margin:50px 0;
   line-height: 100px;
   text-align: center;
   font-size: 15px;
   font-style: italic;    /*文字排版--斜体*/
   background-color:aliceblue;
 }

</style>