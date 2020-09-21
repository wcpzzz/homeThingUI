<template>
    <view class="page">
<!--        仓库名查询，
        上级仓库查询，
        下级仓库查询，
        管理人员查询，（多条件）
        查询完了，跳转到仓库修改或仓库拥有的物品列表，
        可跳至新建仓库页面，-->
        <view>
<!--            这里放一堆地点tag-->
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
<!--            这里展示仓库列表-->
<!--            默认查出全部-->
        </view>
        <view>
<!--            这里是底部，放新增和记录按钮-->
<!--            记录按时间倒序展示物品变动情况-->
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {getTrainerList} from '@/common/api.js'

    export default {
        data() {
            return {}
        },
        methods: {
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
        },
        computed: {},
        onReachBottom() {
        },
        filters: {},
        onLoad() {

        },
        onShow() {

        },
        onShareAppMessage() {
            let share = {
                //分享到微信朋友
                title: '家庭物品管理系统',
                path: '/pages/home/home',
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
