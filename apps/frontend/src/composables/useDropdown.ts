import { ref, Ref } from 'vue';

type Keys<T extends string> =
	| `is${T}DropdownOpen`
	| `open${T}Dropdown`
	| `close${T}Dropdown`;

type DetermineType<T extends string> = T extends `is${string}DropdownOpen`
	? Ref<boolean>
	: () => void;

type UseDropdownReturn<T extends string> = {
	[A in Keys<T>]: DetermineType<A>;
};

export function useDropdown<K extends string>(prefix: K): UseDropdownReturn<K> {
	const isDropdownOpen = ref(false);

	const openDropdown = () => {
		isDropdownOpen.value = true;
	};

	const closeDropdown = () => {
		isDropdownOpen.value = false;
	};

	return {
		[`is${prefix}DropdownOpen`]: isDropdownOpen,
		[`open${prefix}Dropdown`]: openDropdown,
		[`close${prefix}Dropdown`]: closeDropdown,
	} as UseDropdownReturn<K>;
}
