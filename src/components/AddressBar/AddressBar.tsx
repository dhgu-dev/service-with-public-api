import { MdOutlineLocationOn, MdSearch } from 'react-icons/md';
import { AddressBarLayout } from './AddressBar.styles';

type Props = {
	address: string[];
};

function AddressBar({ address }: Props) {
	return (
		<AddressBarLayout>
			<div>
				<MdOutlineLocationOn />
				{address.map((text, idx) => (
					<span key={idx}>{text}</span>
				))}
			</div>
			<button type="button" className="btn-search">
				<MdSearch />
			</button>
		</AddressBarLayout>
	);
}

export default AddressBar;
