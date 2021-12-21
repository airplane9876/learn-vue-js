<template>
	<header>
		<h1>{{ propsdata }}</h1>
		<button @click="sendEvent">send</button>
	</header>
</template>

<script>
export default {
	props: {
		propsdata: String,
	},
	methods: {
		sendEvent() {
			this.$emit('renew');
		},
	},
};
</script>

<style></style>
