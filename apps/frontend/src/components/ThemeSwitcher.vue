<template>
  <div class="theme-switcer">
    <DarkThemeIcon v-if="isDarkTheme" :class="darkThemeClass" @click="toggleTheme" />
    <LightThemeIcon v-else :class="lightThemeClass" @click="toggleTheme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LightThemeIcon from './Icons/LightThemeIcon.vue';
import DarkThemeIcon from './Icons/DarkThemeIcon.vue';
import { useTheme } from '../composables/useTheme';

export default defineComponent({
  components: { LightThemeIcon, DarkThemeIcon },
  props: {
    darkThemeClass: {
      type: String,
      default: ''
    },
    lightThemeClass: {
      type: String,
      default: ''
    }
  },
  setup () {
    const { isDarkTheme, toggleTheme } = useTheme();
    return {
      isDarkTheme,
      toggleTheme
    };
  }
})
</script>

<style lang="scss" scoped>
.theme-switcer {
  display: flex;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
}
</style>