import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const stageStore = defineStore("stage", {
  state: () => ({
    success: true,
    message: "",
    listStage: [],
    listProblem: [],
    stageCreate: null,
    stageDetail: null,
    problemCreate: null,
    problemDetail: null,
    error: null,
  }),

  actions: {
    async getList(companyId, gameId, courseId) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}`
        )
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.listStage = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async create(companyId, gameId, courseId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}`,
          request
        )
        .then((response) => {
          const { data } = response;
          this.stageCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async clone(companyId, gameId, courseId, id) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}/${URLS.CLONE}`)
        .then((response) => {
          const { data } = response;
          this.stageCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async updateOrderStage(companyId, gameId, courseId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/order`,
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
    async updateOrderCardego(companyId, gameId, courseId, stageId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${URLS.ORDER}`,

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
    async findById(companyId, gameId, courseId, id) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`
        )
        .then((response) => {
          const { data } = response;
          this.stageDetail = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async update(companyId, gameId, courseId, id, request) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`,
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
    async delete(companyId, gameId, courseId, id) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    // async createCartdeGo(companyId, gameId, courseId, request) {
    //   await API.requestServer
    //     .post(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.CREATE_CARTDE_GO}`,
    //       request
    //     )
    //     .then((response) => {
    //       const { data } = response;
    //       this.stageCreate = data.data;
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //     });
    // },
    // async updateCartdeGo(companyId, gameId, courseId, id, request) {
    //   await API.requestServer
    //     .put(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.EDIT_CARTDE_GO}/${id}`,
    //       request
    //     )
    //     .then(() => {
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //       this.error = error?.response?.data?.errors;
    //     });
    // },

    async getListProblem(companyId, gameId, courseId, stageId) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}`
        )
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.listProblem = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async createProblem(companyId, gameId, courseId, stageId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}`,
          request
        )
        .then((response) => {
          const { data } = response;
          this.problemCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findProblemById(companyId, gameId, courseId, stageId, id) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`
        )
        .then((response) => {
          const { data } = response;
          this.problemDetail = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateProblem(companyId, gameId, courseId, stageId, id, request) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`,
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
    async deleteProblem(companyId, gameId, courseId, stageId, id) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    // async updateBrandpittan(companyId, gameId, courseId, id, request) {
    //   await API.requestServer
    //     .put(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.BRANDPITTAN}/${id}`,
    //       request
    //     )
    //     .then(() => {
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //       this.error = error?.response?.data?.errors;
    //     });
    // },
    // async findBrandpittanById(companyId, gameId, courseId, id) {
    //   await API.requestServer
    //     .get(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.BRANDPITTAN}/${id}`
    //     )
    //     .then((response) => {
    //       const { data } = response;
    //       this.stageDetail = data.data;
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //     });
    // },
    // async createBrandPittan(companyId, gameId, courseId, request) {
    //   await API.requestServer
    //     .post(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.BRANDPITTAN}`,
    //       request
    //     )
    //     .then((response) => {
    //       const { data } = response;
    //       this.stageCreate = data.data;
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //     });
    // },
    // async findDonmemoById(companyId, gameId, courseId, id) {
    //   await API.requestServer
    //     .get(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.DONMEMO}/${id}`
    //     )
    //     .then((response) => {
    //       const { data } = response;
    //       this.stageDetail = data.data;
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //     });
    // },
    // async createDonmemo(companyId, gameId, courseId, request) {
    //   await API.requestServer
    //     .post(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.DONMEMO}`,
    //       request
    //     )
    //     .then((response) => {
    //       const { data } = response;
    //       this.stageCreate = data.data;
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //     });
    // },
    // async updateDonmemo(companyId, gameId, courseId, id, request) {
    //   await API.requestServer
    //     .put(
    //       `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.DONMEMO}/${id}`,
    //       request
    //     )
    //     .then(() => {
    //       this.success = true;
    //     })
    //     .catch((error) => {
    //       this.success = false;
    //       this.message = handleGetMessageError(error);
    //       this.error = error?.response?.data?.errors;
    //     });
    // },

    async importStage(companyId, gameId, courseId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.IMPORT}`,
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
    
    async importProblem(companyId, gameId, courseId, stageId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${URLS.IMPORT}`,
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
  },
});
