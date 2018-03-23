<style lang="scss">
	@import '~@/styles/mixins', '~@/styles/variables';
	.match-information{
		width: 100%;
		.mi-box{
			width: 100%;
			border-radius: .04rem;
			background: map-get($color,100);
			margin: .28rem 0 0 ;
			position: relative;
			.mi-tab-btns{
				position: absolute;
				top: 0;
				right: 0;
				width: 2.8rem;
				height: .6rem;
				z-index: 2;
				@include flexLayout(flex,normal,center);
				.ask-button{
					min-width: auto;
					width: .9rem;
					height: .34rem;
					padding: 0;
					font-size: .18rem;
					color: map-get($color,100);
					background: map-get($color,400);
					border-radius: .04rem;
					@include flexLayout(inline-flex,center,center);
					&+.ask-button{
						margin-left: .16rem;
					}
					&.add{
						color: map-get($color,400);
						background: map-get($color,100);
						border: 1px solid map-get($color,400);
						.iconfont{
							font: inherit;
							color: inherit;
							font-size: .24rem;
							margin-right: .08rem;
						}
					}
				}
			}
			.mi-tabs.el-tabs{
				.el-tabs__header{
					margin: 0;
					padding: 0 2.8rem 0 .2rem;
					&::after{
						content: "";
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
						height: .01rem;
						background-color: map-get($color,100D2);
						z-index: 1;
					}
					.el-tabs__nav-wrap::after{
						display: none;
					}
					.el-tabs__nav-next, .el-tabs__nav-prev{
						line-height: .64rem;
					}
					.el-tabs__item{
						font-size: .18rem;
						line-height: 1;
						color: map-get($color,300S3);
						padding-top: .22rem;
						padding-bottom: .22rem;
						height: .6rem;
						&.is-active{
							color: map-get($color,300);
						}
						&:focus.is-active.is-focus:not(:active){
							box-shadow: none;
						}
					}
					.el-tabs__active-bar{
						background-color: map-get($color,400);
					}
				}
				.mi-tab-label{
					padding: 0 .1rem;
				}
			}
		}
	}

	.mi-group__title {
		padding: .18rem .82rem .18rem .28rem;
		font-size: .18rem;
		color: map-get($color,300);
		font-weight: bold;
		border-bottom: 1px solid map-get($color,200);
	}
	.mi-group{
		width: 100%;
		@include flexLayout(flex,normal,center);
		border-bottom: 1px solid map-get($color,200);
		padding: .18rem .82rem .18rem .28rem;
		&.is-top{
			align-items: flex-start;
		}
		.label{
			width: 1.45rem;
			flex: 0 0 1.45rem;
			font-size: .16rem;
			word-break: break-all;
			line-height: 1.4;
			color: map-get($color,300S3);
			padding-right: .1rem;
			@include flexLayout(inline-flex, normal, center);
			i {
				font: inherit;
				display: inline-block;
				width: .2rem;
				line-height: 1;
				height: .08rem;
				text-align: center;
				color: map-get($color, 600);
			}
		}
		.value{
			width: calc(100% - 1.45rem);
			flex: 0 0 calc(100% - 1.45rem);
			font-size: .16rem;
			position: relative;
			@include flexLayout(flex,normal,center);
			.tip {
				position: absolute;
				color: map-get($color, 300S2);
				right: .12rem;
			}
			.img-box{
				width: 3.32rem;
				padding: .95rem 0;
				position: relative;
				&>img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: .04rem;
					overflow: hidden;
				}
				&.cover{
					width: 1.32rem;
					padding: .66rem 0;
					&>img{
						border-radius: 50%;
					}
				}
			}
			.ask-button{
				min-width: auto;
				&.upload{
					width: 1.12rem;
					height: .42rem;
					padding: 0;
					font-size: .18rem;
					color: map-get($color,100);
					background: map-get($color,400);
					border-radius: .04rem;
					@include flexLayout(inline-flex,center,center);
					position: absolute;
					bottom: .16rem;
					right: 0;
					z-index: 2;
					.iconfont{
						font: inherit;
						color: inherit;
						font-size: .24rem;
						margin-right: .16rem;
					}
				}
			}
			.mi-input{
				width: 6.2rem;
				display: block;
				border-radius: .04rem;
				border: 1px solid map-get($color,100D2);
				margin: 0;
				background: map-get($color,100S3);
				padding: .12rem .24rem;
				font-size: .16rem;
				color: map-get($color,300);
				outline: none;
				@include inputPlaceholder(map-get($color,300S2));
				transition: background .3s linear;
				&:focus{
					background: map-get($color,100);
					transition: background .3s linear;
				}
				&.large{
					width: 100%;
				}
				&.medium{
					width: 2.88rem;
				}
				&.small{
					width: 1.8rem;
				}
				&+.mi-input{
					margin-left: .28rem;
				}
				&.error{
					border: 1px solid map-get($color,600);
				}
			}
			.text{
				padding: 0 .12rem;
				font-size: .16rem;
				color: map-get($color,300);
			}
			.el-input__inner{
				font-size: .16rem;
				padding-top: .12rem;
				padding-bottom: .12rem;
				width: 2.88rem;
				height: .44rem;
			}
			.el-select .el-input.is-focus .el-input__inner,
			.el-select .el-input__inner:focus{
				border-color: map-get($color,100D2);
			}
		}
	}
</style>
<template>
	<div class="match-information">
		<enb-tab>赛事资料</enb-tab>
		<div class="mi-box">
			<div class="mi-tab-btns">
				<ask-button class="add">
					<i class="iconfont icon-add"></i>
					添加
				</ask-button>
				<ask-button @click.native="saveCurrentInfo">保存</ask-button>
			</div>
			<el-tabs tab-position="top" class="mi-tabs">
				<template v-for="(menu,$i) in menuList">
					<el-tab-pane :key="$i">
						<div slot="label" class="mi-tab-label">
							{{menu.name}}
						</div>
						<template v-if="menu.type == 'basic'">
							<information-basic ref="infobasic" :model="basicModel"></information-basic>
						</template>
						<template v-else-if="menu.type == 'info'">
							<information-detail ref="infodetail" :model="detailModel"></information-detail>
						</template>
						<template v-else>
							other
						</template>
					</el-tab-pane>
				</template>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import InformationBasic from '@core/match/information-basic.vue';
	import InformationDetail from '@core/match/information-detail.vue';
	import { MatchApi } from '@/services';
	import { mapGetters } from 'vuex';
	export default{
		name:"MatchInformation",
		components:{
			InformationBasic,
			InformationDetail
		},
		computed:{
			...mapGetters(['matchId'])
		},
		data(){
			return {
				matchServer: new MatchApi(),
				menuList:[
					{ name: '基础信息', type: 'basic'},
					{ name: '详情信息', type: 'info'},
					{ name: '自定义', type: 'other'}
				],
				basicModel:{
					"name":"",
					"competition_start":"",
					"competition_end":"",
					"log_url":"",
					"img_url":"",
					"site":"",
					"full_stage":"",
					"status": "",
					"phone_one":"",
					"phone_two":"",
					"start_site":"",
					"start_longitude":"",
					"start_latitude":"",
					"end_site":"",
					"end_longitude":"",
					"end_latitude":""
				},
				detailModel:{
					"id" : "", 
	        "competition_id" : "", 
	        "full_name" : "", 
	        "host_unit" : "", 
	        "undertaker" : "", 
	        "time_str" : "", 
	        "site" : "", 
	        "stage_name" : "", 
	        "full_mileage" : "", 
	        "stage_mileage" : "", 
	        "join_start" : "", 
	        "join_end" : "", 
	        "join_site" : "", 
	        "join_way" : "", 
	        "qq" : "", 
	        "wx" : "", 
	        "fax" : "", 
	        "email" : "", 
	        "telephone" : ""
				},
				infoModel:{}
			}
		},
		mounted(){
			this.queryDataList();
			this.queryDataDetail();

		},
		methods:{
			queryDataList(){
				this.$store.dispatch('ajaxRequestStart');
				this.matchServer.queryId(this.matchId).then(r=>{
					this.$store.dispatch('ajaxRequestEnd');
					if(r.data.code != 200) return;
					if(r.data.data.base){
						Object.keys(r.data.data.base).forEach((key) => {
						    this.basicModel[key] = r.data.data.base[key];
						})
					}
				},err=>{
					this.$store.dispatch('ajaxRequestEnd');
				})
			},
			queryDataDetail(){
				this.$store.dispatch('ajaxRequestStart');
				this.matchServer.queryDetailById(this.matchId).then(r=>{
					this.$store.dispatch('ajaxRequestEnd');
					if(r.data.code != 200) return;
					if(r.data.data){
						Object.keys(r.data.data).forEach((key) => {
						    this.detailModel[key] = r.data.data[key];
						})
						console.log(this.detailModel)
					}
				},err=>{
					this.$store.dispatch('ajaxRequestEnd');
				})
			},
			saveCurrentInfo(){
				this.$refs.infobasic[0].onSubmit();
			}
		}
	}
</script>