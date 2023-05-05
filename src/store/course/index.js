import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const courseStore = defineStore("course", {
  state: () => ({
    success: true,
    message: "",
    listCourse: [],
    courseCreate: null,
    courseDetail: null,
    error: null,
  }),

  actions: {
    async getList(companyId, gameId) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.listCourse = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async create(companyId, gameId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}`, request)
        .then((response) => {
          const { data } = response;
          this.courseCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async clone(companyId, gameId, id) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${id}/${URLS.CLONE}`)
        .then((response) => {
          const { data } = response;
          this.courseCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async updateOrderCourse(companyId, gameId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE_ORDER}`,
          request
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findById(companyId, gameId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${id}`)
        .then((response) => {
          const { data } = response;
          this.courseDetail = data.data;
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
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${id}`,
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
    async delete(companyId, gameId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${id}`)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async importCourse(companyId, gameId, request) {
      return await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${URLS.IMPORT}`,
          request
        )
        .then((response) => {
          const { data } = response;

          this.success = true;
          return data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          return null;
        });
    },
  },
});
