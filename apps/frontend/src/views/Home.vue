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
		<section class="mt-14">
			<LineThroughFirstHeader
				text="Create, explore, & collect digital art NFTs."
			/>
			<LineThroughCenterHeader text="The new NFT marketplace" />
			<LineThroughSecondHeader text="Start your art" />
		</section>
		<section class="mt-16">
			<div class="flex justify-between items-center mb-11">
				<LineThroughSideHeader firstTitle="Popular" secondTitle="Seller" />
				<BaseSelect>
					<BaseSelectItem text="Today" />
				</BaseSelect>
			</div>
			<div class="space-x">
				<BaseCard
					class="inline-block"
					v-for="i in 3"
					:key="`popular-${i}`"
					fixedHeight
					priceShadowed
				/>
			</div>
			<BasePaginator class="flex justify-end items-center mt-8">
				<template #before>
					<span
						class="popular-sellers__paginator-text italic font-medium text-xs"
					>
						More Popular Sellers
					</span>
				</template>
			</BasePaginator>
		</section>
		<section class="mt-7">
			<div>
				<LineThroughSideHeader
					firstTitle="Popular"
					secondTitle="Hot bid collections"
				/>
			</div>
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
import LineThroughSideHeader from '../components/LineThroughHeaders/LineThroughSideHeader.vue';
import BaseSelect from '../components/Base/BaseSelect.vue';
import BaseSelectItem from '../components/Base/BaseSelectItem.vue';
import LineThroughCenterHeader from '../components/LineThroughHeaders/LineThroughCenterHeader.vue';
import LineThroughFirstHeader from '../components/LineThroughHeaders/LineThroughFirstHeader.vue';
import LineThroughSecondHeader from '../components/LineThroughHeaders/LineThroughSecondHeader.vue';
import BasePaginator from '../components/Base/BasePaginator.vue';

export default defineComponent({
	name: 'Home',
	components: {
		BaseCard,
		BaseBanner,
		LineThroughSideHeader,
		BaseSelect,
		BaseSelectItem,
		LineThroughCenterHeader,
		LineThroughFirstHeader,
		LineThroughSecondHeader,
		BasePaginator,
	},
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
	@apply space-x-16;
}

.popular-sellers__paginator-text {
	color: #353945;
}
</style>
