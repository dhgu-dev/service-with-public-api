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

	public findCoordByAddress(address: string) {
		const target = LatGrid.data.find((info) => {
			const pattern = address.replaceAll(/\s/g, '');
			const regex = new RegExp(pattern);
			if (regex.test(info['1단계'])) {
				return true;
			}

			if (info['2단계'] && regex.test(info['2단계'])) {
				return true;
			}

			if (info['3단계'] && regex.test(info['3단계'])) {
				return true;
			}

			return false;
		});

		if (!target) return { nx: 60, ny: 127 };

		return { nx: Number(target['격자 X']), ny: Number(target['격자 Y']) };
	}
}

export default LatGrid;
