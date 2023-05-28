import { useEffect, useState } from 'react';
import { DateInfoLayout } from './DateInfo.styles';

function DateInfo() {
	const getKST = () => {
		const locale = new Date();
		const utc = locale.getTime() + locale.getTimezoneOffset() * 60 * 1000;
		const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
		return new Date(utc + KR_TIME_DIFF);
	};

	const getDayOfWeek = (day: number) => {
		const week = ['일', '월', '화', '수', '목', '금', '토'];
		const dayOfWeek = week[day];
		return dayOfWeek;
	};

	const [now, setNow] = useState(getKST());
	const year = now.getFullYear();
	const month = ('0' + (now.getMonth() + 1)).slice(-2);
	const date = ('0' + now.getDate()).slice(-2);
	const hours = ('0' + now.getHours()).slice(-2);
	const minutes = ('0' + now.getMinutes()).slice(-2);
	const day = getDayOfWeek(now.getDay());

	useEffect(() => {
		const tid = setTimeout(() => {
			setNow(getKST());
		}, 1000);
		return () => {
			clearTimeout(tid);
		};
	}, [now]);

	return (
		<DateInfoLayout>
			<p>
				{year}년 {month}월 {date}일
			</p>
			<div className="day-time">
				<span className="day">{day}</span>
				<span className="time">
					{hours}시 {minutes}분
				</span>
			</div>
		</DateInfoLayout>
	);
}

export default DateInfo;
