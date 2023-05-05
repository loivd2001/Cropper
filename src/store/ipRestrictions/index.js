import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const ipRestrictionStore = defineStore("ipRestrictions", {
  state: () => ({
    success: true,
    message: "",
    dataIp: null,
    data: null,
    error: null,
  }),

  actions: {
    async getList(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.IP_RESTRICTIONS}`)
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
    async createIp(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.IP_RESTRICTIONS}`, request)
        .then((response) => {
          const { data } = response;
          this.dataIp = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateIp(companyId, id, request) {
      await API.requestServer
        .put(`${companyId}/${URLS.IP_RESTRICTIONS}/${id}`, request)
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
        .get(`${companyId}/${URLS.IP_RESTRICTIONS}/${id}`)
        .then((response) => {
          const { data } = response;
          this.dataIp = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async deleteIp(companyId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.IP_RESTRICTIONS}/${id}`)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async importIp(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.IP_RESTRICTIONS}/${URLS.IMPORT}`, request)
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
