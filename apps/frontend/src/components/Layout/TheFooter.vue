<template>
  <footer class="footer">
    <div class="footer__content grid grid-cols-6">
      <div class="col-span-2">
        <SmallTradistIcon class="footer__content--tradist-icon" />
        <span class="footer__mobile-app--text">
          Download App
        </span>
        <QrCodeIcon class="footer__mobile-app--qr-code" />
      </div>

      <div class="col-span-1">
        <h6>Side Map</h6>
        <a>Connect Wallet</a>
        <a>Lorem</a>
        <a>Lorem</a>
      </div>

      <div class="col-span-1">
        <h6>Info</h6>
        <a>Download</a>
        <a>Demos</a>
        <a>Support</a>
      </div>

      <div class="col-span-2 footer__content--newsletter">
        <div class="flex justify-between">
          <h6>Sewsletter</h6>
          <DarkThemeIcon v-if="isDarkTheme" @click="toggleTheme" />
          <LightThemeIcon v-else @click="toggleTheme" />
        </div>
        <span>Subscribe our newsletter to get more free design course and resource</span>
        <div class="footer__content--newsletter-input">
          <BaseInput placeholder="Enter Your Email" />
          <NewsletterButton />
        </div>
      </div>

    </div>

    <BaseDivider class="footer__divider" />

    <div class="flex justify-between">
      <span class="footer__copyright">
        Copyright © 2021 tradist. All rights reserved
      </span>
      <div class="flex space-x-4 justify-center footer__social">
        <span class="italic font-semibold">
          Get connected with us on social networks !
        </span>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <YoutubeIcon />
      </div>
    </div>

  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InstagramIcon from '../Icons/InstagramIcon.vue'
import FacebookIcon from '../Icons/FacebookIcon.vue';
import TwitterIcon from '../Icons/TwitterIcon.vue';
import YoutubeIcon from '../Icons/YoutubeIcon.vue';
import BaseDivider from '../Base/BaseDivider.vue';
import SmallTradistIcon from '../Icons/SmallTradistIcon.vue';
import QrCodeIcon from '../Icons/QrCodeIcon.vue';
import DarkThemeIcon from '../Icons/DarkThemeIcon.vue';
import LightThemeIcon from '../Icons/LightThemeIcon.vue';
import NewsletterButton from '../Buttons/NewsletterButton.vue';
import BaseInput from '../Base/BaseInput.vue';

import { useTheme } from '../../composables/useTheme';

export default defineComponent({
  name: 'TheFooter',
  components: { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, BaseDivider, SmallTradistIcon, QrCodeIcon, DarkThemeIcon, LightThemeIcon, NewsletterButton, BaseInput },
  setup() {
    const { isDarkTheme, toggleTheme } = useTheme();

    return {
      isDarkTheme,
      toggleTheme
    };
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 0 160px 30px 160px;
  background-color: #121215;
  font-family: 'Poppins';

  &__content {
    &--tradist-icon {
      margin-top: 70px;
    }

    & h6 {
      margin-top: 82px;
      font-size: 16px;
      color: #FCFCFD;
      margin-bottom: 40px;
    }

    & a {
      display: block;
      font-size: 14px;
      margin-bottom: 24px;
      color: #777E90;
    }

    &--newsletter {
      font-family: Gilroy;
      font-size: 14px;
      color: #E6E8EC;
      line-height: 24px;
      margin-top: 82px;

      & h6 {
        margin-top: 0;
        font-size: 16px;
        color: #FCFCFD;
      }

      &-input {
        width: 100%;
        height: 48px;
        border: 1px solid #25262C;
        display: flex;
        align-items: center;
        margin-top: 15px;
        padding: 0 2px;

        & > input{
          width: 100%;
          padding: 8px 16px;
          outline: none;
          background-color: transparent;

          &::placeholder {
            color: #777E90;
            opacity: 100;
            font-size: 12px;
            line-spacing: 24px;
          }

          &:-ms-input-placeholder {
            color: #777E90;
            opacity: 100;
            font-size: 12px;
            line-spacing: 24px;
          }

          &::-ms-input-placeholder {
            color: #777E90;
            opacity: 100;
            font-size: 12px;
            line-spacing: 24px;
          }

        }
      }
    }
  }

  &__mobile-app {
    &--text {
      display: inline-block;
      color: #E6E8EC;
      font-size: 15px;
      letter-spacing: -0.15px;
      line-height: 32px;
      margin: 14px 0 30px 0;
    }

    &--qr-code {
      margin-bottom: 30px;
    }
  }

  &__divider {
    margin-bottom: 35px;
    border: 1px solid #25262C;
  }

  &__copyright {
    font-size: 12px;
    color: #777E90;
  }

  &__social {
    font-size: 12px;
    color: #4A4D5C;

    & > svg {
    height: 100%;;
    }
  }
}
</style>