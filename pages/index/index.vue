<template>
	<view class="content">
		<home v-if="currentTabBarIndex == 0" ref="childHome"></home>
		<order v-if="currentTabBarIndex == 1"></order>
		<my v-if="currentTabBarIndex == 2" ref="my" @logout="setMaster"></my>
		<view class="tab-bar">
			<view class="tab-bar-content " :class="{'master-menu': isMaster}">
				<view class="tab-bar-item" v-for="(item, index) in tabBar.list" :key="index" :class="{'tab-active': currentTabBarIndex == index}"
				 @click="switchTab" :data-index="index">
					<image class="icon-tab-bar" :src="currentTabBarIndex === index ? item.selectedIconPath : item.iconPath"></image>
					<view>{{item.name}}</view>
				</view>
			</view>
			<view class="tab-bar-button" v-show="isMaster">
				<image class="tab-bar-btn-bg" src="/static/images/tabbar/nvg_bar_bg-10.png" mode="scaleToFill"></image>
				<image class="tab-bar-btn-scan" src="/static/images/tabbar/scan-11.svg" 
				@click.stop="scanClickHandle"></image>
			</view>
		</view>
	</view>
</template>
<script>
	import home from '@/pages/home/home'
	import order from '@/pages/order/order'
	import my from '@/pages/my/my'

	export default {
		components: {
			home,
			order,
			my
		},
		data() {
			return {
				title: 'Hello',
				isMaster: false,
				currentTabBarIndex: 0, // 当前页面
				tabBar: {
					"list": [{
							name: "首页",
							nameCode: 'home',
							pagePath: "/pages/index/index",
							iconPath: "/static/images/icons/home.svg",
							selectedIconPath: "/static/images/icons/home_active.svg"
						},
						{
							name: "订单",
							nameCode: 'order',
							pagePath: "/pages/order/order",
							iconPath: "/static/images/icons/order.svg",
							selectedIconPath: "/static/images/icons/order_active.svg"
						},
						{
							name: "我的",
							nameCode: 'my',
							pagePath: "/pages/my/my",
							iconPath: "/static/images/icons/mine.svg",
							selectedIconPath: "/static/images/icons/mine_active.svg"
						}
					]
				},
			}
		},
		onReachBottom(event) {
			let that = this;
			switch (that.currentTabBarIndex) {
				case 0:
					this.$refs.childHome.onLoadShopListByPage()
					break
				default:
					break;
			}
		},
		onShow() {
			this.setMaster()
						this.$refs.my.updateUserInfo()
		},
		methods: {
			setMaster() {
				this.isMaster = this.$userInfo.isMasterOrShopOwner()
			},
			// isMasterRole() {
			// 	let userInfo = uni.getStorageSync('LOGIN_USER_INFO')
			// 	let roles = userInfo.roles;
			// 	if (roles) {
			// 		for (let i = 0; i < roles.length; i ++) {
			// 			let role = roles[i];
			// 			if (role.name == 'ROLE_MASTER' || role.name == 'ROLE_SHOPOWNER') {
			// 				return true;
			// 			}
			// 		}

			// 	}
			// 	return false;
			// },
			switchTab(event) {
				let data = event.currentTarget.dataset;
				this.currentTabBarIndex = Number(data.index)
				if(1==this.currentTabBarIndex){
					this.showOrderDot=false;
				}
				uni.setNavigationBarTitle({
					title: this.tabBar.list[this.currentTabBarIndex].name
				})
			},
			orderSocketHandle (res) {
						console.log("orderSocketHandle...",res)
						this.showOrderDot = true;
						/* this.$api.apiGet({
						url: `/api/notice/query`,
						data: {
						shopId:shopId ? shopId:0,
						userId:userId ? userId:0
						}
				}) */
			},
			scanClickHandle(e) {
				console.log('scanClickHandle...')
				let that = this;
				var isMaster = this.$userInfo.isMasterOrShopOwner();
				if (!isMaster) {
					return 0;
				}
				// 允许从相机和相册扫码
				uni.scanCode({
					success(res) {
						// console.log('条码类型：' + res.scanType);
						// console.log('条码内容：' + res.result);
						var code = res.result;
						that.$msg.showLoading("正在查询订单...")
						that.findOrderByCode(code);
					}
				});
			},
			findOrderByCode(code) {
				let that = this;
				that.$login.checkTokenValidity().then((res) => {
					that.$api.apiGet({
						url: `/api/order/code/${code}`,
					}).then((res) => {
						// that.$msg.showMessage("请求ok！", res)
						console.log('findOrderByCode请求ok！', res)
						that.$msg.hideLoading();
						that.toOrderPepair(res.data.data);
					}).catch((res) => {
						that.$msg.showMessage("请求失败！" + res.data.msg)
					})
				})
			},
			toOrderPepair(order) {
				order = JSON.stringify(order);
				uni.navigateTo({
					url: `../order/order-repair/order-repair?order=${order}`
				})
			}

		}
	}
</script>


<style>
	.content home,
		.content order,
		.content my {
			width: 100%;
			padding-bottom: 110rpx;
		}
	
		.tab-bar {
			display: flex;
			flex-direction: row;
			position: fixed;
			bottom: 0;
			height: 110rpx;
			width: 100%;
		}
	
		.tab-bar-content {
			display: flex;
			flex-direction: row;
			flex: 1;
			border-top: 1px solid #f2f2f2;
			background-color: #ffffff;
		}
	
		.tab-bar-item {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	
		.tab-bar-button {
			display: flex;
			flex-basis: 30%;
			width: 30%;
		}
	
		.icon-tab-bar {
			width: 40rpx;
			height: 40rpx;
		}
	
		.tab-bar-btn-bg {
			width: 100%;
			height: 100%;
		}
	
		.tab-bar-btn-scan {
			width: 120rpx;
			height: 120rpx;
			position: absolute;
			top: -80rpx;
			right: 7%;
			border-radius: 50%;
		}
	
		.tab-active {
			color: #009245;
		}
</style>
