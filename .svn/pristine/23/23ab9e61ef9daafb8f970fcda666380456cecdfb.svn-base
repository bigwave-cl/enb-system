<template>
	<div class="mi-tab-pane">
		<ask-tinymce v-model="yys" :params="params" :url="url"></ask-tinymce>
	</div>
</template>
<script>
import { MatchApi } from '@/services';
const matchServer = new MatchApi();
let uploadData = matchServer.getUploadData();
export default {
	name: "InformationOther",
	//数据
	data() {
		return {
			yys:'<p>dwadawdwdw</p>',
			url:uploadData.url,
			params: {
				mode: 2,
				...uploadData.default
			}
		}
	},
	watch:{
		'yys'(n,o){
			console.log(n)
		}
	}
}
</script>
