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

		.toggle-buttons {
			position: absolute;
			top: 30px;
			right: 20px;
		}

		.address {
			position: absolute;
			right: 40px;
			top: 100px;
			width: 40%;
		}

		.categories {
			display: flex;
			width: 50%;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
`;

export const Forecasts = styled.section`
	display: flex;
	gap: 48px;
	position: absolute;
	bottom: 30px;
`;
