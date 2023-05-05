import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "@/utils";

export const npcAdminStore = defineStore("npcAdminStore", {
  state: () => ({
    success: true,
    message: "",
    user: null,
    listDatas: null,
    deleteError: false,
    autocompleteItems: null,
  }),

  actions: {
    async getAdminAutocomplete() {
      await API.requestServer
        .get(`${URLS.NPC.ADMIN_AUTOCOMPLETE}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.autocompleteItems = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async getListAdmin() {
      await API.requestServer
        .get(`${URLS.NPC.LIST_ADMIN}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.listDatas = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async createAdmin(request) {
      await API.requestServer
        .post(`${URLS.NPC.CREATE_ADMIN}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async findById(user_id) {
      await API.requestServer
        .get(`${URLS.NPC.ADMIN_DETAIL}/${user_id}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.user = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async updateAdmin(request) {
      await API.requestServer
        .post(`${URLS.NPC.UPDATE_ADMIN}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async deleteAdmin(request) {
      await API.requestServer
        .post(`${URLS.NPC.DELETE_ADMIN}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          if (error.response?.status === 422) {
            this.deleteError = true;
          }
        });
    },
  },
});
