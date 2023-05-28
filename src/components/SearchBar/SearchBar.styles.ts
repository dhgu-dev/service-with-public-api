import { styled } from 'styled-components';

export const SearchBarLayout = styled.form`
	width: 100%;
	position: absolute;
	top: -9px;
	left: 0;

	input[type='text'] {
		font-family: var(--primary-kr);
		width: 100%;
		padding: 14px 60px 14px 1.5rem;
		border-radius: 20px;
		box-sizing: border-box;
		outline: none;
		border: none;
		background: linear-gradient(
			116deg,
			var(--hard-transparent) 0%,
			var(--light-transparent) 100%
		);
		font-size: 26px;
		color: var(--white);
		backdrop-filter: blur(50px);

		&::placeholder {
			font-size: 14px;
			vertical-align: middle;
			line-height: 57px;
		}

		&.invalid {
			outline: #542880 solid 3px;
		}
	}

	.hint {
		margin: 1rem 0 1rem 1.5rem;
		font-family: var(--primary-kr);
		color: #542880;
	}

	.auto-complete {
		background: var(--normal-transparent);
		margin-top: 15px;
		padding: 16px;
		border-radius: 20px;
		height: fit-content;
		max-height: 200px;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			display: none;
		}

		.auto-complete-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--middle-transparent);
			border-radius: 15px;
			padding: 0 1.5rem;
			margin-bottom: 8px;
			cursor: pointer;

			&:last-child {
				margin-bottom: 0;
			}

			p {
				font-family: var(--primary-kr);
				color: var(--white);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 80%;

				b {
					color: #eff0b4;
					font-weight: bold;
				}
			}

			svg {
				margin-left: 50px;
				width: 16px;
				height: 16px;
				color: var(--white);
			}
		}
	}
`;
