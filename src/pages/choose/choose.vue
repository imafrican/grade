<template>
<div class="chooseContainer">
    <div class="card2" v-for="item in items" :key="item">
        <view class="head">
            <view>
                <img  :src="item.img">
            </view>
            <view class="viewContainer">
                <view>
                    {{item.title}}
                </view>
                <view class="textView">
                    {{item.teacher}}
                </view>
            </view>
        </view>
        <button class="button1" @tap ="chooseCourse(item.type) ">点击选课</button>
        <button class="button2" @tap ="courseDetail(item.type)">查看课程</button>  
        <i-toast id="toast" /> 
    </div>
</div>
</template>

<script>

const { $Toast } = require('../../../static/iview/base/index');

export default {
    data(){
        return{
            items:[],
            collectionName:""
        }  
    },
    mounted (){
         wx.getStorage({
            key: 'dbname',
             success (res) {
                console.log(res.data)
            
               
            }
        })
        
    },
    
    methods:{

        chooseCourse(type){ 
            
            console.log(type);
            const db = wx.cloud.database({ env: 'choosecourse-env' })
            db.collection('courseData').where({
                type:type
            })
            .get().then(
                res => {
                    console.log(res.data[0])
                    let event = res.data[0]
                    wx.cloud.callFunction({ name: 'add-course', data:event })
                    .then(
                        res => {
                         console.log(res)
                        }
                    ) 
                    $Toast({
                        content: '已加入我的课程',
                        type: 'success'
                    });
                }
            )            
        } ,
        courseDetail(type){
        let url = '/pages/courseDetail/main?type=' + type
         mpvue.navigateTo({ url })
        }
    } ,

    created (type) {
        const db = wx.cloud.database({ env: 'choosecourse-env' })
        db.collection('courseData').get().then(
        res => {
        console.log(res.data)
        this.items = res.data
        }
        )           
    }
    
    
   
}
</script>

<style>

.head{ 
    display: flex;
}

.chooseContainer{
    display: flex;
    flex-direction: column;
}

.card2{
    border: 1px solid;
    border-color: darkgray;
   border-radius: 10px;
   margin: 5px 15px;
}

.card2 img{
    width: 80px;  
    height: 50px;
    margin: 10px;
    vertical-align: middle;
    border-radius: 5px;
}

.viewContainer{
    line-height: 35px;
}

.textView{
    font-size: 13px;
    font-style:italic;
    color: darkgray;
    line-height: 20px;
}

.button1 { 
    border: 1px solid;
    border-color: darkgray;
    background-color:azure;
    width: 100px;
   height: 30px;
   line-height: 30px;
    text-align: center;
    border-radius: 10px;
    font-size: 14px;
    margin:0 0 5px 130px;
    float:left;
}
.button2 { 
    border: 1px solid;
    border-color: darkgray;
    background-color:azure;
    width: 100px;
    height: 30px;
   line-height: 30px;
    text-align: center;
    border-radius: 10px;
    font-size: 14px; 
    margin:0 10px 5px 0;
    float:right;
}

</style>