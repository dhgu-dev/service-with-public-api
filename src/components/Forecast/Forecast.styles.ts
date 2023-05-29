import styled from 'styled-components';

export const ForecastLayout = styled.div`
	background: rgb(255 255 255 / 20%);
	border-radius: 11px;
	width: 110px;
	height: 200px;
	border: 1px solid var(--middle-transparent);
	margin: 0 24px;

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
`;
