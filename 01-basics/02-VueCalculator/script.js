import { createApp } from './vendor/vue.esm-browser.js';

let app = createApp({
  data() {
    return {
      firstOperand: 0,
      operation: 'sum',
      secondOperand: 0,
    };
  },
  computed: {
    result() {
      switch (this.operation) {
        case 'subtract':
          return this.firstOperand - this.secondOperand;
        case 'multiply':
          return this.firstOperand * this.secondOperand;
        case 'divide':
          return this.firstOperand / this.secondOperand;
        default:
          return Number(this.firstOperand) + Number(this.secondOperand);
      }
    },
  },
}).mount('#app');
