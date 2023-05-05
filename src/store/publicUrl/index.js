import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const publicUrlStore = defineStore("publicUrl", {
  state: () => ({
    success: true,
    message: "",
    datas: [],
    publicUrlCreate: null,
    publicUrlDetail: null,
    error: null,
  }),

  actions: {
    async getList(companyId, gameId) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.PUBLIC_URL}`)
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
    async create(companyId, gameId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.PUBLIC_URL}`, request)
        .then((response) => {
          const { data } = response;
          this.publicUrlCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findById(companyId, gameId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.PUBLIC_URL}/${id}`)
        .then((response) => {
          const { data } = response;
          this.publicUrlDetail = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, gameId, id, request) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.PUBLIC_URL}/${id}`,
          request
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          this.error = error?.response?.data?.errors;
        });
    },
    async delete(companyId, gameId, id, params) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.PUBLIC_URL}/${id}`,
          { params }
        )
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
