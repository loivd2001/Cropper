import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "@/utils";

export const npcAccountStore = defineStore("npcAccountStore", {
	state: () => ({
		success: true,
		message: "",
		listData: null,
		data: null,
		error: null,
		paymentHistoryList: null,
	}),

	actions: {
		async getAllCompanies() {
			await API.requestServer
				.get(`${URLS.NPC.LIST_ACCOUNT}`)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.listData = data.data;
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},

		async getPaymentHistory(companyId) {
			await API.requestServer
				.get(`${URLS.NPC.PAYMENT_HISTORY}/${companyId}`)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.paymentHistoryList = data.data;
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},

		async createAccount(request) {
			await API.requestServer
				.post(`${URLS.NPC.CREATE_ACCOUNT}`, request)
				.then(() => {
					this.success = true;
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},

		async findById(companyId) {
			await API.requestServer
				.get(`${URLS.NPC.ACCOUNT_DETAIL}/${companyId}`)
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

		async updateAccount(request) {
			await API.requestServer
				.post(`${URLS.NPC.UPDATE_ACCOUNT}`, request)
				.then(() => {
					this.success = true;
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},

		async deleteAccount(request) {
			await API.requestServer
				.post(`${URLS.NPC.DELETE_ACCOUNT}`, request)
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
