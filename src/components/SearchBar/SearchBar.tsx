import { useState } from 'react';
import { BsArrowUpLeft } from 'react-icons/bs';
import useWeather from '../../services/weather/useWeather';
import debounce from '../../utils/debounce';
import { SearchBarLayout } from './SearchBar.styles';

type Props = {
	hidden?: boolean;
	onSubmitKeyword: (address: string[]) => void;
};

function SearchBar({ hidden = true, onSubmitKeyword }: Props) {
	const [keyword, setKeyword] = useState('');
	const [valid, setValid] = useState(true);
	const { search, getRecommendKeywords } = useWeather();
	const [recommendKeywords, setRecommendKeywords] = useState<string[]>([]);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setKeyword(e.currentTarget.value);
		setValid(true);
		debounce((text: string) =>
			setRecommendKeywords(getRecommendKeywords(text)),
		)(e.currentTarget.value);
	};

	const handleRecommendClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
		const target = (e.currentTarget as HTMLLIElement).dataset.keyword || '';
		const address = search(target);
		const success = address.length > 0;

		if (success) {
			onSubmitKeyword(address);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const address = search(keyword);
		const success = address.length > 0;
		setValid(success);

		if (success) {
			onSubmitKeyword(address);
		}
	};

	return (
		<SearchBarLayout onSubmit={handleSubmit} hidden={hidden}>
			<input
				type="text"
				name="search-keyword"
				className={valid ? '' : 'invalid'}
				value={keyword}
				onChange={handleChange}
			/>
			<p className="hint" hidden={valid}>
				지역명을 다시 입력해 주세요. (예시: 서울특별시 종로구 사직동)
			</p>
			<ul className="auto-complete" hidden={recommendKeywords.length === 0}>
				{recommendKeywords.map((keyword, idx) => (
					<li
						key={idx}
						className="auto-complete-item"
						data-keyword={keyword}
						onClick={handleRecommendClick}
					>
						<p>{keyword}</p>
						<BsArrowUpLeft />
					</li>
				))}
			</ul>
		</SearchBarLayout>
	);
}

export default SearchBar;
