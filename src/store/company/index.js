import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const companyStore = defineStore("company", {
  state: () => ({
    success: true,
    message: "",
    datas: [],
    data: null,
    company: null,
    logo: null,
    error: null,
    payments: [],
    dataCapacity: null,
  }),

  actions: {
    async uploadLogo(request) {
      await API.requestServer
        .post(`${URLS.COMPANY_UPLOAD_LOGO}`, request)
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
    async findById(companyId) {
      await API.requestServer
        .get(`${URLS.COMPANY}/${companyId}`)
        .then((response) => {
          const { data } = response;
          this.data = data.data;
          this.company = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
      return this.company;
    },
    async updateCompany(id, request) {
      await API.requestServer
        .put(`${URLS.COMPANY}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateCard(request) {
      await API.requestServer
        .post(`${URLS.UPDATE_CARD}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async payment(request) {
      return await API.requestServer
        .post(`${URLS.PAYMENT}`, request)
        .then(() => {
          this.success = true;
          return {
            success: true,
            error: null,
          };
        })
        .catch((error) => {
          this.success = false;
          this.error = error.response;
          this.message = handleGetMessageError(error);
          return {
            success: false,
            error: this.error,
          };
        });
    },
    async paymentOptionChange(request) {
      return await API.requestServer
        .post(`${URLS.PAYMENT}/option-change`, request)
        .then(() => {
          this.success = true;
          return {
            success: true,
            error: null,
          };
        })
        .catch((error) => {
          this.success = false;
          this.error = error.response;
          this.message = handleGetMessageError(error);
          return {
            success: false,
            error: this.error,
          };
        });
    },
    async getPaymentHistory(request) {
      await API.requestServer
        .get(`${URLS.PAYMENT}`, request)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.payments = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.error = error;
          this.message = handleGetMessageError(error);
        });
    },
    async withdrawalApplication(request) {
      await API.requestServer
        .post(`${URLS.COMPANY}/${URLS.withdrawal_application}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async getTotalUsedCapacity() {
      await API.requestServer
        .get(`${URLS.COMPANY}/${URLS.TOTAL_USED_CAPACITY}`)
        .then((response) => {
          const { data } = response;
          this.dataCapacity = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
  },
});
