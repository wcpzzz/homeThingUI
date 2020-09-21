<template>
    <view class="page">
        <view style="font-size: 30px;text-align: center;">
            家庭物品管理
        </view>
        <view class="functionList" style="margin-bottom: 10px">
            <view class="functionitem" @click="toPage('/pages/thing/thing')">
                <!--        前往物品列表-->
                <view class="icons cuIcon-goodsfill">
                </view>
                <view>物品管理</view>
            </view>
            <!--        前往成员列表-->
            <view class="functionitem" @click="toPage('/pages/user/user')">
                <view class="icons cuIcon-peoplefill">
                </view>
                <view>成员管理</view>
            </view>
            <!--        前往仓库列表-->
            <view class="functionitem" @click="toPage('/pages/location/location')">
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
                        <input type="text" placeholder="物品查询,输入【。】可查询全部" confirm-type="search"
                               @input="searchIconThing"></input>
                    </view>
                </view>
            </view>
            <block v-if="itemsListThing.length>0">
                <view>物品列表</view>
                <view class="cu-form-group" v-for="(item,index) in itemsListThing" :key="index">
                    <view>名称：{{item.thingName}}</view>
                    <view>地点：
                        <text v-for="(item2,index2) in item.thingLocationList" :key="index2">
                            {{item2.locationName}}
                        </text>
                        <!--                    <view class="content">{{item.thingStatus}}</view>-->
                        <!--                    <view class="title">{{item.thingName}}</view>-->
                        <!--                    <view class="content">{{item.thingStatus}}</view>-->

                    </view>
                    <sanjiao></sanjiao>
                </view>
            </block>
        </view>
        <view class="search-out">
            <view class="searchinput">
                <view class="cu-bar search ">
                    <view class="search-form round">
                        <text class="cuIcon-search"></text>
                        <input type="text" placeholder="成员查询,输入【。】可查询全部" confirm-type="search"
                               @input="searchIconUser"></input>
                    </view>
                </view>
            </view>
            <block v-if="itemsListUser.length>0">
                <view>成员列表</view>
                <view class="cu-form-group" v-for="(item,index) in itemsListUser" :key="index">
                    <view>{{item.userName}}</view>
                    <view class="content">手机：{{item.userMobile}}</view>
                    <sanjiao></sanjiao>
                </view>
            </block>
        </view>
        <view class="search-out">
            <view class="searchinput">
                <view class="cu-bar search">
                    <view class="search-form round">
                        <text class="cuIcon-search"></text>
                        <input type="text" placeholder="仓库查询,输入【。】可查询全部" confirm-type="search"
                               @input="searchIconLocation"></input>
                    </view>
                </view>
            </view>
            <block v-if="itemsListLocation.length>0">
                <view>仓库列表</view>
                <view class="cu-form-group" v-for="(item,index) in itemsListLocation" :key="index">
                    <view>{{item.locationName}}</view>
                    <!--                <view class="content">{{item.locationName}}</view>-->
                    <sanjiao></sanjiao>
                </view>
            </block>
        </view>
        <view>
        </view>
        <c-notify ref='notify'></c-notify>
    </view>
</template>

<script>
    import {login} from '@/common/apinew.js'

    export default {
        data() {
            return {
                itemsListThing: [],
                itemsListUser: [],
                itemsListLocation: []
            };
        },
        methods: {
            searchIconThing(e) {
                if (e.detail.value == "。") {
                    this.AUTOAPINEW.findListThingWithThingtypeWithUserWithLocation({}).then((res) => {
                        // 物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）
                        this.itemsListThing = res
                    }).catch((err) => {
                        console.log('findListThingWithThingtypeWithUserWithLocation' + err)
                    })
                } else if (e.detail.value) {
                    this.AUTOAPINEW.findListThingWithThingtypeWithUserWithLocation({'thingName': e.detail.value}).then((res) => {
                        this.itemsListThing = res.filter(item => {
                            // 物品状态（1、正常；2、待找寻；3、待补充；4、待遗弃；5、待维修；）
                            switch (item.thingStatus) {
                                case 1:
                                    item.statusName = "正常";
                                    break;
                                case 2:
                                    item.statusName = "待找寻";
                                    break;
                                case 3:
                                    item.statusName = "待补充";
                                    break;
                                case 4:
                                    item.statusName = "待遗弃";
                                    break;
                                case 5:
                                    item.statusName = "待维修";
                                    break;
                            }
                            return true
                        })
                    }).catch((err) => {
                        console.log('findListThingWithThingtypeWithUserWithLocation' + err)
                    })
                } else {
                    //一个字符都没有的话,就清空
                    this.itemsListThing = []
                }
            },
            searchIconUser(e) {
                if (e.detail.value == "。") {
                    this.AUTOAPI.findListUser({}).then((res) => {
                        this.itemsListUser = res
                    }).catch((err) => {
                        console.log('findListUser' + err)
                    })
                } else if (e.detail.value) {
                    this.AUTOAPI.findListUser({'userName': e.detail.value}).then((res) => {
                        this.itemsListUser = res
                    }).catch((err) => {
                        console.log('findListUser' + err)
                    })
                } else {
                    //一个字符都没有的话,就清空
                    this.itemsListUser = []
                }
            },
            searchIconLocation(e) {
                if (e.detail.value == "。") {
                    this.AUTOAPINEW.findListLocationWithUser({}).then((res) => {
                        this.itemsListLocation = res
                    }).catch((err) => {
                        console.log('findListLocationWithUser' + err)
                    })
                } else if (e.detail.value) {
                    this.AUTOAPINEW.findListLocationWithUser({'locationName': e.detail.value}).then((res) => {
                        this.itemsListLocation = res
                    }).catch((err) => {
                        console.log('findListLocationWithUser' + err)
                    })
                } else {
                    //一个字符都没有的话,就清空
                    this.itemsListLocation = []
                }
            },
            toPage(path) {
                this.COMMONFUNCTION.toPage(path)
            },
            confirm(transId) {
                console.log('ok')
            },
        },
        computed: {},
        onReachBottom() {
        },
        filters: {},
        onLoad() {
        },
        onShow() {
            //用户登录，获取token
            var request =
                {
                    userMobile: "13212527652",
                    userName: "魏晨鹏"
                }
            this.AUTOAPINEW.login(request).then(res => {
                console.log(res.data)
            })
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
        /**/
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

    .search-out {
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


<!--
<template>
    <view class='class-table'>
        <view class='table-wrapper'>
            <view class='tabel-container'>
                <table style="width: 100%">
                    <thead>
                    <tr>
                        <th>时间</th>
                        <th v-for='(week, index) in weeks' :key='index' style="width: 16%;"> {{'周' + digital2Chinese(index+1, 'week')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for='(item, index) in classTableData' :key='index' style="width: 16%;">
                        <td>
                            <p>{{digital2Chinese(index+1)}}</p>
&lt;!&ndash;                            <p>{{digital2Chinese(index+1)}}</p>&ndash;&gt;
                            <p class='period'>{{ item.classesTime }}</p>
                        </td>
                        <td v-for='(week, index) in weeks' :key='index'>
                            {{item[week]  || '-'}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </view>
        </view>
    </view>
</template>

<script>

    export default {
        data() {
            return {
                weeks: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
                classTableData: [{
                    'classesTime': '08:00-09:00',
                    'monday': '物理',
                    'tuesday': '英语',
                    'wednesday': '政治',
                    'thursday': '历史',
                    'friday': '化学',
                    'saturday': '历史',
                    'sunday': '化学'
                }, {
                    'classesTime': '09:00-10:00',
                    'monday': '生物',
                    'tuesday': '物理',
                    'wednesday': '化学',
                    'thursday': '英语',
                    'friday': '化学',
                    'saturday': '生物',
                    'sunday': '化学'
                }, {
                    'classesTime': '10:00-11:00',
                    'monday': '生物',
                    'tuesday': '物理',
                    'wednesday': '生物',
                    'thursday': '历史',
                    'friday': '生物',
                    'saturday': '英语',
                    'sunday': '政治'
                }, {
                    'classesTime': '11:00-12:00',
                    'monday': '',
                    'tuesday': '政治',
                    'wednesday': '物理',
                    'thursday': '政治',
                    'friday': '历史',
                    'saturday': '历史',
                    'sunday': '生物'
                }, {
                    'classesTime': '13:00-14:00',
                    'monday': '生物',
                    'tuesday': '历史',
                    'wednesday': '历史',
                    'thursday': '历史',
                    'friday': '',
                    'saturday': '英语',
                    'sunday': '化学'
                }, {
                    'classesTime': '14:00-15:00',
                    'monday': '化学',
                    'tuesday': '英语',
                    'wednesday': '物理',
                    'thursday': '化学',
                    'friday': '语文',
                    'saturday': '物理',
                    'sunday': '英语'
                }, {
                    'classesTime': '15:00-16:00',
                    'monday': '历史',
                    'tuesday': '历史',
                    'wednesday': '语文',
                    'thursday': '历史',
                    'friday': '生物',
                    'saturday': '英语',
                    'sunday': ''
                }],
                tableShow: false
            };
        },
        created() {
            // /* mock随机数据*/
            //  Mock.mock({
            //     'data|7': [
            //         {
            //             'classesTime|+1': ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
            //             'monday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'tuesday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'wednesday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'thursday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'friday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'saturday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
            //             'sunday|1': ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']
            //         }
            //     ]
            // });
        },
        methods: {
            /**
             * 数字转中文
             * @param {Number} num 需要转换的数字
             * @param {String} identifier 标识符
             * @returns {String} 转换后的中文
             */
            digital2Chinese(num, identifier) {
                const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
                return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num];
            }
        }
    };
</script>

<style lang='scss' scoped>
    .class-table {
        .table-wrapper {
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .tabel-container {
            margin: 7px;

            table {
                table-layout: fixed;
                width: 100%;

                thead {
                    background-color: #67a1ff;
                    th {
                        color: #fff;
                        line-height: 17px;
                        font-weight: normal;
                    }
                }
                tbody {
                    background-color: #eaf2ff;
                    td {
                        color: #677998;
                        line-height: 12px;
                    }
                }
                th,
                td {
                    width: 60px;
                    padding: 12px 2px;
                    font-size: 12px;
                    text-align: center;
                }

                tr td:first-child {
                    color: #333;
                    .period {
                        font-size: 8px;
                    }
                }
            }
        }
    }
</style>-->
