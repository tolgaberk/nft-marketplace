import { ref, Ref } from 'vue';

const isDarkTheme = ref(true);

function toggleTheme() {
	isDarkTheme.value = !isDarkTheme.value;
	if (isDarkTheme.value) {
		document.body.classList.add('dark');
		return;
	}
	document.body.classList.remove('dark');
}

interface IuseThemeReturn {
	isDarkTheme: Ref<boolean>;
	toggleTheme: () => void;
}

export function useTheme(): IuseThemeReturn {
	return {
		isDarkTheme,
		toggleTheme,
	};
}
