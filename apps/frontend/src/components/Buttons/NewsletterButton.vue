<template>
	<BaseButton size="xs" fontSize="sm" textColor="primary" :fontWeight="500">
		<LeftArrowIcon />
	</BaseButton>
</template>

<script lang="ts">
import BaseButton from '../Base/BaseButton.vue';
import LeftArrowIcon from '../Icons/LeftArrowIcon.vue';

export default {
	components: {
		BaseButton,
		LeftArrowIcon,
	},
};
</script>
