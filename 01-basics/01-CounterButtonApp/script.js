import { createApp } from './vendor/vue.esm-browser.js';

var app = createApp({
  data() {
    return {
      countClick: 0
    }
  }
}).mount("#app");