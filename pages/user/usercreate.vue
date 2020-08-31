<template>
    <view class="page">
        <!--
        {
  "creater": "string",
  "id": 0,
  "master": "string",
  "owner": "string",
  "UserMoney": 0,
  "UserName": "string",
  "UserNum": 0,
  "UserStatus": "string"
}
        -->
        <view>
            <!--            这里放各种输入框-->

            <!--            {
                        creater	string
                        创建者

                        id	integer($int32)
                        master	string
                        管理者

                        modiTime	string($date-time)
                        修改时间

                        owner	string
                        拥有者

                        UserMoney	number($double)
                        物品价格

                        UserName	string
                        物品名

                        UserNum	integer($int32)
                        物品数量

                        UserStatus	string
                        物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）

                        }-->
            <view class="cu-form-group">
                <!--                默认模糊搜索-->
                <view class="title">用户名</view>
                <input placeholder="请输入用户名" name="input" v-model="createUserForm.userName"></input>
            </view>
            <view class="cu-form-group">
                <view class="title">手机号</view>
                <input placeholder="请输入手机号" name="input" v-model="createUserForm.mobile"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认1-->
                <view class="title">邮箱</view>
                <input placeholder="请输入邮箱" name="input" v-model="createUserForm.email"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认正常-->
                <view class="title">角色</view>
                <input placeholder="角色（1、终极管理员；2、管理员可以加人，改成员，不能改平级管理员；3、成员不能加人）" name="input" v-model="createUserForm.role"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认自己,二期-->
                <view class="title">管理者</view>
                <input placeholder="请输入管理者" name="input" v-model="createUserForm.userMaster"></input>
            </view>
        </view>

        <view>
            <view class="wcpzzzfoot">
                <view class="wcpzzzbtn-bottom" style="background-color:#ff8200;color: white"
                      @tap="createUser(createUserForm)">确认新增
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
                itemsListUser: [],
                itemsListUser: [],
                itemsListLocation: [],
                createUserForm: {
                    email: '',
                    mobile: '',
                    modiTime: '',
                    role: '',
                    userMaster: '',
                    userName: '',
                }
            }
        },
        methods: {
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            createUser(item) {
                let request = {};
                request = item
                createUser(request).then(res => {
                    // this.itemsListUser = res
                    console.log('createUser' + JSON.stringify(res))
                }).catch((err) => {
                    console.log('createUser' + err)
                })

            },
            findListUser(item) {
                let request = {};
                request.userName = item
                findListUser(request).then(res => {
                    this.itemsListUser = res
                    console.log('findListUser' + JSON.stringify(res))
                }).catch((err) => {
                    console.log('findListUser' + err)
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
