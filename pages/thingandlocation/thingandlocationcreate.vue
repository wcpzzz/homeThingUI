<template>
    <view class="page">
<!--        {
        locationId	string
        locationMaster	string
        地点上级

        locationMemo	string
        地点注释

        locationModiTime	string($date-time)
        修改时间

        locationName	string
        地点名称

        locationSlave	string
        地点下属

        locationUserCreater	string
        创建者

        locationUserMaster	string
        管理者

        }-->
        <view>
            <view class="cu-form-group">
                <!--                默认模糊搜索-->
                <view class="title">地点名称</view>
                <input placeholder="请输入地点名称" name="input" v-model="createLocationForm.locationName"></input>
            </view>
            <view class="cu-form-group">
                <view class="title">创建者</view>
                <input placeholder="请输入创建者" name="input" v-model="createLocationForm.locationMaster"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认1-->
                <view class="title">管理者</view>
                <input placeholder="请输入管理者" name="input" v-model="createLocationForm.locationUserMaster"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认正常-->
                <view class="title">地点下属</view>
                <input placeholder="请输入地点下属" name="input" v-model="createLocationForm.locationSlave"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认自己,二期-->
                <view class="title">地点上级</view>
                <input placeholder="请输入地点上级" name="input" v-model="createLocationForm.locationMaster"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认自己,二期-->
                <view class="title">地点注释</view>
                <input placeholder="请输入地点上级" name="input" v-model="createLocationForm.locationMemo"></input>
            </view>
        </view>

        <view>
            <view class="wcpzzzfoot">
                <view class="wcpzzzbtn-bottom" style="background-color:#ff8200;color: white"
                      @tap="createUser(createLocationForm)">确认新增
                </view>
            </view>
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {findListUser, findListLocation, create, createUser} from '@/common/api.js'

    export default {
        data() {
            return {
                //items替换方法的find
                itemsListLocation: [],
                createLocationForm: {
                    locationId: '',
                    locationMaster: '',
                    locationMemo: '',
                    locationModiTime: '',
                    locationName: '',
                    locationSlave: '',
                    locationUserCreater: '',
                    locationUserMaster: '',
                }
            }
        },
        methods: {
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            createLocation(item) {
                this.AUTOAPI.createLocation(item).then(()=>{
                    console.log('createLocation')
                }).catch(err=>{
                    console.log('createLocation'+err)
                });
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

    .cu-form-group .title {
        min-width: calc(4em + 15px);
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
