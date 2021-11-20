<template>
	<BaseButton
		size="xs"
		fontSize="sm"
		textColor="primary"
		bgColor="black"
		:fontWeight="500"
	>
		<NewsletterArrowIcon />
	</BaseButton>
</template>

<script lang="ts">
import BaseButton from '../Base/BaseButton.vue';
import NewsletterArrowIcon from '../Icons/NewsletterArrowIcon.vue';

export default {
	components: {
		BaseButton,
		NewsletterArrowIcon,
	},
};
</script>
