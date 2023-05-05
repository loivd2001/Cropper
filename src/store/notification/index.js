import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const notificationStore = defineStore("notification", {
  state: () => ({
    success: true,
    message: "",
    dataNotification: null,
    data: null,
    error: null,
  }),

  actions: {
    async getList(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.NOTIFICATION}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.data = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async create(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.NOTIFICATION}`, request)
        .then((response) => {
          const { data } = response;
          this.dataNotification = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, id, request) {
      await API.requestServer
        .put(`${companyId}/${URLS.NOTIFICATION}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findById(companyId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.NOTIFICATION}/${id}`)
        .then((response) => {
          const { data } = response;
          this.dataNotification = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async delete(companyId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.NOTIFICATION}/${id}`)
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
