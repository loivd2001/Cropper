import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "@/utils";

export const npcNotificationStore = defineStore("npcNotificationStore", {
  state: () => ({
    success: true,
    message: "",
    dataNotification: null,
    notificationList: null,
    error: null,
  }),

  actions: {
    async getList() {
      await API.requestServer
        .get(`${URLS.NPC.LIST_NOTIFICATION}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.notificationList = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async create(request) {
      await API.requestServer
        .post(`${URLS.NPC.CREATE_NOTIFICATION}`, request)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.dataNotification = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async update(request) {
      await API.requestServer
        .post(`${URLS.NPC.UPDATE_NOTIFICATION}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async findById(id) {
      await API.requestServer
        .get(`${URLS.NPC.NOTIFICATION_DETAIL}/${id}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.dataNotification = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async delete(request) {
      await API.requestServer
        .post(`${URLS.NPC.DELETE_NOTIFICATION}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
  },
});
