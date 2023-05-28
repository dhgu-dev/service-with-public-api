import { styled } from 'styled-components';

export const CategoryLayout = styled.div`
	width: 30%;
	position: relative;
	padding-left: 22px;
	margin-bottom: 16px;
	font-family: var(--secondary-kr);

	&:not(:nth-child(3n)) {
		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 10%;
			width: 2px;
			height: 16px;
			background-color: var(--white);
		}
	}

	svg {
		position: absolute;
		left: 0;
		top: 12%;
		width: 16px;
		height: 16px;
		color: var(--white);
		filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));
	}

	span {
		font-size: 16px;
		line-height: 22px;
		color: var(--white);
		text-shadow: -1.3px 2px 0.6px rgb(0 0 0 / 10%);

		&.category-name {
			margin-left: 8px;
			margin-right: 1rem;
		}

		&.category-value {
			margin-right: 6px;
		}
	}
`;
