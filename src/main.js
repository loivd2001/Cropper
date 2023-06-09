import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { createPinia, PiniaVuePlugin } from "pinia";

import 'cropperjs/dist/cropper.css';
import VueCropper from 'vue-cropperjs';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


import "./assets/scss/main.scss";

// eslint-disable-next-line vue/multi-word-component-names

Vue.use(PiniaVuePlugin);

Vue.use(VueCropper);
Vue.use(Loading);
const pinia = createPinia();
Vue.config.productionTip = false;


new Vue({
  vuetify,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
