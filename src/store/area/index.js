import { defineStore } from "pinia";
import { URLS, API, handleGetMessageError } from "../../utils";
export const areaStore = defineStore("area", {
  state: () => ({
    success: true,
    message: "",
    listArea: [],
    areaCreate: null,
    areaDetail: null,
    listCourse: [],
    courseCreate: null,
    courseDetail: null,
    listStage: [],
    stageCreate: null,
    stageDetail: null,
    listProblem: [],
    problemCreate: null,
    problemDetail: null,
    error: null,
  }),

  actions: {
    async getListArea(companyId, gameId) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}`)
        .then((response) => {
          const { data } = response;
          this.success = true;
          this.listArea = data.data;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async createArea(companyId, gameId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}`, request)
        .then((response) => {
          const { data } = response;
          this.areaCreate = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateOrderArea(companyId, gameId, request) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${URLS.ORDER}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async findAreaById(companyId, gameId, id) {
      await API.requestServer
        .get(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${id}`)
        .then((response) => {
          const { data } = response;
          this.areaDetail = data.data;
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },
    async updateArea(companyId, gameId, id, request) {
      await API.requestServer
        .put(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${id}`, request)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
          this.error = error?.response?.data?.errors;
        });
    },
    async deleteArea(companyId, gameId, id) {
      await API.requestServer
        .delete(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${id}`)
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    // course
    async getListAreaCourse(companyId, gameId, areaId) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}`
        )
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

    async createAreaCourse(companyId, gameId, areaId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}`,
          request
        )
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

    async cloneCourse(companyId, gameId, areaId, courseId) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.CLONE}`)
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

    async updateOrderAreaCourse(companyId, gameId, areaId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${URLS.ORDER}`,
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
    async findAreaCourseById(companyId, gameId, areaId, id) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${id}`
        )
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
    async updateAreaCourse(companyId, gameId, areaId, id, request) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${id}`,
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
    async deleteAreaCourse(companyId, gameId, areaId, id) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${id}`
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    // stage
    async getListAreaCourseStage(companyId, gameId, areaId, courseId) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}`
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

    async createAreaCourseStage(companyId, gameId, areaId, courseId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}`,
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

    async cloneStage(companyId, gameId, areaId, courseId, stageId) {
      await API.requestServer
        .post(`${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.CLONE}`)
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

    async updateOrderAreaCourseStage(
      companyId,
      gameId,
      areaId,
      courseId,
      request
    ) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.ORDER}`,
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
    async findAreaCourseStageById(companyId, gameId, areaId, courseId, id) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`
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
    async updateAreaCourseStage(
      companyId,
      gameId,
      areaId,
      courseId,
      id,
      request
    ) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`,
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
    async deleteAreaCourseStage(companyId, gameId, areaId, courseId, id) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${id}`
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    // problem
    async getListAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId
    ) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}`
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
    async createAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      request
    ) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}`,
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
    async updateOrderAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      request
    ) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${URLS.ORDER}`,
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
    async findAreaCourseStageProblemById(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      id
    ) {
      await API.requestServer
        .get(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`
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
    async updateAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      id,
      request,
      options
    ) {
      await API.requestServer
        .put(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`,
          request,
          {
            params: options,
          }
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
    async deleteAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      id
    ) {
      await API.requestServer
        .delete(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${id}`
        )
        .then(() => {
          this.success = true;
        })
        .catch((error) => {
          this.success = false;
          this.message = handleGetMessageError(error);
        });
    },

    async importArea(companyId, gameId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${URLS.IMPORT}`,
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

    async importAreaCourse(companyId, gameId, areaId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${URLS.IMPORT}`,
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

    async importAreaCourseStage(companyId, gameId, areaId, courseId, request) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${URLS.IMPORT}`,
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

    async importAreaCourseStageProblem(
      companyId,
      gameId,
      areaId,
      courseId,
      stageId,
      request
    ) {
      await API.requestServer
        .post(
          `${companyId}/${URLS.GAME}/${gameId}/${URLS.AREA}/${areaId}/${URLS.COURSE}/${courseId}/${URLS.STAGE}/${stageId}/${URLS.PROBLEM}/${URLS.IMPORT}`,
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
