<template>
	<h1>This is a component testing page</h1>
	<div class="about spacer deneme-container">
		<BaseButton
			size="lg"
			:shadow="true"
			textColor="primary"
			shadowColor="primary"
			fontSize="lg"
			:fontWeight="500"
		>
			View Item
		</BaseButton>
		<BaseButton size="xl" fontSize="lg" :shadow="true" :fontWeight="500"
			>Place a Bid</BaseButton
		>
		<BaseButton :fontWeight="600">Login</BaseButton>
		<BaseButton size="sm" fontSize="sm" :shadow="true" :fontWeight="500"
			>More</BaseButton
		>
		<BaseButton size="xs" fontSize="sm" textColor="primary" :fontWeight="500">
			&#x2192;
		</BaseButton>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BaseButton from '../components/Base/BaseButton.vue';

export default defineComponent({
	components: {
		BaseButton,
	},
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.spacer > * {
	margin: 2rem;
}

.deneme-container {
	display: flex;
	width: 100%;
	justify-content: center;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		top: 50%;
		border: 1px solid#25262c;
		z-index: -1;
	}
}
</style>
