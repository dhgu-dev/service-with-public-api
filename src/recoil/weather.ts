import { atom } from 'recoil';
import { getBaseTime } from './../utils/timeUtils';

export const baseAtom = atom({
	key: 'base',
	default: {
		baseDate: getBaseTime().date,
		baseTime: getBaseTime().time,
		nx: 60,
		ny: 127,
	},
});

export const pageNoAtom = atom({
	key: 'pageNo',
	default: 1,
});

export const loadingAtom = atom({
	key: 'loading',
	default: true,
});
