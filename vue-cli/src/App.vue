<template>
	<div>
		<app-header @renew="renewStr" :propsdata="str"></app-header>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
	data() {
		return {
			str: 'Header!!',
		};
	},
	components: {
		'app-header': AppHeader,
	},
	methods: {
		renewStr() {
			this.str = 'hi';
		},
	},
};
</script>

<style></style>
