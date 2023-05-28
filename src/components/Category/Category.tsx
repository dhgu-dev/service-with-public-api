import { CategoryLayout } from './Category.styles';

export interface ICategory {
	icon: JSX.Element;
	name: string;
	value: string | number;
	unit?: string;
}

type Props = {
	data: ICategory;
};

function Category({ data: { icon, name, value, unit } }: Props) {
	return (
		<CategoryLayout>
			{icon}
			<span className="category-name">{name}</span>
			<span className="category-value">{value}</span>
			{unit && <span className="unit">{unit}</span>}
		</CategoryLayout>
	);
}

export default Category;
