<template>
  <div class="toast" :class="toastClass">
    <ui-icon class="toast__icon" :icon="iconToast" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  props: {
    text: {
      type: String,
      required: true,
    },
    iconToast: {
      type: String,
      required: true,
    },
    toastClass: {
      type: String,
      required: true,
    },
  },
};
</script>
