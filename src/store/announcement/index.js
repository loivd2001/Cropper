import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const announcementStore = defineStore("announcement", {
  state: () => ({
    success: true,
    message: "",
    dataAnnouncement: null,
    announcementList: null,
    error: null,
  }),

  actions: {
    async getList(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.ANNOUNCEMENT}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.announcementList = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async create(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.ANNOUNCEMENT}`, request)
        .then((response) => {
          const { data } = response;
          this.dataAnnouncement = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, id, request) {
      await API.requestServer
        .put(`${companyId}/${URLS.ANNOUNCEMENT}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findById(companyId, id) {
     return await API.requestServer
        .get(`${companyId}/${URLS.ANNOUNCEMENT}/${id}`)
        .then((response) => {
          const { data } = response;
          this.dataAnnouncement = data.data;
          this.success = true;
          return data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          return null;
        });
    },
    async delete(companyId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.ANNOUNCEMENT}/${id}`)
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
