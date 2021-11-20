<template>
	<div class="space-x-2">
		<slot name="before" />
		<LeftArrowIcon class="inline-block" />
		<slot />
		<RightArrowIcon class="inline-block" />
		<slot name="after" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftArrowIcon from '../Icons/LeftArrowIcon.vue';
import RightArrowIcon from '../Icons/RightArrowIcon.vue';

export default defineComponent({
	setup() {
		return {};
	},
	components: { LeftArrowIcon, RightArrowIcon },
});
</script>

<style lang="scss" scoped></style>
