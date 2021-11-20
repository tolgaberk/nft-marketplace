<template>
	<nav class="navbar" :class="routeClasses">
		<div class="tradist-container">
			<div class="navbar__logo">
				<TradistIcon class="w-36 h-11" />
				<NavbarSearchButton
					v-if="isRouteHome && isUserLoggedIn"
					class="ml-20"
				/>
			</div>

			<div class="navbar__interactive">
				<NavbarSearchButton
					v-if="isRouteHome && !isUserLoggedIn"
					class="mr-7"
				/>

				<template v-if="isUserLoggedIn">
					<router-link class="navbar__interactive--link mr-9" to="/"
						>My Items</router-link
					>
					<router-link class="navbar__interactive--link mr-12" to="/"
						>Create</router-link
					>
					<span class="navbar__interactive--amount mr-9"
						>{{ user.amount }} {{ user.currency }}</span
					>
					<div class="navbar__interactive--avatar mr-6">
						<img
							:src="user.avatar"
							:alt="user.username"
							@click="openUserDropdown"
						/>
						<NavbarUserDropdown
							v-show="isUserDropdownOpen"
							@closeDropdown="closeUserDropdown"
						/>
					</div>
				</template>
				<template v-else>
					<BaseButton class="mr-8" bgColor="black" textColor="white">
						Login
					</BaseButton>
				</template>

				<ThemeSwitcher class="mr-6" darkThemeClass="c1-primary" />
				<div class="relative">
					<HamburgerMenuIcon @click="openHamburgerDropdown" />
					<HamburgerMenuDropdown
						v-show="isHamburgerDropdownOpen"
						@closeDropdown="closeHamburgerDropdown"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TradistIcon from '../Icons/TradistIcon.vue';
import HamburgerMenuIcon from '../Icons/HamburgerMenuIcon.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import BaseButton from '../Base/BaseButton.vue';
import { useRoute } from 'vue-router';
import { useUser } from '../../composables/useUser';
import NavbarSearchButton from '../Buttons/NavbarSearchButton.vue';
import NavbarUserDropdown from '../Dropdowns/NavbarUserDropdown.vue';
import { useDropdown } from '../../composables/useDropdown';
import HamburgerMenuDropdown from '../Dropdowns/HamburgerMenuDropdown.vue';

export default defineComponent({
	components: {
		TradistIcon,
		HamburgerMenuIcon,
		ThemeSwitcher,
		BaseButton,
		NavbarSearchButton,
		NavbarUserDropdown,
		HamburgerMenuDropdown,
	},
	setup() {
		const route = useRoute();

		const isRouteHome = () => {
			return route.path === '/';
		};

		const routeClasses = computed(() => {
			const bgColor = isRouteHome() ? 'transparent' : 'solid';
			return `bg-${bgColor}`;
		});

		const routeReturns = {
			isRouteHome,
			routeClasses,
		};

		const { user, isUserLoggedIn } = useUser();

		const { isUserDropdownOpen, openUserDropdown, closeUserDropdown } =
			useDropdown('User');

		const {
			isHamburgerDropdownOpen,
			openHamburgerDropdown,
			closeHamburgerDropdown,
		} = useDropdown('Hamburger');

		return {
			...routeReturns,
			user,
			isUserLoggedIn,
			isUserDropdownOpen,
			openUserDropdown,
			closeUserDropdown,
			isHamburgerDropdownOpen,
			openHamburgerDropdown,
			closeHamburgerDropdown,
		};
	},
});
</script>

<style lang="scss" scoped>
.navbar {
	height: 108px;

	& .tradist-container {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__logo {
		display: flex;
		align-items: center;
	}

	&__interactive {
		display: flex;
		align-items: center;

		&--link {
			color: white;
			font-size: 14px;
			font-weight: 500;
		}

		&--amount {
			display: block;
			color: var(--clr-primary);
			font-size: 20px;
			font-weight: 600;
			letter-spacing: -0.2px;
			margin-top: 2px;
		}

		&--avatar {
			position: relative;
			& > img {
				border: 1px solid var(--clr-primary);
				width: 40px;
				height: 40px;
				border-radius: 50px;
			}
		}
	}
	&.bg {
		&-solid {
			background-color: #1c1d21;
		}

		&-transparent {
			background-color: rgba(27, 27, 31, 11%);
			border-bottom: 1px solid #25262c;
		}
	}
}
</style>
