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
		<BaseButton class="font-semibold">Login</BaseButton>
		<BaseButton size="sm" fontSize="sm" :shadow="true" :fontWeight="500"
			>More</BaseButton
		>
		<NewsletterButton />
	</div>

	<div class="mt-16 p-4">
		<BaseBanner primaryText="75,088" secondaryText="NFTS CREATED">
			<template #icon>
				<BrushIcon />
			</template>
		</BaseBanner>
		<BaseBanner primaryText="6,736" secondaryText="TRANSACTIONS">
			<template #icon>
				<TransactionIcon />
			</template>
		</BaseBanner>
		<BaseBanner primaryText="$78,428.76" secondaryText="TOTAL SALES">
			<template #icon>
				<PriceUpIcon />
			</template>
		</BaseBanner>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseBanner from '../components/Base/BaseBanner.vue';
import BrushIcon from '../components/Icons/BrushIcon.vue'

import BaseButton from '../components/Base/BaseButton.vue';
import NewsletterButton from '../components/Buttons/NewsletterButton.vue';
import TransactionIcon from '../components/Icons/TransactionIcon.vue';
import PriceUpIcon from '../components/Icons/PriceUpIcon.vue';

export default defineComponent({
	components: {
		BaseButton,
		BrushIcon,
		NewsletterButton,
		BaseBanner,
		TransactionIcon,
		PriceUpIcon,
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