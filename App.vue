<script>
	export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
	}
</script>

<style>
	@import "static/css/main.css";
	@import "static/icon/iconfont.css";
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "colorui/animation.css";
    @import "colorui/wcpzzz.css";
</style>


<!--开发流程-->
<!--步骤设计：先写创建，后写修改，最后写查询-->
<!--单页面设计：先注释好界面内容，再定好data数据，然后引入接口-->


<!--
外部小程序传参过来
onShow: function(options) {
console.log(options.referrerInfo.extraData)
if(options){
uni.setStorage({
key: 'appData',
data: options.referrerInfo.extraData,
})
}
},-->
