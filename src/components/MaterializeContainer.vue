<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		full: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		classes() {
			return {
				"container": !this.full,
				"container-full": this.full
			};
		}
	}
};
</script>
