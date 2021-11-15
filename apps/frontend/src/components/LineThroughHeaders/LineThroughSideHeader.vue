<template>
	<div>
		<h2 class="line-through-header">
			{{ firstTitle }}
			<span class="line-through-text"> {{ secondTitle }} </span>
		</h2>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		firstTitle: {
			type: String,
			required: true,
		},
		secondTitle: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.line-through {
	&-header {
		font-weight: 600;
		font-size: 18px;
		color: var(--clr-dark);
	}

	&-text {
		position: relative;
		display: block;
		color: #43454e;
		font-weight: 700;
		font-size: 40px;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			z-index: -1;
			width: 160px;
			border-top: 1px solid #25262c;
		}
	}
}

.dark {
	& .line-through-header {
		color: white;
	}
}
</style>
