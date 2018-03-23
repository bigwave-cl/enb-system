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
							info
						</template>
						<template v-else>
							<ask-tinymce></ask-tinymce>
						</template>
					</el-tab-pane>
				</template>
			</el-tabs>
		</div>
	</div>
</template>
<script>
	import InformationBasic from '@core/match/information-basic.vue';
	import { MatchApi } from '@/services';
	import { mapGetters } from 'vuex';
	export default{
		name:"MatchInformation",
		components:{
			InformationBasic
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
				infoModel:{}
			}
		},
		mounted(){
			this.queryDataList();

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
			saveCurrentInfo(){
				this.$refs.infobasic[0].onSubmit();
			}
		}
	}
</script>