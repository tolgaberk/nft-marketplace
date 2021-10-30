<template>
  <div class="banner">
    <slot name="icon" />
    <div class="banner__text">
      <span class="banner__text--primary">{{ primaryText }}</span>
      <span class="banner__text--secondary">{{ secondaryText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    primaryText: String,
    secondaryText: String,
  },
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  width: 385px;
  height: 156px;
  background-color: var(--clr-white);
  padding: 45px 20px;
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 23px;
    &--primary {
      color: var(--clr-dark);
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.4px;
      font-weight: 600;
    }
    &--secondary {
      display: inline-flex;
      font-weight: 700;
      font-size: 12px;
      color: #43454E;
      letter-spacing: 0;
      line-height: 12px;
    }
  }
}

.dark {
  & .banner {
    border: 1px solid #25262C;
    background-color: var(--clr-dark);
    &__text {
      &--primary {
        color: #FCFCFD;
      }
      &--secondary {
      color: #777E90;
      }
    }
  }
}

</style>