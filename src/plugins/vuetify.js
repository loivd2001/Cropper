import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import ja from "vuetify/lib/locale/ja";

Vue.use(Vuetify);
Vue.component("my-component", {
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "ja";
    },
  },
});
export default new Vuetify({
  theme: {
    options: { customProperties: true }, 
    themes: {
      light: {
        primary: "#DC2828",
        secondary: "#32A0D2",
        accent: "#FFE600",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      }
    }
  },
  icons: {
    iconfont: "mdi",
  },
  lang: {
    locales: { ja },
    current: "ja",
  },
});
