<template>
<div>
    <div class="card">
        <i-panel hide-border="ture">
            <view>
                <i-card i-class="cardContainer" v-for="item in items" :key="item" :title="item.title" :extra="item.extra" :thumb="item.thumb" >
                <view @tap="chooseCourse" class="contntText" slot="content">点击选课</view>
                <view class="" slot="footer"></view>
                </i-card>
            </view>
        </i-panel>
        
    </div>
</div>

</template>

<script>
export default {
    data:{
        items:[
            {title:'教学系统设计', extra:'授课教师', thumb:'/static/images/1.png'},
            {title:'无线传感器网络', extra:'授课教师', thumb:'/static/images/2.png'},
            {title:'物联网', extra:'授课教师', thumb:'/static/images/3.png'},
            {title:'虚拟现实技术', extra:'授课教师', thumb:'/static/images/4.jpg'}
        ]

    },
    methods:{
        chooseCourse(item){
            console.log('click')
        }
    }
    
   
}
</script>

<style>
.card{
    margin: 8px 0;
    align-items: center;/*内容居中 */
}
.cardContainer {
    font-size: 15px;
    white-space:nowrap;
}

.contntText{
    background-color:azure;
    width: 80px;
   height: 20px;
   border: 1rpx solid #eee;
   border-radius: 10px;
    text-align: center;
}

</style>