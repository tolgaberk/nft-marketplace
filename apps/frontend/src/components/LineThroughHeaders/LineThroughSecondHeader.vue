<template>
	<h2 class="line-through-second-header">
		<span class="line-through-second-header__text">
			{{ text }}
		</span>
	</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.line-through-second-header {
	display: block;
	text-align: center;
	position: relative;
	font-weight: 400;
	font-size: 16px;
	color: var(--clr-dark);
	background: transparent;

	&::before {
		content: '';
		position: absolute;
		width: 189px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-top: 1px solid var(--clr-primary);
		z-index: -1;
	}
}

.dark {
	& .line-through-second-header {
		color: #fcfcfd;

		&::before {
			border-top: 1px solid #25262c;
		}
	}
}
</style>
