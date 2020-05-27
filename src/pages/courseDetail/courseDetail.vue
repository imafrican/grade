<template>
  <div class ="detailContainer">
      <div v-for="item in recommand" :key="item">
        <img :src="item.img">
        <p class="pView">课程简介</p>
      <view>{{item.content}}</view>
      <p>课程资源</p>
      <view>{{item.url}}</view>
      </div>
      <div>
      
      </div>



  </div>
</template>

<script>
export default {
    data(){
        return{
            recommand:[]
        }
    },
    onLoad (options){
    console.log(options.type)
    this.recommand = require('@/data/' + options.type + '.json')
  },

}
</script>

<style>
page{
   background: #236AAA;
 }
.detailContainer{
    display: flex;
    flex-direction: column;
}
.pView{
    text-align: center;
}
.viewHead{
    display: flex;
}
.viewHead img{
    width: 70px;
    height: 70px;
    margin: 10px;
    vertical-align: middle;
    border-radius: 35px;
    background:blue;
}
.textView{
    margin: 10px;
    line-height: 25px;
}
</style>