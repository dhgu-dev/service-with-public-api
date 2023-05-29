import { styled } from 'styled-components';

export const AddressBarLayout = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		gap: 0.7em;
		align-items: center;

		svg {
			width: 35px;
			height: 35px;
			color: var(--white);
			filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));
		}

		span {
			font-family: var(--primary-kr);
			font-size: 28px;
			line-height: 1.2;
			white-space: nowrap;
			color: var(--white);
			text-shadow: -1.51px 2.26px 0.75px rgb(0 0 0 / 10%);
		}
	}

	.btn-search {
		width: 40px;
		height: 40px;
		position: relative;
		border-radius: 15px;
		background: linear-gradient(
			116deg,
			var(--hard-transparent) 0%,
			var(--light-transparent) 100%
		);
		border: 1px solid rgb(255 255 255 / 25%);
		margin-right: 1rem;

		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 26px;
			height: 26px;
			color: var(--white);
			z-index: 10;
		}
	}
`;
