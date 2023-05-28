export type Category =
	| 'POP' // 강수확률
	| 'PTY' // 강수형태
	| 'PCP' // 1시간 강수량
	| 'REH' // 습도
	| 'SNO' // 1시간 신적설
	| 'SKY' // 하늘 상태
	| 'TMP' // 1시간 기온
	| 'UUU' // 동+서- 풍속
	| 'VVV' // 북+남- 풍속
	| 'WAV' // 파고
	| 'VEC' // 풍향
	| 'WSD'; //풍속

export const SKY_CODE = {
	1: '맑음',
	3: '구름많음',
	4: '흐림',
} as const;

export type SKYCodeKey = keyof typeof SKY_CODE;

export const PTY_CODE = {
	0: '없음',
	1: '비',
	2: '비/눈',
	3: '눈',
	4: '소나기',
} as const;

export type PTYCodeKey = keyof typeof PTY_CODE;

export interface WeatherField {
	baseDate: string;
	baseTime: string;
	category: Category;
	fcstDate: string;
	fcstTime: string;
	fcstValue: number | string;
	nx: number;
	ny: number;
}

export enum WeatherApiErrorCode {
	NORMAL_SERVICE = '00',
	APPLICATION_ERROR = '01',
	DB_ERROR = '02',
	NODATA_ERROR = '03',
	HTTP_ERROR = '04',
	SERVICETIME_OUT = '05',
	INVALID_REQUEST_PARAMETER_ERROR = '10',
	NO_MANDATORY_REQUEST_PARAMETERS_ERROR = '11',
	NO_OPENAPI_SERVICE_ERROR = '12',
	SERVICE_ACCESS_DENIED_ERROR = '20',
	TEMPORARILY_DISABLE_THE_SERVICEKEY_ERROR = '21',
	LIMITED_NUMBER_OF_SERVICE_REQUESTS_EXCEEDS_ERROR = '22',
	SERVICE_KEY_IS_NOT_REGISTERED_ERROR = '30',
	DEADLINE_HAS_EXPIRED_ERROR = '31',
	UNREGISTERED_IP_ERROR = '32',
	UNSIGNED_CALL_ERROR = '33',
	UNKNOWN_ERROR = '99',
}

export interface Forecast {
	fcstDate: string;
	fcstTime: string;
	categories: Map<Category, number | string>;
}
