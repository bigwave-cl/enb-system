<style lang="scss">
	@import '~@/styles/mixins', '~@/styles/variables';
</style>
<template>
	<div class="mi-tab-pane">
		<div class="mi-group__title">本届基本信息</div>
		<div class="mi-group">
			<div class="label"><i>*</i>全称</div>
			<div class="value">
				<input 
					class="mi-input " 
					v-model="model.full_name" 
					name="full_name"
					v-validate="'required'"
					type="text" 
					placeholder="输入赛事全称"
					:class="{'error': errors.has('full_name')}">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>主办单位</div>
			<mi-input 
				:model="model"
				modelName="host_unit"
				name="hostUnit"
				:maxLen="20"
				placeholder="输入主办单位"
				className="large"></mi-input>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>承办单位</div>
			<mi-input 
				:model="model"
				modelName="undertaker"
				:maxLen="50"
				name="undertaker"
				placeholder="输入承办单位"
				className="large"></mi-input>
		</div>
		<div class="mi-group">
			<div class="label"><i>*</i>时间</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.time_str" 
					name="time"
					v-validate="'required'"
					:class="{'error': errors.has('time')}"
					type="text" 
					placeholder="输入起止时间">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>地点</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.site" 
					name="site"
					:class="{'error': errors.has('site')}"
					type="text" 
					placeholder="输入赛事举办地">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>赛段</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.stage_name" 
					name="stageName"
					:class="{'error': errors.has('stageName')}"
					type="text" 
					placeholder="输入赛段">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>全程里程</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.full_mileage" 
					name="fullMileage"
					:class="{'error': errors.has('fullMileage')}"
					type="text" 
					placeholder="输入赛事总里程">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>赛段里程</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.stage_mileage" 
					name="stageMileage"
					:class="{'error': errors.has('stageMileage')}"
					type="text" 
					placeholder="输入赛段里程">
			</div>
		</div>
		<div class="mi-group__title">报名</div>
		<div class="mi-group">
			<div class="label"><i></i>开始报名时间</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.join_start" 
					name="joinStart"
					:class="{'error': errors.has('joinStart')}"
					type="text" 
					placeholder="输入开始报名时间">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>截止报名时间</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.join_end" 
					name="joinEnd"
					:class="{'error': errors.has('joinEnd')}"
					type="text" 
					placeholder="输入截止报名时间">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>报名地点</div>
			<mi-input 
				:model="model"
				modelName="join_site"
				:maxLen="40"
				name="joinSite"
				placeholder="输入报名地点"
				className="large"></mi-input>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>报名方式</div>
			<mi-input 
				:model="model"
				modelName="join_way"
				name="joinWay"
				:maxLen="2000"
				placeholder="输入报名方式"
				className="large"></mi-input>
		</div>
		<div class="mi-group__title">联系方式</div>
		<div class="mi-group">
			<div class="label"><i></i>QQ</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.qq" 
					name="qq"
					:class="{'error': errors.has('qq')}"
					type="text" 
					placeholder="输入QQ">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>微信</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.wx" 
					name="wx"
					:class="{'error': errors.has('wx')}"
					type="text" 
					placeholder="输入微信">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>传真</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.fax" 
					name="fax"
					:class="{'error': errors.has('fax')}"
					type="text" 
					placeholder="输入传真">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>电子邮箱</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.email" 
					name="email"
					:class="{'error': errors.has('email')}"
					type="text" 
					placeholder="输入电子邮箱">
			</div>
		</div>
		<div class="mi-group">
			<div class="label"><i></i>电话</div>
			<div class="value">
				<input 
					class="mi-input" 
					v-model="model.telephone" 
					name="telephone"
					:class="{'error': errors.has('telephone')}"
					type="text" 
					placeholder="输入电话">
			</div>
		</div>

	</div>
</template>
<script>
import { askDialogToast } from '@/utils';
import moment from 'moment/moment.js';
import MiInput from '../mi-input/mi-input.vue';
import { simplePicker } from '@core/simple-picker/simple-picker.js';
import { MatchApi } from '@/services';
const matchServer = new MatchApi();
let uploadData = matchServer.getUploadData();
	export default{
		name: 'InfoDetail',
		props:['model'],
		components:{
			MiInput
		},
		data(){
			return {
				coverShow: false,
				matchState:[
					{ name: '正在报名',value: '1'},
					{ name: '正在堪路',value: '2'},
					{ name: '正在进行',value: '3'},
					{ name: '赛事颁奖',value: '4'}
				],
				cover:{
					uploadUrl: uploadData.url,
					src: '',
					width: 300,
					height: 300,
					params: {
						mode: 1,
						id: 24,
						...uploadData.default
					}
				},
				imgOrdinaryShow: false,
				imgOrdinary:{
					uploadUrl: uploadData.url,
					src: '',
					width: 1600,
					height: 1200,
					params: {
						mode: 2,
						...uploadData.default
					}
				}
			}
		},
		computed:{
			timeValue(){
				return `${this.formatTime(this.model.competition_start)}至${this.formatTime(this.model.competition_end)}`;
				// return this.model.time_str
			}
		},
		methods:{
			formatTime(time){
				return moment.unix(time).format('YYYY-MM-DD');
			},
			uploadCover(){
				let { coverShow } = this;
				this.coverShow = !coverShow;
			},
			uploadImgOrdinary(){
				let { imgOrdinaryShow } = this;
				this.imgOrdinaryShow = !imgOrdinaryShow;
			},
			coverUploadSuccess(resData, field, ki){
				if(resData.code != 200) return;
				this.model.log_url = resData.data.url;
			},
			imgOrdinaryUploadSuccess(resData, field, ki){
				if(resData.code != 200) return;
				this.model.img_url = resData.data.url;
			},
			onSubmit(){
				this.$validator.validateAll().then((result) => {
			        if (result) {
						this.$store.dispatch('ajaxRequestStart');
			        	matchServer.update(this.model).then(r=>{
			        		if(r.data.code != 200) return;
							this.$store.dispatch('ajaxRequestEnd');
			        		askDialogToast({msg:'赛事基础信息修改成功！',time:2000,class:'success'});
			        	},err=>{
							this.$store.dispatch('ajaxRequestEnd');
			        	})
			            return;
			        }
			        askDialogToast({msg:'请确保表单数据有效！',time:2000,class:'danger'});
			    });
			},
			openPicker(){
				let opt = {
					sure:(vm,data)=>{
						this.model.competition_start = data.start.timestamp;
						this.model.competition_end = data.end.timestamp;
					}
				}
				opt = {
					start: this.model.competition_start && this.formatTime(this.model.competition_start)||'',
					end: this.model.competition_end && this.formatTime(this.model.competition_end) || '',
					...opt
				};
				simplePicker(opt);
			}
		}
	}
</script>