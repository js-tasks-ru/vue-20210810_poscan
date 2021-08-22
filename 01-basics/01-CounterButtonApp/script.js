import { createApp } from './vendor/vue.esm-browser.js';

let app = createApp({
  data() {
    return {
      countClick: 0,
    };
  },
}).mount('#app');
