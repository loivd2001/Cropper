import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const gameStore = defineStore("games", {
  state: () => ({
    success: true,
    message: "",
    datas: [],
    gameCreate: null,
    gameDetail: null,
    treeviews: null,
    error: null,
    weeklAndMonthly: null,
    scoreHistory: [],
    dataExcel: [],
    autocompleteItems: null,
  }),

  actions: {
    async getList(companyId) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}`)
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

    async getNPCAutoComplete() {
      await API.requestServer
        .get(`${URLS.GAME_NPC_AUTOCOMPLETE}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.autocompleteItems = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async create(companyId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}`, request)
        .then((response) => {
          const { data } = response;
          this.gameCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async cloneGame(companyId, game_id) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${game_id}/${URLS.CLONE}`)
        .then((response) => {
          const { data } = response;
          this.gameCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async cloneGameToOther(game_id, target_id) {
      await API.requestServer
        .post(`${URLS.GAME}/${game_id}/${URLS.CLONE}/${target_id}`)
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
        .get(`${companyId}/${URLS.GAME}/${id}`)
        .then((response) => {
          const { data } = response;
          this.gameDetail = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, id, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          this.error = error?.response?.data?.errors;
        });
    },
    async delete(companyId, id, params) {
      await API.requestServer
        .delete(`${companyId}/${URLS.GAME}/${id}`, { params })
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async gameTreeView(companyId, id, params) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${id}/${URLS.GAME_TREEVIEW}`, {
          params,
        })
        .then((response) => {
          const { data } = response;
          this.treeviews = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async getWeeklAndMonthRanking(companyId, gameId) {
      await API.requestServer
        .get(`${companyId}/week-month-ranking/${gameId}`)
        .then((response) => {
          const { data } = response;
          this.weeklAndMonthly = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async scoreHistoryRanking(companyId, params) {
      await API.requestServer
        .get(`${companyId}/score-history-ranking`, {
          params,
        })
        .then((response) => {
          const { data } = response;
          this.scoreHistory = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async importExcel(companyId, gameId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/import-course-stage`,
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
    async exportExcel(companyId, id) {
      return await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${id}/export-course-stage`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.dataExcel = data.data;
          return data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          return null;
        });
    },

    async checkExistVisibility(params) {
      return await API.requestServer
        .get("checkExistVisibility", {
          params,
        })
        .then((response) => {
          const { data } = response;
          return data.data;
        })
        .catch((error) => {
          this.message = handleGetMessageError(error);
          return false;
        });
    },
  },
});
