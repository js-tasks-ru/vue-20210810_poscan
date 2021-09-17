<template>
  <div class="toasts">
    <ui-toast
      v-for="toast in arrayToasts"
      :key="toast.index"
      :text="toast.text"
      :iconToast="toast.icon"
      :toastClass="toast.class"
    />
  </div>
</template>

<script>
import UiToast from './UiToast';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      arrayToasts: [],
    };
  },

  methods: {
    success(message) {
      this.arrayToasts.push({
        icon: 'check-circle',
        class: 'toast_success',
        text: message ? message : 'Success Toast Example',
      });

      setTimeout(() => {
        this.arrayToasts.shift();
      }, 5000);
    },
    error(message) {
      this.arrayToasts.push({
        icon: 'alert-circle',
        class: 'toast_error',
        text: message ? message : 'Error Toast Example',
      });

      setTimeout(() => {
        this.arrayToasts.shift();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
