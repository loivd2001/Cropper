import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
	state: () => ({
		show: false,
		color: "success",
		text: "",
		showDialog: false,
		messageDialog: false,
		to: null,
		overlay: false,
		loadingBtn: false,
		noAddCourse: false,
		noAddStage: false,
		textError: "",
	}),

	actions: {
		async snackbar(data) {
			this.show = data.show;
			this.text = data.text;
			if (typeof data.color != "undefined") {
				this.color = data.color;
			}
		},
		async setOverlay(overlay) {
			this.overlay = overlay;
		},
		setLoadingBtn(loadingBtn) {
			this.loadingBtn = loadingBtn;
		},
	},
});
