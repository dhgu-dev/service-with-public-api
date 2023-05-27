import data from './lat_grid_data.json';

interface ILatGridData {
	구분: string;
	행정구역코드: string;
	'1단계': string;
	'2단계'?: string;
	'3단계'?: string;
	'격자 X': number | string;
	'격자 Y': number | string;
	'경도(시)': number | string;
	'경도(분)': number | string;
	'경도(초)': number | string;
	'위도(시)': number | string;
	'위도(분)': number | string;
	'위도(초)': number | string;
	'경도(초/100)': number | string;
	'위도(초/100)': number | string;
}

class LatGrid {
	private static data = Object.values(data)[0] as ILatGridData[];
}

export default LatGrid;
