const COLLECTION_FIREBASE = {
	COMPANY: "Company_Collection",
	USERS: "users",
};

const COURCE_HEADER = [
	"【コース】名 [20]",
	"コース順番",
	"【コース】非公開/公開/期間公開（1/2/3)",
	"【コース】公開日",
	"【コース】公開時間	",
	"【コース】公開終了日",
	"【コース】公開終了時間",
	"【コース】開放条件(常に解放：0/前のステージ全クリア：1)",
	"【コース】公開URL(0/1)",
];
const STAGE_HEADER = [
	"【ステージ】開放条件（常に解放：0/前のステージ全クリア：1)",
	"ステージ順番",
	"【ステージ】非公開/公開/期間公開（1/2/3)",
	"【ステージ】公開日",
	"【ステージ】公開時間",
	"【ステージ】公開終了日	",
	"【ステージ】公開終了時間",
	"【ステージ】公開URL（無効：0/有効：1）",
];
const CONSTANTS = {
	TOKEN: "token",
	AUTH_STORAGE: "auth_storage",
	REFRESH_TOKEN: "refreshToken",
	COMPANY_ID: "company_id",
	VERIFY_AT: "verify_at",
	EMAIL :  "email" ,
	SECRETKEY : "6w9z$C&F)J@McQfT",
	MOON: [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"10",
		"11",
		"12",
	],

	ROLES: [
		{ text: "一般", value: 0 },
		{ text: "ゲーム管理者", value: 1 },
		{ text: "管理者", value: 2 },
		{ text: "オーナー", value: 3 },
	],

	TYPE_ROLE: {
		GENERAL: 0,
		GAME_ADMIN: 1,
		ADMIN: 2,
		OWNER: 3,
	},

	AVATAR_TYPE: {
		FRAME: 0,
		CHARACTER: 1,
		BACKGROUND: 2,
	},

	PLAN_TYPE: {
		FREE_TRIAL: 1,
		STANDARD: 2,
		STANDARD_1: 2,
		STANDARD_2: 3,
		BUSINESS: 4,
	},

	CATEGORY_GAME: [
		{ text: "PoiPoi", value: 1 },
		{ text: "どんめも", value: 2 },
		{ text: "カートでGO!", value: 3 },
		{ text: "ブランドぴったん", value: 4 },
		{ text: "クエストクラフト", value: 5 },
	],

	GAME: {
		POIPOI: "poiPoi",
		DONMEMO: "donmemo",
		CARTDE_GO: "cartdego",
		BRAND_PITTAN: "brandpittan",
		DORAKUE: "dorakue",
	},

	GAME_DORAKUE_EXPORT_HEADER: [
		"エリア名[20]",
		"エリア順番",
		"公開設定(0/1)",
		"公開期間開始日",
		"公開期間開始時間",
		"公開期間終了日",
		"公開期間終了時間",
		"コース名 [20]",
		"コース順番",
		"公開設定(0/1)",
		"公開期間開始日",
		"公開期間開始時間",
		"公開期間終了日",
		"公開期間終了時間",
		"コースの開放条件(0/1)",
		"公開URL(0/1)",
		"ステージ名[20]",
		"ステージ順番",
		"ステージの開放条件(0/1)",
		"公開設定(0/1)",
		"公開期間開始日",
		"公開期間開始時間",
		"公開期間終了日",
		"公開期間終了時間",
		"公開URL（0/1）",
		"問題/タイトル[20]",
		"問題順番",
		"問題/公開設定(0/1)",
		"問題/公開期間開始日",
		"問題/公開期間開始時間",
		"問題/公開期間終了日",
		"問題/公開期間終了時間",
		"問題/問題文[50]",
		"問題/選択肢1[20]",
		"問題/解説見出し1[20]",
		"問題/解説文1[50]",
		"問題/正解不正解1(0/1)",
		"問題/選択肢2[20]",
		"問題/解説見出し2[20]",
		"問題/解説文2[50]",
		"問題/正解不正解2(0/1)",
		"問題/選択肢3[20]",
		"問題/解説見出し3[20]",
		"問題/解説文3[50]",
		"問題/正解不正解3(0/1)",
		"コース公開URL",
		"ステージ公開URL",
	],

	GAME_CARTDE_GO_HEADER: [
		"コース名 [20]",
		"コース順番",
		"公開設定(0/1)",
		"公開期間開始日",
		"公開期間開始時間",
		"公開期間終了日",
		"公開期間終了時間",
		"コースの開放条件(0/1)",
		"公開URL(0/1)",
		"ステージ名[20]",
		"ステージの開放条件(0/1)",
		"ステージ順番",
		"公開設定(0/1)",
		"公開期間開始日",
		"公開期間開始時間",
		"公開期間終了日",
		"公開期間終了時間",
		"公開URL（0/1）",
		"問題/公開設定(0/1)",
		"問題/公開期間開始日",
		"問題/公開期間開始時間",
		"問題/公開期間終了日",
		"問題/公開期間終了時間",
		"問題/問題文[20]",
		"問題/解説見出し1[20]",
		"問題/解説文1[50]",
		"問題/正解不正解1(0/1)",
		"問題/解説見出し2[20]",
		"問題/解説文2[50]",
		"問題/正解不正解2(0/1)",
		"コース公開URL",
		"ステージ公開URL",
	],
	GAME_POIPOI_HEADER: [
		...COURCE_HEADER,
		...STAGE_HEADER,
		"【問題】問題文[50]",
	],
	GAME_DOMEMO_HEADER: [
		...COURCE_HEADER,
		"ステージ名[20]",
		...STAGE_HEADER,
		"【問題】問題文[40]",
		"【問題】解説見出し[20]",
		"【問題】解説文[100]",
	],
	GAME_BRAND_PITTAN_HEADER: [
		...COURCE_HEADER,
		...STAGE_HEADER,
		"問題（0：画像/1：テキスト）",
		"【問題】問題文[26]",
		"リール一No.",
	
	],
	END_URL_HEADER : [
		"コース公開URL",
		"ステージ公開URL",
	],
	CATEGORY_GAME_VALUE: {
		POIPOI: 1,
		DONMEMO: 2,
		CARTDE_GO: 3,
		BRAND_PITTAN: 4,
		DORAKUE: 5,
	},

	PERIOD_STATUS: {
		PRIVATE: 1,
		PUBLIC: 2,
		PUBLICATION_TIME: 3,
	},

	PAYMENT_METHOD: {
		MONTHLY: 0,
		ANNUAL: 1,
		NO_CHARGE: 2,
	},

	OPTIONNAL_PACK: [
		{
			type: 1,
			data_capacity: "10GB",
			monthly_data_transfer_volume: "30GB",
			price: "オプションなし",
			amount: null,
		},
		{
			type: 2,
			data_capacity: "50GB",
			monthly_data_transfer_volume: "150GB",
			price: "10,000円 / 月",
			amount: "10,000",
		},
		{
			type: 3,
			data_capacity: "150GB",
			monthly_data_transfer_volume: "600GB",
			price: "40,000円 / 月",
			amount: "40,000",
		},
		{
			type: 4,
			data_capacity: "2TB",
			monthly_data_transfer_volume: "6TB",
			price: "120,000円 / 月",
			amount: "120,000",
		},
	],

	OPTIONNAL_PLAN: [
		{
			type: 2,
			price: "150,000円 / 月",
		},
		{
			type: 3,
			price: "1,200,000円 / 年",
		},
	],

	DELETE_TYPE: {
		SUSPENSION: 0,
		DELETE: 1,
	},

	DESTINATION_TYPE: {
		ALL_USERS: 0,
		ALL_ORG_ADMINS: 1,
	},

	LOGIN_RATE_TYPE: {
		WEEK: 0,
		MONTH: 1,
	},

	EXPIRE_DATE_STATUS: {
		EXPIRED: 0,
		NEAR_EXPIRED: 1,
		AVAILABLE: 2,
	},

	SITUATION_TYPE: {
		DRAFT: 1,
		PUBLIC_RESERVATION: 2,
		PUBLISH_NOW: 3,
		PRIVATE: 4,
		NOW_OPEN: 5,
	},

	DELIVERY_TYPE: {
		TEXT: 0,
		EXTERNAL_LINK: 1,
		INTERNAL_LINK_GAME: 2,
		INTERNAL_LINK_COURSE: 3,
		INTERNAL_LINK_STAGE: 4,
		INTERNAL_LINK_AREA: 5,
	},

	NOTIFICATION_TYPE: {
		DRAFT: 0,
		RESERVATION: 1,
		SEND_NOW: 2,
	},

	COPY_TYPE: {
		CLONE: 0,
		CLONE_TO: 1,
	},

	FOLDER_TEMPLATE: {
		AVATAR: "avatars",
		BACKGROUND: "backgrounds",
	},
};

const REGEX = {
	PASSWORD: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&#~.+_-]{8,}$/,
	PASSWORD_NO_NUMBER: /^(?=.*[A-Z])[a-zA-Z\d@$!%*?&#~.+_-]{8,}$/,
	PASSWORD_UPPERCASE:
		/^(?=.*[A-Z])[A-Za-z\d[\]@$!%*?&~#`^()-=+_.,/<>';:"{}\\|]{8,}$/,
	PASSWORD_NUMBER_AND_CHAR: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
	ID: /^[a-z]{3,}$/,
	USER_ID: /^[a-z\d]+$/,
	IP_ADDRESS: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/,
	HALF_WIDTH_NUMBER: /^[0-9]+$/,
	EMAIL:
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const COURSE = [
	{
		id: "1",
		name: "course1",
		quantity: 6,
		error: "ステージ数は最大6個です。",
	},
	{
		id: "2",
		name: "course2",
		quantity: 6,
		error: "ステージ数は最大6個です。",
	},
	{
		id: "3",
		name: "course3",
		quantity: 4,
		error: "ステージ数は最大4個です。",
	},
	{
		id: "4",
		name: "course4",
		quantity: 5,
		error: "ステージ数は最大5個です。",
	},
	{
		id: "5",
		name: "course5",
		quantity: 7,
		error: "ステージ数は最大7個です。",
	},
	{
		id: "6",
		name: "course6",
		quantity: 4,
		error: "ステージ数は最大4個です。",
	},
	{
		id: "7",
		name: "course7",
		quantity: 6,
		error: "ステージ数は最大6個です。",
	},
	{
		id: "8",
		name: "course8",
		quantity: 8,
		error: "ステージ数は最大8個です。",
	},
	{
		id: "9",
		name: "course9",
		quantity: 4,
		error: "ステージ数は最大4個です。",
	},
	{
		id: "10",
		name: "course10",
		quantity: 1,
		error: "ステージ数は最大1個です。",
	},
];

export { COLLECTION_FIREBASE, CONSTANTS, REGEX, COURSE };
