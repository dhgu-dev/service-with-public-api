import styled from 'styled-components';

export const DateInfoLayout = styled.div`
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
`;
