import axios from 'axios';
import { useEffect } from 'react';

/*
http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20210628&base_time=0500&nx=55&ny=127
*/

function MainPage() {
	const apiCall = async () => {
		try {
			const response = await axios.get(
				'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
				{
					params: {
						serviceKey: process.env.REACT_APP_API_KEY,
						pageNo: 35,
						numOfRows: 12,
						dataType: 'JSON',
						base_date: '20230523',
						base_time: '0200',
						nx: 55,
						ny: 127,
					},
				},
			);
			console.log(JSON.stringify(response.data.response.body));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		apiCall();
	}, []);

	return <div>MainPage</div>;
}

export default MainPage;
