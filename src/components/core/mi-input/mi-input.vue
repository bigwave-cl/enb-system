<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';

</style>
<template>
	<div class="value">
		<input 
			class="mi-input" 
			v-model="model[modelName]" 
			:name="name"
			:type="type" 
			:placeholder="placeholder"
			:class="[errors.has(name) ? 'error' : '', className]">
		<span class="tip">{{maxLen}}</span>
	</div>
</template>
<script>
export default {
	name: "miInput",
	props: {
		'model': {
			type: Object
		},
		'modelName': {
			type: String,
			default: ''
		},
		'className': {
			type: String,
			default: ''
		},
		'name': {
			type: String,
			default: ''
		},
		'type': {
			type: String,
			default: 'text'
		},
		'name': {
			type: String,
			default: ''
		},
		'placeholder': {
			type: String,
			default: ''
		},
		'maxLen': {
			type: Number,
			default: 20
		}
	},
	data(){
		return {}
	}
}

</script>
