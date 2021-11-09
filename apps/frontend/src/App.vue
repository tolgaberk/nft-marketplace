<template>
	<TheNavbar />
	<router-view />
	<TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheFooter from './components/Layout/TheFooter.vue';
import TheNavbar from './components/Layout/TheNavbar.vue';

export default defineComponent({
	components: { TheFooter, TheNavbar },
});
</script>
