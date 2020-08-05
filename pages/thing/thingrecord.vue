<template>
    <view class="page">
        <!--        地点查询，
                种类查询，
                所有者查询，
                状态查询，（多条件）
                查询完了，跳转到物品修改，
                可跳至新建物品页面，-->
        <view>
            <!--            这里放一堆地点tag-->
            <view class='cu-tag round text-white bg-blue' v-for="(item,index) in itemsListLocation" :key="index">
                {{item.locationName}}
<!--                选择的时候变成绿色-->
            </view>
        </view>
        <view>
            <!--            这里放一堆种类tag-->
        </view>
        <view>
            <!--            这里放一堆状态tag-->
        </view>
        <view>
            <!--            这里放一堆所有者tag-->
        </view>
        <view>
            <!--            这里放搜索框（物品名称）-->
        </view>
        <view>
            <!--            这里展示物品列表-->
        </view>
        <view>
            <!--            这里是底部，放新增和记录按钮-->
            <!--            记录按时间倒序展示物品变动情况-->
            <view class="wcpzzzfoot">
                <view class="wcpzzzbtn-bottom" style="background-color:#ff8200;color: white" @tap="toPage(thingcreate)">新增</view>
                <view class="wcpzzzbtn-bottom" style="background-color:white;" @tap="toPage(thingrecord)">记录</view>
            </view>
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {findListThing,findListLocation} from '@/common/api.js'

    export default {
        data() {
            return {
                //items替换方法的find
                itemsListThing: [],
                itemsListUser2: [],
                itemsListLocation: []
            }
        },
        methods: {
/*            findListUser2(item) {
                let request = {};
                request.userName = item
                findListUser2(request).then((res) => {
                    this.itemsListUser2 = res
                    console.log('itemsListUser2' + JSON.stringify(this.itemsListUser2))
                }).catch((err) => {
                    console.log('findListUser2' + err)
                })
            },*/
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            findListThing(item){
                let request = {};
                request.userName = item
                findListThing(request).then(res =>{
                    this.itemsListThing = res
                    console.log('findListThing' + JSON.stringify(res))
                }).catch((err) => {
                    console.log('findListThing' + err)
                })
            },
            // 仓库搜索
            findListLocation(item) {
                let request = {};
                request.locationName = item
                findListLocation(request).then((res) => {
                    this.itemsListLocation = res
                    console.log('findListLocation' + JSON.stringify(res))
                }).catch((err) => {
                    console.log('findListLocation' + err)
                })
            }

        },
        computed: {},
        onReachBottom() {
        },
        filters: {},
        onLoad() {
            this.findListLocation("")
        },
        onShow() {

        },
        onShareAppMessage() {
            let share = {
                //分享到微信朋友
                title: 'LOOP健身房预约',
                path: '/pages/tarBar/coursetable/coursetable',
                // imageURL: '/static/share.jpg'
            }
            return share;
        },
    }
</script>

<style lang="scss">
    .page {
        width: 100%;
        height: 100vh !important;
        padding: 0 10px;
        white-space: pre-wrap; /*空格*/
    }
</style>


<!--参考书-->
<!--
uni.navigateBack()

uni.navigateTo()

uni.showToast({
icon:'none',
title:'未开通此功能，请联系管理员'
})

uni.stopPullDownRefresh()

uni.setNavigationBarColor({
frontColor:'#ffffff',
backgroundColor:this.BASECOLOR
})

uni.setNavigationBarTitle({
title:data.userName,
success:()=> {
this.queryOrder();
}
})

uni.previewImage({
urls: this.imgList,
current: e.currentTarget.dataset.url
});

uni.showLoading({
title:loadingTitle,
mask:true
})

uni.chooseImage({
count: 1, //默认9
sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
success: (res) => {
if (this.imgList.length != 0) {
this.imgList = this.imgList.concat(res.tempFilePaths)
} else {
this.imgList = res.tempFilePaths
}
}
});
v-for="(item,index) in items" :key="index"
-->
