import { defineStore } from "pinia";
import {
	URLS,
	API,
	handleGetMessageError,
	handleGetIsShowMessageError,
	CONSTANTS,
} from "../../utils";
export const authStore = defineStore("auth", {
	state: () => ({
		success: true,
		message: "",
		dataLogin: null,
		error: null,
		dataAuthMe: null,
		isShowMessage: false,
		isShowActiveLast: false,
	}),

	actions: {
		async login(request) {
			await API.requestServer
				.post(`${URLS.LOGIN}`, request)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.dataLogin = data.data;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
					this.isShowMessage = handleGetIsShowMessageError(error);
				});
		},
		async activeLogin(request) {
			await API.requestServer
				.post(`${URLS.ACTIVE_LOGIN}`, request)
				.then((response) => {
					const { data } = response;
					this.dataLogin = data.data;
					this.success = true;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async twoFactorVerification() {
			await API.requestServer
				.get(`${URLS.TOW_FACTOR_VERY}`)
				.then((response) => {
					const { data } = response;
					this.dataLogin = data.data;
					this.success = true;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async logout() {
			await API.requestServer
				.get(`${URLS.LOGOUT}`)
				.then((response) => {
					const { data } = response;
					this.success = true;
					localStorage.removeItem(CONSTANTS.TOKEN);
					localStorage.removeItem(CONSTANTS.AUTH_STORAGE);
					localStorage.removeItem(CONSTANTS.EMAIL);
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async forgotPassword(request) {
			await API.requestServer
				.post(`${URLS.FORGOT_PASS}`, request)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.dataLogin = data.data;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async resetPassword(request) {
			await API.requestServer
				.post(`${URLS.RESET_PASS}`, request)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.dataLogin = data.data;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async generateNewToken() {
			await API.requestServer
				.get(`${URLS.GENERATE_NEW_TOKEN}`)
				.then((response) => {
					const { data } = response;
					localStorage.setItem(CONSTANTS.TOKEN, data.data);
					this.success = true;
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
		async authMe() {
			await API.requestServer
				.get(`${URLS.AUTH_ME}`)
				.then((response) => {
					const { data } = response;
					this.success = true;
					this.dataAuthMe = data.data;
					localStorage.setItem(
						CONSTANTS.AUTH_STORAGE,
						JSON.stringify(this.dataAuthMe)
					);
					if (!data.success) {
						this.success = false;
						this.message = data.message;
					}
				})
				.catch((error) => {
					this.success = false;
					this.message = handleGetMessageError(error);
				});
		},
	},
});
