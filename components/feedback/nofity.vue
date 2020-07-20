<!-- 顶部通知 -->
<template>
	<view :class="'content '+ animation" v-if="realShow" :style="'background-color:'+backgroundColor">{{content}}</view>
</template>

<script>
	const enter='animation-slide-enter';
	const out='animation-slide-out';
	
	const danger='#e91801';
	const info='#00a1e9';
	const success='#00bb0c';
	
	export default{
		props:{
			duration:{
				type:Number,
				default:1500,
			},
		},
		data(){
			return{
				animation:'',
				realShow:false,
				backgroundColor:'',
				content:''
			}
		},
		methods:{
			show(content,color){
				if(this.animation===enter)
					return;
				this.content=content;
				this.backgroundColor=this.COLORCONFIG.info;
				if(color)
					this.backgroundColor=color;
				this.realShow=true;
				this.animation=enter;
				setTimeout(()=>{
					this.hide();
				},this.duration)
			},
			hide(){
				if(!this.animation===enter)
					return;
				this.animation=out;
				// this.realShow=false;
			}
		}
	}
</script>

<style lang="scss">
	[class*=animation-] {
	    animation-duration: .2s;
	    animation-timing-function: linear;
	    animation-fill-mode: both
	}
	.content{
		z-index:9999;
		top: 0;
		text-align: center;
		display: flex;
		position: fixed;
		font-size: 27upx;
		line-height: 70upx;
		justify-content: center;
		width: 100%;
		color:#FFFFFF
	}
	.animation-slide-enter{
		animation-name: slide-enter;
	}
	.animation-slide-out{
		animation-name: slide-out;
	}
	@keyframes slide-enter {
	    0% {
	        opacity: 1;
	        transform: translateY(-100%)
	    }
	
	    100% {
	        opacity: 1;
	        transform: translateY(0)
	    }
	}
	@keyframes slide-out {
	    0% {
	        opacity: 1;
	        transform: translateY(0)
	    }
	
	    100% {
	        opacity: 1;
	        transform: translateY(-100%)
	    }
	}
</style>
