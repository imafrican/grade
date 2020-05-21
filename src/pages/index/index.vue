<template>
<div class="indexcontainer">
  <img v-if="isShow" class="index_img" :src = "userInfo.avatarUrl" alt="">
  <button class="btn" v-else open-type="getUserInfo" @getuserinfo = "getUserInfo">点击获取用户授权</button>
    <p class="userName">hello {{userInfo.nickName}}</p>
  <div @tap="toChoose" class="goStudy">
    <p>点击进入</p>
  </div>
</div>

</template>

<script>
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
      console.log('click')
      wx.navigateTo({
        url:'/pages/choose/main'
      })
    }
  }

}
</script>

<style>
 page{
   background: #8ed145;
 }
 .indexcontainer{
   display: flex;     /*显示布局*/ 
   flex-direction: column;     /*排列方向竖向*/ 
   align-items: center;     /*内容居中 */
 }
 .index_img{
   width: 150px;
   height: 150px;  
   border-radius: 100px;  /*圆角*/
   margin:20px 0;         /*外边距，上下50，左右0*/ 
 }
 .userName{
   font-size: 40rpx;      /*字体大小*/
   font-weight: bold;     /*字体粗细*/
   margin: 100rpx 0;
 }
 .goStudy{
   width: 220rpx;
   height: 80rpx;
   border: 1rpx solid #eee; /*边框为粗细1px的实线*/
   font-size: 24rpx;          /*字体大小*/
   line-height: 80rpx;        /*行高*/
   text-align: center;        /*段落排版居中*/
   border-radius: 10rpx;
 }
 .btn{
   width: 150px;
   height: 150px;  
   border-radius: 100px;
   margin:20px 0;
   line-height: 150px;
   text-align: center;
   font-size: 15px;
   font-style: italic;    /*文字排版--斜体*/
   background-color: #8ed145;
 }

</style>