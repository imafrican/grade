<template>
  <div class ="detailContainer">
      <div class="main" v-for="(i,index2) in recommand" :key="i" v-if="index2<1" >
            <img  :src="i.courseimg" >        
      </div>
      <div>     
            <view class="head" >
                <p >章节目录</p>
                <view class="viewcontainer" v-for="(i,index1) in recommand" :key="i">
                    <img class="chapterimg" :src="i.chapterimg">
                    <view class="textview">
                        <view  v-for="(item,index) in i.chaptercontent" :key="item">
                            <tr>{{item}}</tr>
                        </view>
                    </view>
                </view>
            </view>
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
   background: aliceblue ;
 }

 .detailContainer{
    display: flex;
    flex-direction: column;
}
.main img{
    width:100%;
    height:200px;
}

 .head{
    display: flex;
    flex-direction: column;
}
.head p{
    margin:10px;
    text-align: center;
    font-size:20px;
    font-family:"宋体";
    text-decoration:underline;
    word-spacing:5px;
}

.viewcontainer{
    border:1px dashed;
    border-radius:10px;
    margin:5px 10px;
}
 .chapterimg{
    width: 80px;  
    height: 80px;
    line-height: 25px;
    float:left;
}
.textview{
   line-height: 25px;
   float:left;
   margin-left:20px
}
 
</style>