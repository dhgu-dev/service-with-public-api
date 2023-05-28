import { BsArrowUpLeft } from 'react-icons/bs';
import { SearchBarLayout } from './SearchBar.styles';

function SearchBar() {
	return (
		<SearchBarLayout onSubmit={(e) => e.preventDefault()}>
			<input type="text" name="search-keyword" className="invalid" />
			<p className="hint">
				지역명을 다시 입력해 주세요. (예시: 서울특별시 종로구 사직동)
			</p>
			<ul className="auto-complete">
				<li className="auto-complete-item">
					<p>
						<b>인천</b>&nbsp;
						<span>미추홀구</span>
					</p>
					<BsArrowUpLeft />
				</li>
				<li className="auto-complete-item">
					<p>
						<b>인천</b>&nbsp;
						<span>미추홀구</span>
					</p>
					<BsArrowUpLeft />
				</li>
				<li className="auto-complete-item">
					<p>
						<b>인천</b>&nbsp;
						<span>미추홀구</span>
					</p>
					<BsArrowUpLeft />
				</li>
				<li className="auto-complete-item">
					<p>
						<b>인천</b>&nbsp;
						<span>미추홀구</span>
					</p>
					<BsArrowUpLeft />
				</li>
				<li className="auto-complete-item">
					<p>
						<b>인천</b>&nbsp;
						<span>미추홀구</span>
					</p>
					<BsArrowUpLeft />
				</li>
			</ul>
		</SearchBarLayout>
	);
}

export default SearchBar;
