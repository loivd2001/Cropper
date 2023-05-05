import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const scoreHistoryStore = defineStore("scoreHistory", {
  state: () => ({
    success: true,
    message: "",
    list: null,
    periodList: {},
    rankingPeriod: null,
    historyRanking: null,
  }),

  actions: {
    async getList() {
      await API.requestServer
        .get(`${URLS.SCORE_HISTORY}/list`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.list = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async getGamePeriodRanking(companyId, gameId) {
      if (this.periodList[gameId]) {
        this.rankingPeriod = this.periodList[gameId];
        return;
      }

      await API.requestServer
        .get(`${URLS.SCORE_HISTORY}/${companyId}/game-period-ranking/${gameId}`)
        .then((response) => {
          const { data } = response;
          this.rankingPeriod = data.data;
          this.periodList[gameId] = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async getHistoryRanking(companyId, params) {
      await API.requestServer
        .get(`${URLS.SCORE_HISTORY}/${companyId}/history-ranking`, {
          params,
        })
        .then((response) => {
          const { data } = response;
          this.historyRanking = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
  },
});
