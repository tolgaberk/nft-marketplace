<template>
	<select class="base-select">
		<slot name="defaultValue" />
		<slot />
	</select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		data: {
			type: Array,
			default() {
				return [];
			},
		},
		value: {
			type: [String, Number],
			default: 0,
		},
	},
	setup() {
		return {};
	},
	emits: ['update:value'],
});
</script>

<style lang="scss" scoped>
.base-select {
	width: 256px;
	height: 46px;
	font-family: Poppins;
	font-weight: 500;
	background-color: transparent;
	background-image: url(../../assets/svg/chevron-down.svg);
	background-repeat: no-repeat;
	background-position: 225px;
	outline: none;
	border: 2px solid #26272d;
	font-size: 14px;
	color: var(--clr-dark);
	padding: 12px;
	appearance: none;
}

.dark {
	& .base-select {
		color: #fcfcfd;
	}
}
</style>
