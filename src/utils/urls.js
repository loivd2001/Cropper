export const URLS = {
  BASE_URL_SERVER: `${process.env.VUE_APP_BASE_API}`,
  LOGIN: "auth/login",
  ACTIVE_LOGIN: "auth/active-login",
  TOW_FACTOR_VERY: "auth/two-factor-verification",
  LOGOUT: "auth/logout",
  AUTH_ME: "auth/me",
  FORGOT_PASS: "auth/forgot-password",
  RESET_PASS: "auth/reset-password",
  SEND_MAIL_SIGNUP: "auth/invite-create-account",
  GENERATE_NEW_TOKEN: "auth/generate-new-token",
  CREATE_ACCOUNT: "auth/create-account",
  EDIT_USER: "user/edit",
  USER: "user",
  ONWER: "owner",
  INITIAL_SETTING: "auth/initial-setting",
  UPDATE_ACCOUNT: "auth/update-account",
  IP_RESTRICTIONS_GET_ALL: "ip-restrictions/get-all",
  IP_RESTRICTIONS_CREATE: "ip-restrictions/create",
  IP_RESTRICTIONS_EDIT: "ip-restrictions/edit/",
  IP_RESTRICTIONS: "ip-restrictions",
  IP_RESTRICTIONS_IMPORT: "ip-restrictions/import",
  LOGIN_RATE: "login-rate",
  LOGIN_RATE_LAST: "login-rate/last-date",
  GAME: "game",
  GAME_NPC_AUTOCOMPLETE: "game/npc-autocomplete",
  CLONE: "clone",
  GAME_TREEVIEW: "treeview",
  NOTIFICATION: "notification",
  COMPANY: "company",
  COMPANY_UPLOAD_LOGO: "company/upload-logo",
  TOTAL_USED_CAPACITY: "total-used-capacity",
  AVATAR: "avatar",
  IMPORT: "import",
  UPDATE_CARD: "stripe/card/edit",
  PAYMENT: "payment",
  PUBLIC_URL: "public-url",
  COURSE: "course",
  COURSE_ORDER: "course-order",
  STAGE: "stage",
  CREATE_CARTDE_GO: "create/cartdego",
  EDIT_CARTDE_GO: "edit/cartdego",
  BRANDPITTAN: "brandpittan",
  DONMEMO: "donmemo",
  PROBLEM: "problem",
  AREA: "area",
  ORDER: "order",
  withdrawal_application: "withdrawal-application",
  NPC: {
    LIST_ACCOUNT: 'npc/list-account',
    ACCOUNT_DETAIL: 'npc/account-detail',
    CREATE_ACCOUNT: 'npc/create-account',
    UPDATE_ACCOUNT: 'npc/update-account',
    DELETE_ACCOUNT: 'npc/delete-account',
    PAYMENT_HISTORY: 'npc/payment-history',

    LIST_LOGIN_RATE: 'npc/list-login-rate',

    LIST_NOTIFICATION: 'npc/list-notification',
    NOTIFICATION_DETAIL: 'npc/notification-detail',
    CREATE_NOTIFICATION: 'npc/create-notification',
    UPDATE_NOTIFICATION: 'npc/update-notification',
    DELETE_NOTIFICATION: 'npc/delete-notification',

    LIST_ADMIN: 'npc/list-admin',
    ADMIN_DETAIL: 'npc/admin-detail',
    CREATE_ADMIN: 'npc/create-admin',
    UPDATE_ADMIN: 'npc/update-admin',
    DELETE_ADMIN: 'npc/delete-admin',
    ADMIN_AUTOCOMPLETE: 'npc/admin-autocomplete',
  },
  ANNOUNCEMENT: "announcement",
  TEMPLATE_IMAGE: "list-template-image",
  SCORE_HISTORY: "score-history"
};
