import { styled } from 'styled-components';

export const MainPageLayout = styled.div`
	.inner-main {
		height: 100vh;
		position: relative;
		padding: 30px 60px;
		background: linear-gradient(
			248.66deg,
			var(--bg-color-secondary) 0%,
			var(--bg-color-primary) 100%
		);

		& > .weather {
			margin-bottom: 10px;

			svg {
				width: 12%;
				height: 7%;
			}
		}

		& > .temperature {
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
		}

		& > .date-info {
			margin-bottom: 32px;
			font-family: var(--primary-kr);

			p {
				font-size: 36px;
				color: var(--white);
				text-shadow: -1.51px 2.26px 0.75px rgb(0 0 0 / 10%);
				margin-top: 24px;
				margin-bottom: 1rem;
			}

			.day-time {
				font-size: 24px;
				color: var(--white);
				text-shadow: -1.51px 2.26px 0.75px rgb(0 0 0 / 10%);

				.time {
					position: relative;
					padding-left: 1rem;
					margin-left: 1rem;

					&::before {
						position: absolute;
						left: 0;
						top: 20%;
						content: '';
						width: 1px;
						height: 24px;
						background-color: var(--white);
					}
				}
			}
		}

		.categories {
			display: flex;
			width: 50%;
			justify-content: space-between;
			flex-wrap: wrap;

			.category {
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
			}
		}
	}

	.toggle-buttons {
		position: absolute;
		top: 30px;
		right: 20px;

		.btn-toggle {
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
				content: 'C';
				color: var(--white);
			}

			&::after {
				position: absolute;
				left: calc(46px + 23px);
				top: 20px;
				transform: translate(-50%, -50%);
				content: 'F';
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
		}

		.btn-toggle.dark-mode {
			&::before {
				content: 'L';
			}

			&::after {
				content: 'D';
			}
		}
	}

	.address {
		position: absolute;
		right: 40px;
		top: 100px;
		width: 40%;

		.address-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;

			div {
				display: flex;
				gap: 0.7em;
				align-items: center;

				/* stylelint-disable-next-line no-descending-specificity */
				svg {
					width: 35px;
					height: 35px;
					color: var(--white);
					filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));
				}

				/* stylelint-disable-next-line no-descending-specificity */
				span {
					font-family: var(--primary-kr);
					font-size: 32px;
					line-height: 1.2;
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
		}

		.search-bar {
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
		}
	}
`;

export const Forecasts = styled.section`
	display: flex;
	gap: 48px;
	position: absolute;
	bottom: 30px;

	.forecast {
		background: rgb(255 255 255 / 20%);
		border-radius: 11px;
		width: 110px;
		height: 200px;
		border: 1px solid var(--middle-transparent);

		.temperature {
			margin-top: 12px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4px;
			color: var(--white);
			filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));

			span {
				font-family: var(--secondary-kr);
				font-size: 24px;
				line-height: 30px;
			}

			svg {
				width: 24px;
				height: 24px;
			}
		}

		.weather {
			margin-top: 12px;
			text-align: center;
			color: var(--white);
			filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));

			svg {
				width: 60px;
				height: 60px;
			}
		}

		.date-info {
			text-align: center;
			color: var(--white);
			filter: drop-shadow(-1.5px 2.25px 0.75px rgb(0 0 0 / 10%));

			p {
				margin-top: 12px;
				font-family: var(--primary-kr);
			}
		}
	}
`;
