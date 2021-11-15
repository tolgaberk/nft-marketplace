<template>
	<h2 class="line-through-first-header">
		<span class="line-through-first-header__text">
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
.line-through-first-header {
	display: block;
	text-align: center;
	position: relative;
	font-weight: 700;
	font-size: 12px;
	color: var(--clr-dark);
	text-transform: uppercase;

	&__text {
		display: inline-block;
		padding: 0 4px;
		background: #f2f5fa;
	}

	&::before {
		content: '';
		position: absolute;
		width: 340px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-top: 1px solid var(--clr-primary);
		z-index: -1;
	}
}

.dark {
	& .line-through-first-header {
		color: #777e90;

		&__text {
			background: transparent;
		}

		&::before {
			border-top: 1px solid #25262c;
		}
	}
}
</style>
