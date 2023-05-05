import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const avatarStore = defineStore("avatar", {
  state: () => ({
    success: true,
    message: "",
    datas: [],
    data: null,
    logo: null,
    error: null,
  }),

  actions: {
    async getList(companyId, params = null) {
      await API.requestServer
        .get(`${companyId}/${URLS.AVATAR}`, { params })
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
    async create(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.AVATAR}`, request)
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
    async findById(companyId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.AVATAR}/${id}`)
        .then((response) => {
          const { data } = response;
          this.data = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, id, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.AVATAR}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async delete(companyId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.AVATAR}/${id}`)
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
