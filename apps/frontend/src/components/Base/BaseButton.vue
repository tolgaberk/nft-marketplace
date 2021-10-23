<template>
	<button :class="classList">
		<slot />
	</button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
	props: {
		size: {
			type: String,
			default: 'md',
			validator: (val: string) => {
				return ['xs', 'sm', 'md', 'lg', 'xl'].includes(val);
			},
		},
		shadow: {
			type: Boolean,
			default: false,
		},
		shadowColor: {
			type: String,
			default: 'transparent',
			validator: (val: string) => {
				return ['transparent', 'primary'].includes(val);
			},
		},
		textColor: {
			type: String,
			default: 'white',
		},
		fontSize: {
			type: String,
			default: 'md',
			validator: (val: string) => {
				return ['sm', 'md', 'lg'].includes(val);
			},
		},
		fontWeight: {
			type: Number,
			default: 400,
			validator: (val: number) => {
				return [100, 200, 300, 400, 500, 600, 700, 800, 900, 950].includes(val);
			},
		},
		bgColor: {
			type: String,
			default: 'black',
			validator: (val: string) => {
				return ['transparent', 'primary', 'black'].includes(val);
			},
		},
	},
	setup(props) {
		const classList = computed(() => {
			const buttonSize = `btn-${props.size} `;
			const shadow = props.shadow ? 'shadow ' : '';
			const shadowColor = props.shadow ? `shadow-${props.shadowColor} ` : '';
			const textColor = `text-${props.textColor} `;
			const fontSize = `font-${props.fontSize} `;
			const fontWeight = `font-${props.fontWeight} `;
			const bgColor = `bg-${props.bgColor}`;
			return `${buttonSize}${shadow}${shadowColor}${textColor}${fontSize}${fontWeight}${bgColor}`.trim();
		});

		return {
			classList,
		};
	},
});
</script>

<style lang="scss">
button {
	height: 42px;
	background: var(--clr-dark);
	color: white;
	border: 1px solid var(--clr-primary);
	transition: background-color 0.3s ease-out;
	font-weight: 500;
	&:hover {
		background-color: var(--clr-primary-dark);
	}
}

.btn {
	&-xs {
		width: 80px;
	}
	&-sm {
		width: 150px;
	}
	&-md {
		width: 157px;
	}
	&-lg {
		width: 179px;
	}
	&-xl {
		width: 198px;
	}
}

.font {
	&-sm {
		font-size: 12px;
	}
	&-md {
		font-size: 14px;
	}
	&-lg {
		font-size: 16px;
	}

	&-100 {
		font-weight: 100;
	}
	&-200 {
		font-weight: 200;
	}
	&-300 {
		font-weight: 300;
	}
	&-400 {
		font-weight: 400;
	}
	&-500 {
		font-weight: 500;
	}
	&-600 {
		font-weight: 600;
	}
	&-700 {
		font-weight: 700;
	}
	&-800 {
		font-weight: 800;
	}
	&-900 {
		font-weight: 900;
	}
	&-950 {
		font-weight: 950;
	}
}

.shadow {
	position: relative;
	transform-style: preserve-3d;
	transform: translate(0, 3px);
	&::after {
		content: '';
		box-sizing: content-box;
		position: absolute;
		transform: translateZ(-1px);
		top: -7px;
		left: -8px;
		width: 100%;
		height: 100%;
		z-index: -1;
		border: 1px solid var(--clr-primary);
	}

	&-transparent {
		&::after {
			background-color: transparent;
		}
	}

	&-primary {
		&::after {
			background-color: var(--clr-primary);
		}
	}
}

.text {
	&-white {
		color: var(--clr-white);
	}

	&-black {
		color: var(--clr-dark);
	}

	&-primary {
		color: var(--clr-primary);
	}
}

.bg {
	&-transparent {
		background-color: transparent;
	}

	&-primary {
		background-color: var(--clr-primary);
	}

	&-black {
		background-color: var(--clr-dark);
	}
}
</style>
