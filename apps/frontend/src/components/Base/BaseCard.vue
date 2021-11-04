<template>
  <div class="base-card">
    <div :class="{ 'base-card__asset--fixed': isFixedHeight }" class="base-card__asset">
      <img v-if="assetType === 'image'" :src="assetUrl" :alt="assetTitle" class="base-card__asset--image">
    </div>
    <div class="base-card__content my-5 mx-4">
      <div class="base-card__content--profile flex justify-between items-center">
        <div class="flex items-center">
          <a href="" class="inline">
            <img class="inline rounded-full h-10 w-10" :src="sellerAvatarUrl" :alt="sellerName">
          </a>
          <div class="ml-3">
            <a class="block font-bold text-lg">
              {{ sellerName }}
            </a>
            <span class="block base-card__content--quantity font-medium text-xs">
              Sales Quantity : {{ assetQuantity }}
            </span>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <span class="block text-xs base-card__content--time">
            <!-- {{ biddingTime }} -->
            3 min ago
          </span>
          <span> {{ sellerBadge }} </span>
        </div>
      </div>
      <div v-if="isNewBid" class="base-card__content--new-bid mt-3 mb-3">
        <span class="font-semibold text-xs">
          New bid 🔥
        </span>
      </div>
      <div class="base-card__content--details relative">
        <div class="base-card__content--price relative z-10">
          <span class="font-bold text-3xl mr-1">
            {{ assetPrice }}
          </span>
          <span class="font-bold text-2xl">
            {{ assetPriceCurrency }}
          </span>
        </div>
        <div v-if="isPriceShadowed" class="base-card__content--price-shadow">
          <span class="font-bold text-3xl mr-1">
            {{ assetPrice }}
          </span>
          <span class="font-bold text-2xl">
            {{ assetPriceCurrency }}
          </span>
        </div>
        <h6 class="font-bold text-sm mt-3">
          {{ assetTitle }}
        </h6>
        <p class="font-medium text-xs mt-3">
          {{ assetDescription }}
        </p>
        <div class="mt-3">
          <a v-for="(tag, index) in assetTags" :key="`hebelebumbum${index}`" class="font-medium text-xs">
            <!-- buradan tag searche gidebildisn -->
            #{{ tag }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseCard',
  props: {
    assetUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1635536816492-9a6fb49354d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1278&q=80',
    },
    assetType: {
      type: String,
      default: 'image'
    },
    sellerAvatarUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1635547476327-1d2348998473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80'
    },
    sellerName: {
      type: String,
      default: 'John Doe'
    },
    sellerID: {
      type: Number,
      default: 0
    },
    isNewBid: {
      type: Boolean,
      default: true
    },
    biddingTime: {
      type: Date,
      default() {
        return new Date();
      }
    },
    sellerBadge: {
      type: String,
      default: 'badge'
    },
    assetPrice: {
      type: Number,
      default: 1234.56
    },
    assetPriceCurrency: {
      type: String,
      default: 'ETH'
    },
    assetQuantity: {
      type: Number,
      default: 100
    },
    assetTitle: {
      type: String,
      default: 'The Pixilated Starry Night'
    },
    assetDescription: {
      type: String,
      default: 'My skills include product design, interactive design, aesthetic art direction, prototyping, mobile design, branding, front-end development and team leadership. ',
    },
    assetTags: {
      type: Array,
      default() {
        return ['Product Design', 'Art', 'NFTSDesign'];
      }
    },
    isPriceShadowed: {
      type: Boolean,
      default: false
    },
    isFixedHeight: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.base-card {
  width: 385px;
  height: fit-content;
  background-color: var(--clr-white);
  color: var(--clr-dark);

  &__asset {
    width: 100%;

    &--image {
      width: 100%;
      object-fit: cover;
    }
  }

  &__asset--fixed{
    height: 238px;

    .base-card__asset--image {
      height: 100%;
    }
  }

  &__content {
    &--price {
      color: #253342;
    }
    &--price-shadow {
      position: absolute;
      left: 0;
      top: 2px;
      color: var(--clr-dark-primary);
    }
  }
}

.dark {
  & .base-card {
    background-color: var(--clr-dark);
    border: 1px solid #26272D;
    color: var(--clr-white);
    &__content {
      &--quantity {
        color: #988F8F;
      }
      &--time {
        color: #464444;
      }
      &--price {
      color: var(--clr-primary);
      }
      &--price-shadow {
        color: var(--clr-light-primary);
      }
    }
  }

}
</style>