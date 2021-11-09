<template>
	<BaseButton
		size="xs"
		fontSize="sm"
		textColor="primary"
		bgColor="black"
		:fontWeight="500"
	>
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
