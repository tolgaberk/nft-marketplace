<template>
	<div class="tradist-container">
		<section class="flex space-x justify-center mt-9">
			<BaseBanner
				v-for="(banner, index) in bannerData"
				:key="`banner-${index}`"
				:primaryText="banner.primaryText"
				:secondaryText="banner.secondaryText"
			>
				<template #icon>
					<component :is="banner.icon" />
				</template>
			</BaseBanner>
		</section>
		<section class="flex space-x justify-center mt-16">
			Popular Sellers
			<BaseCard
				v-for="i in 4"
				:key="`popular-${i}`"
				fixedHeight
				priceShadowed
			/>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseBanner from '../components/Base/BaseBanner.vue';
import BaseCard from '../components/Base/BaseCard.vue';
import BrushIcon from '../components/Icons/BrushIcon.vue';
import PriceUpIcon from '../components/Icons/PriceUpIcon.vue';
import TransactionIcon from '../components/Icons/TransactionIcon.vue';

export default defineComponent({
	name: 'Home',
	components: { BaseCard, BaseBanner },
	setup() {
		const bannerData = [
			{ primaryText: '75,088', secondaryText: 'NFTS CREATED', icon: BrushIcon },
			{
				primaryText: '6,736',
				secondaryText: 'TRANSACTIONS',
				icon: TransactionIcon,
			},
			{
				primaryText: '$78,428.76',
				secondaryText: 'TOTAL SALES',
				icon: PriceUpIcon,
			},
		];

		return {
			bannerData,
		};
	},
});
</script>

<style lang="scss" scoped>
.space-x {
	@apply space-x-20;
}
</style>
