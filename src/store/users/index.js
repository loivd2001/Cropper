import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError, CONSTANTS, auth } from "../../utils";
export const userStore = defineStore("users", {
  state: () => ({
    success: true,
    message: "",
    user: null,
    currentUser: null,
    error: null,
    datas: [],
    owner: null,
  }),

  actions: {
    async sendMailSignUp(email) {
      await API.requestServer
        .get(`${URLS.SEND_MAIL_SIGNUP}/${email}`)
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
    async createAccount(request) {
      await API.requestServer
        .post(`${URLS.CREATE_ACCOUNT}`, request)
        .then((response) => {
          const { data } = response;
          this.user = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.error = error.response;
          this.message = handleGetMessageError(error);
        });
    },
    async createUser(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.USER}`, request)
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
    async updateUser(companyId, userId, request) {
      await API.requestServer
        .put(`${companyId}/${URLS.USER}/${userId}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async initialSetting(request) {
      await API.requestServer
        .post(`${URLS.INITIAL_SETTING}`, request)
        .then((response) => {
          const { data } = response;
          this.success = true;
          localStorage.setItem(CONSTANTS.TOKEN, data.data);
          const authData = auth();
          localStorage.setItem(CONSTANTS.AUTH_STORAGE, JSON.stringify(authData));
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateAccount(request) {
      await API.requestServer
        .post(`${URLS.UPDATE_ACCOUNT}`, request)
        .then(() => {
          // const { data } = response;
          this.success = true;
          // localStorage.setItem(CONSTANTS.TOKEN, data.data);
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async getListUser(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.USER}`)
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
    async getOwner(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.ONWER}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.owner = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findById(companyId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.USER}/${id}`)
        .then((response) => {
          const { data } = response;
          this.user = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async deleteUser(companyId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.USER}/${id}`)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async importUser(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.USER}/${URLS.IMPORT}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    setSuccess(s) {
      this.success = s;
    },
    setUser(data) {
      this.user = data;
    },
    async checkToken(token, email) {
      await API.requestServer
        .get(`/auth/check-token/${token}/${email}`)
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
