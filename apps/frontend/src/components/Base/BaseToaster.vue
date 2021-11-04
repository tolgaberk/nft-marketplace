<template>
  <div class="base-toaster">
    <span class="base-toaster__text">{{ text }}</span>
    <BaseButton
      isText
      :textColor="type"
      size="none"
      fontSize="sm"
      :fontWeight="600"
      bgColor="transparent"
    >
      {{ buttonText }}
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './BaseButton.vue'

export default defineComponent({
  components: { BaseButton },
  props: {
    text: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      validator(val: string) {
        return ['primary, success, warning, danger'].includes(val);
      }
    }
  },
  setup() {
    return {};
  },
})
</script>

<style lang="scss" scoped>
.base-toaster {
  height: 48px;
  width: 283px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #25262C;
  color: var(--clr-dark);
  &__text {
    font-size: 12px;
  }
}
.dark {
  & .base-toaster {
    border: 1px solid #25262C;
    color: #E6E8EC;
  }
}
</style>