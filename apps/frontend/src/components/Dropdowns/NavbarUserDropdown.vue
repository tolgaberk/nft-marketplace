<template>
	<div>
		<div class="dropdown__offset" @click="$emit('closeDropdown')" />
		<div class="dropdown profile-dropdown">
			<TradistIcon class="h-6 w-16" />
			<div class="profile-dropdown__user grid grid-cols-3 grid-rows-2">
				<img
					src="https:/via.placeholder.com/26"
					class="row-span-2 col-span-1"
					alt="user badge"
				/>
				<span class="row-span-1 col-span-2">
					{{ user.username }}
				</span>
				<span class="profile-dropdown__user--badge-name row-span-1 col-span-2">
					Gold Member
				</span>
			</div>
			<div class="profile-dropdown__menu">
				<template v-for="menu in menuItems" :key="`menu-${menu}`">
					<BaseDivider class="profile-dropdown__menu--divider" />
					<router-link :to="menu.link">
						{{ menu.title }}
					</router-link>
				</template>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUser } from '../../composables/useUser';
import TradistIcon from '../Icons/TradistIcon.vue';
import BaseDivider from '../Base/BaseDivider.vue';

export default defineComponent({
	components: { TradistIcon, BaseDivider },
	setup() {
		const { user } = useUser();

		const menuItems = [
			{ title: 'Member', link: '/' },
			{ title: 'Edit Bio', link: '/' },
			{ title: 'Sign Out', link: '/' },
		];

		return {
			user,
			menuItems,
		};
	},
	emits: ['closeDropdown'],
});
</script>

<style lang="scss" scoped>
.profile-dropdown {
	min-width: 186px;
	top: 74px;
	right: 0;
	border-top: 3px solid var(--clr-primary);
	box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 34%);
	padding: 17px 35px 50px 26px;
	color: #777e90;
	font-size: 12px;
	font-weight: 300;
	background: #121215;

	&__user {
		margin-top: 16px;
		margin-bottom: 24px;

		&--badge-name {
			color: var(--clr-primary);
			font-weight: 600;
		}
	}

	&__menu {
		&--divider {
			border-top: 2px solid #25262c;
			margin-bottom: 10px;
			margin-top: 10px;
		}
	}
}
</style>
