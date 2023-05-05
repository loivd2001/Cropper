import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const templateImageStore = defineStore("templateImage", {
  state: () => ({
    success: true,
    message: "",
    images: [],
    error: null,
  }),

  actions: {
    async getList(params) {
      await API.requestServer
        .get(`${URLS.TEMPLATE_IMAGE}`, { params })
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.images = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
  },
});
