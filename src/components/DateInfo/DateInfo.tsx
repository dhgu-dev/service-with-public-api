import { useEffect, useState } from 'react';
import { getFormattedTimeString, getKST } from '../../utils/timeUtils';
import { DateInfoLayout } from './DateInfo.styles';

function DateInfo() {
	const [now, setNow] = useState(getKST());
	const { year, month, date, day, hours, minutes } =
		getFormattedTimeString(now);

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
