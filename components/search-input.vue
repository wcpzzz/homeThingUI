<template>
	<view class="content bg-white">
		<view class="input-box">
			<input  :placeholder="items.placeholder?items.placeholder:''"  v-model="input"
				:type="items.type?items.type:'text'" :maxlength="items.maxlength?items.maxlength:''"
				@input="inputListener"
			/>
			<view class="cuIcon-search i-search" @tap.stop="clear"  ></view>

			<view class="cuIcon-delete i-clear" @tap.stop="clear"  ></view>
		</view>
			<view v-if="input.length>0 && showSearchBtn" @tap="confrim" :style="'color:'+color" class="text" >搜索</view>

	</view>
</template>

<script>
	export default{
		props:{
			items:{
				type:Object
			},
			showSearchBtn:{
				type:Boolean,
				default:true
			}
		},
		mounted() {
			this.color=this.BASECOLOR;
		},
		data(){
			return{
				input:'',
				color:''
			}
		},
		methods:{
			clear(){
				this.input='';
				this.$emit('inputListener',this.input)

			},
			confrim(){
				this.$emit('confirm',this.input)
			},
			inputListener(){
				this.$emit('inputListener',this.input)

			}
		}
	}

</script>

<style lang="scss">
	.content{
		/*padding: 10upx 20upx;*/
		display: flex;
		width: 100%;
		justify-content: space-between;
		.input-box{
			display: flex;
			align-items: center;
			/*height: 60upx;*/
			flex-grow: 1;
			background-color: #f0f0f0;
			color: #333333;
			position: relative;
			border-radius: 10upx;
			.i-clear{
				color: #c0c0c0;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				margin-left: auto;
				padding: 0 10upx;
				z-index: 1100;
				font-size: 40upx;
				font-weight: 300;

			}
			.i-search{
				color: #c0c0c0;

				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				padding: 0 0 0 10upx;
				z-index: 1100;
				position: absolute;
				font-weight: bold;
				font-size: 40upx;
			}
			input{
				padding-left: 60upx;
				width: 100%;
			}
		}
		.text{
			display: flex;
			align-items: center;
			padding: 0 20upx;
		}

	}

</style>
