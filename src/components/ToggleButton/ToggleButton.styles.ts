import { styled } from 'styled-components';

interface Props {
	readonly $labelOn: string;
	readonly $labelOff: string;
}

export const ToggleButtonLayout = styled.label<Props>`
	position: relative;
	display: inline-block;
	width: 92px;
	height: 40px;
	margin: 0 20px;

	&::before {
		position: absolute;
		left: 23px;
		top: 20px;
		transform: translate(-50%, -50%);
		content: ${(props) => `"${props.$labelOff}"`};
		color: var(--white);
	}

	&::after {
		position: absolute;
		left: calc(46px + 23px);
		top: 20px;
		transform: translate(-50%, -50%);
		content: ${(props) => `"${props.$labelOn}"`};
		color: var(--white);
	}

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		inset: 0;
		cursor: pointer;
		border-radius: 20px;
		background-color: var(--light-transparent);
		transition: all 0.4s;
	}

	.slider::before {
		position: absolute;
		content: '';
		border-radius: 50%;
		width: 46px;
		height: 40px;
		inset: 0;
		background-color: var(--normal-transparent);
		transition: all 0.4s;
	}

	input:checked + .slider::before {
		transform: translateX(46px);
	}
`;
