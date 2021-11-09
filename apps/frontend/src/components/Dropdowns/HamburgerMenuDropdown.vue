<template>
  <div>
    <div class="dropdown__offset" @click="$emit('closeDropdown')" />
    <div class="dropdown hamburger-menu-dropdown">
      <template v-for="(menu, index) in menuItems" :key="`menu-${menu}`">
        <BaseDivider v-if="index !== 0" class="hamburger-menu-dropdown--divider" />
        <router-link :to="menu.link">
          {{ menu.title }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseDivider from '../Base/BaseDivider.vue';

export default defineComponent({
  components: { BaseDivider },
  setup () {
    const menuItems = [
      { title: 'Help Center', link: '/' },
      { title: 'Newsletter', link: '/' },
      { title: 'Blog', link: '/' },
      { title: 'Partners', link: '/' }
    ];

    return {
      menuItems
    };
  },
  emits: ['closeDropdown']
})
</script>

<style lang="scss" scoped>
.hamburger-menu-dropdown {
  width: max-content;
  top: 60px;
  right: 0;
  box-shadow: 0 2px 17px 0 rgba(0,0,0, 34%);
  padding: 25px 45px 25px 36px;
  color: #777e90;
  font-size: 14px;
  font-weight: 700;
  background: #121215;

  &--divider {
    border-top: 2px solid #25262C;
    margin-bottom: 22px;
    margin-top: 7px;
  }
}
</style>