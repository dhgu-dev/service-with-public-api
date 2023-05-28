import { RecoilRoot } from 'recoil';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MainPage from '../pages/main';
import './App.css';

function App() {
	return (
		<RecoilRoot>
			<div className="app">
				<MainPage />
			</div>
		</RecoilRoot>
	);
}

export default App;
