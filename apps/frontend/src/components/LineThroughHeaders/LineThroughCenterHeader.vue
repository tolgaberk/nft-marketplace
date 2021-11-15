<template>
	<h2 class="line-through-center-header">
		{{ text }}
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
.line-through-center-header {
	display: block;
	text-align: center;
	position: relative;
	font-weight: 600;
	font-size: 40px;
	color: #43454e;
	background: transparent;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		border-top: 1px solid var(--clr-primary);
		z-index: -1;
	}
}

.dark {
	& .line-through-center-header {
		color: #fcfcfd;

		&::before {
			border-top: 1px solid #25262c;
		}
	}
}
</style>
