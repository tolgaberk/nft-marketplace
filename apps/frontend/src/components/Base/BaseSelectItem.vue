<template>
	<option>{{ text }}</option>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		text: {
			type: String,
			default: '',
		},
	},
	setup() {
		return {};
	},
});
</script>

<style class="scss" scoped></style>
