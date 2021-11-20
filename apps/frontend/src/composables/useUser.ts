import { ref, Ref, computed, ComputedRef } from 'vue';

interface IUser {
	id: number;
	username: string;
	amount: number;
	currency: string;
	avatar: string;
}

const user = ref<IUser>({
	id: 0,
	username: 'Talha',
	amount: 12345,
	currency: 'ETH',
	avatar:
		'https://images.unsplash.com/photo-1632324343640-86af9827dbeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
});

const isUserLoggedIn = computed(() => {
	return user.value.id >= 0;
});

interface IUseUserReturn {
	user: Ref<IUser>;
	isUserLoggedIn: ComputedRef<boolean>;
}

export function useUser(): IUseUserReturn {
	return {
		user,
		isUserLoggedIn,
	};
}
