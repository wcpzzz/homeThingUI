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
	
</style>





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
