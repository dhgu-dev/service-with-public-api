export const getKST = () => {
	const locale = new Date();
	const utc = locale.getTime() + locale.getTimezoneOffset() * 60 * 1000;
	const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
	return new Date(utc + KR_TIME_DIFF);
};

export const getDayOfWeek = (day: number) => {
	const week = ['일', '월', '화', '수', '목', '금', '토'];
	const dayOfWeek = week[day];
	return dayOfWeek;
};

export const getFormattedTimeString = (now: Date) => {
	const year = now.getFullYear();
	const month = ('0' + (now.getMonth() + 1)).slice(-2);
	const date = ('0' + now.getDate()).slice(-2);
	const hours = ('0' + now.getHours()).slice(-2);
	const minutes = ('0' + now.getMinutes()).slice(-2);
	const day = getDayOfWeek(now.getDay());

	return {
		year,
		month,
		date,
		hours,
		minutes,
		day,
	};
};

export const getBaseTime = () => {
	const kst = getKST();
	let { hours, year, month, date } = getFormattedTimeString(kst);
	const candidate = ['02', '05', '08', '11', '14', '17', '20', '23'];
	const targetIdx = candidate.findIndex((time) => Number(hours) < Number(time));
	let recent = '';
	if (targetIdx === 0) {
		recent = '23';
		date = getFormattedTimeString(
			new Date(kst.setDate(kst.getDate() - 1)),
		).date;
	} else if (hours === '23') recent = '23';
	else recent = candidate[targetIdx - 1];

	return { time: `${recent}00`, date: `${year}${month}${date}` };
};
