<template>
	<BaseButton isText size="none" bgColor="transparent" textColor="white">
		<SearchIcon class="inline mr-6" />
		Anywhere on the keyboard
	</BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '../Base/BaseButton.vue';
import SearchIcon from '../Icons/SearchIcon.vue';

export default defineComponent({
	components: { SearchIcon, BaseButton },
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
