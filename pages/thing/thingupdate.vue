<template>
    <view class="page">
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

                        thingMoney	number($double)
                        物品价格

                        thingName	string
                        物品名

                        thingNum	integer($int32)
                        物品数量

                        thingStatus	string
                        物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）

                        }-->
            <view class="cu-form-group">
                <!--                默认模糊搜索-->
                <view class="title">物品名</view>
                <input placeholder="请输入物品名" name="input" v-model="updateThingForm.thingName"></input>
            </view>
            <view class="cu-form-group">
                <view class="title">物品价格</view>
                <input placeholder="请输入物品价格" name="input" v-model="updateThingForm.thingMoney"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认1-->
                <view class="title">物品数量</view>
                <input placeholder="请输入物品数量" name="input" v-model="updateThingForm.thingNum"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认正常-->
                <view class="title">物品状态</view>
                <input placeholder="物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）" name="input"
                       v-model="updateThingForm.thingStatus"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认自己,二期-->
                <view class="title">管理者</view>
                <input placeholder="请输入管理者" name="input" v-model="updateThingForm.thingUserMaster"></input>
            </view>
            <view class="cu-form-group">
                <!--                默认自己,二期-->
                <view class="title">拥有者</view>
                <input placeholder="请输入拥有者" name="input" v-model="updateThingForm.thingUserOwner"></input>
            </view>
        </view>
        <!--            这里是底部，放新增和记录按钮-->
        <!--            记录按时间倒序展示物品变动情况-->
        <view>
            <view class="wcpzzzfoot">
                <view class="wcpzzzbtn-bottom" style="background-color:#ff8200;color: white"
                      @tap="updateByIdThing(updateThingForm)">确认修改
                </view>
            </view>
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {findListThing, findListLocation} from '@/common/api.js'

    export default {
        data() {
            return {
                //items替换方法的find
                itemsListThing: [],
                itemsListUser: [],
                itemsListLocation: [],
                updateThingForm: {
                    thingId: '',
                    thingModiTime: '',
                    thingMoney: '',
                    thingName: '',
                    thingNum: '',
                    thingStatus: '',
                    thingUserCreater: '',
                    thingUserMaster: '',
                    thingUserOwner: ''
                }
            }
        },
        methods: {
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            updateByIdThing(item) {
                this.AUTOAPI.updateByIdThing(item).then(() => {
                    console.log('updateThing')
                }).catch(err => {
                    console.log('updateThing' + err)
                });
            },
            findListThing(item){
                this.AUTOAPINEW.findListThingWithThingtypeWithUserWithLocation(item).then((res) => {
                    // 物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）
                    this.updateThingForm = res[0]
                }).catch((err) => {
                    console.log('findListThingWithThingtypeWithUserWithLocation' + err)
                })
            },

        },
        computed: {},
        onReachBottom() {
        },
        filters: {},
        onLoad(options) {
            this.findListThing({thingId:options.thingId})
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
