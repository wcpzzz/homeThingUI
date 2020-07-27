<template>
    <view class="page">
        <view style="font-size: 30px;text-align: center;">
            家庭物品管理
        </view>
        <view class="functionList" style="margin-bottom: 10px">
            <view class="functionitem">
                <!--        前往物品列表-->
                <view class="icons cuIcon-goodsfill">
                </view>
                <view>物品管理</view>
            </view>
            <!--        前往成员列表-->
            <view class="functionitem">
                <view class="icons cuIcon-peoplefill">
                </view>
                <view>成员管理</view>
            </view>
            <!--        前往仓库列表-->
            <view class="functionitem">
                <view class="icons cuIcon-homefill">
                </view>
                <view>仓库管理</view>
            </view>
        </view>
        <view class="search-out">
            <view class="searchinput">
                <view class="cu-bar search">
                    <view class="search-form round">
                        <text class="cuIcon-search "></text>
                        <input type="text" placeholder="物品查询" confirm-type="search" @input="searchIconThing"></input>
                    </view>
                </view>
            </view>
            <view>物品列表</view>
            <view class="cu-form-group">
                <view class="title">1234</view>
                <view class="content">23435</view>
                <sanjiao></sanjiao>
            </view>
        </view>
        <view class="search-out">
            <view class="searchinput">
                <view class="cu-bar search ">
                    <view class="search-form round">
                        <text class="cuIcon-search"></text>
                        <input type="text" placeholder="成员查询" confirm-type="search" @input="searchIconUser"></input>
                    </view>
                </view>
            </view>
            <view>成员列表</view>
            <view class="cu-form-group">
                <view class="title">1234</view>
                <view class="content">23435</view>
                <sanjiao></sanjiao>
            </view>
        </view>
        <view class="search-out">
            <view class="searchinput">
                <view class="cu-bar search">
                    <view class="search-form round">
                        <text class="cuIcon-search"></text>
                        <input type="text" placeholder="仓库查询" confirm-type="search" @input="searchIconLocation"></input>
                    </view>
                </view>
            </view>
            <view>仓库列表</view>
            <view class="cu-form-group">
                <view class="title">1234</view>
                <view class="content">23435</view>
                <sanjiao></sanjiao>
            </view>
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {findListThing,findListUser2,findListLocation} from '@/common/api.js'

    export default {
        data() {
            return {
                itemsListThing: [],
                itemsListUser2: [],
                itemsListLocation: []
            };
        },
        methods: {
            searchIconThing(e) {
                this.findListThing(e.detail.value)
            },
            searchIconUser(e) {
                this.findListUser2(e.detail.value)
            },
            searchIconLocation(e) {
                this.findListLocation(e.detail.value)
            },
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            confirm(transId) {
                console.log('ok')
            },
            // 物品搜索
            findListThing(item) {
                let request = {};
                request.thingName = item
                findListThing(request).then((res)=>{
                    this.itemsListThing = res.data
                }).catch((err)=>{
                    console.log('findListThing'+err)
                })
            },
            // 成员搜索
            findListUser2(item) {
                let request = {};
                request.user2Name = item
                findListUser2(request).then((res)=>{
                    this.findListUser2 = res.data
                }).catch((err)=>{
                    console.log('findListUser2'+err)
                })
            },
            // 仓库搜索
            findListLocation(item) {
                let request = {};
                request.locationName = item
                findListLocation(request).then((res)=>{
                    this.findListLocation = res.data
                }).catch((err)=>{
                    console.log('findListLocation'+err)
                })
            }
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
        /*background-color: #242424;*/
    }

    .functionList {
        display: flex;
        justify-content: space-between;

        .functionitem {
            text-align: center;
        }

        .icons {
            font-size: 38px;

        }
    }
    .search-out{
        margin-bottom: 10px;
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
