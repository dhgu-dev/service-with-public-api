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

	public getRecommends(address: string): string[] {
		if (address === '') return [];

		const result = LatGrid.data
			.reduce((acc: string[], info) => {
				const pattern = address.replaceAll(/\s/g, '');
				const regex = new RegExp(pattern);

				let recommendAddress = info['1단계'];
				if (info['2단계']) {
					recommendAddress = `${info['1단계']} ${info['2단계']}`;
				}

				if (info['3단계']) {
					recommendAddress = `${info['1단계']} ${info['2단계']} ${info['3단계']}`;
				}

				if (
					regex.test(recommendAddress) ||
					regex.test(recommendAddress.replaceAll(' ', ''))
				) {
					return [...acc, recommendAddress];
				}

				return acc;
			}, [])
			.slice(0, 6);

		return result;
	}

	public findCoordByAddress(address: string) {
		if (address === '') return { nx: -1, ny: -1, address: [] };

		const target = LatGrid.data.find((info) => {
			const pattern = address.replaceAll(/\s/g, '');
			const regex = new RegExp(pattern);

			let recommendAddress = info['1단계'];
			if (info['2단계']) {
				recommendAddress = `${info['1단계']} ${info['2단계']}`;
			}

			if (info['3단계']) {
				recommendAddress = `${info['1단계']} ${info['2단계']} ${info['3단계']}`;
			}

			if (
				regex.test(recommendAddress) ||
				regex.test(recommendAddress.replaceAll(' ', ''))
			) {
				return true;
			}

			return false;
		});

		if (!target) return { nx: -1, ny: -1, address: [] };

		const targetAddress = [target['1단계']];
		if (target['2단계']) targetAddress.push(target['2단계']);
		if (target['3단계']) targetAddress.push(target['3단계']);

		return {
			nx: Number(target['격자 X']),
			ny: Number(target['격자 Y']),
			address: targetAddress,
		};
	}
}

export default LatGrid;
