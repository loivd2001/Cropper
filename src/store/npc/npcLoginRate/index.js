import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "@/utils";

export const npcLoginRateStore = defineStore("npcLoginRateStore", {
  state: () => ({
    success: true,
    message: "",
    datas: null,
    lastData: null,
    error: null,
  }),

  actions: {
    async getListLoginRate() {
      await API.requestServer
        .get(`${URLS.NPC.LIST_LOGIN_RATE}`)
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
  },
});
