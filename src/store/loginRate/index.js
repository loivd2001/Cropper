import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const loginRateStore = defineStore("loginRate", {
  state: () => ({
    success: true,
    message: "",
    datas: null,
    lastData: null,
    error: null,
  }),

  actions: {
    async getListLoginRate(params) {
      await API.requestServer
        .get(`${URLS.LOGIN_RATE}`, { params })
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.datas = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async getCurrentLoginRate() {
      await API.requestServer
        .get(`${URLS.LOGIN_RATE_LAST}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.lastData = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
  },
});
