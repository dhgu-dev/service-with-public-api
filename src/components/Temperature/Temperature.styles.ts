import styled from 'styled-components';

export const TemperatureLayout = styled.div`
	position: relative;
	width: fit-content;

	span {
		line-height: 1;
		font-size: 10vw;
		font-family: var(--secondary-kr);
		color: var(--white);
		text-shadow: -5px 3px 1.5px rgb(0 0 0 / 10%);
	}

	svg {
		position: absolute;
		color: var(--white);
		right: -32px;
		width: 32px;
		height: 32px;
		filter: drop-shadow(-5px 3px 1.5px rgb(0 0 0 / 10%));
	}
`;
