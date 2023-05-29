import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { loadingAtom } from '../recoil/weather';

type Props = {
	children: ReactNode;
};

const LoadingLayout = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;

	.lds-facebook {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-facebook div {
		display: inline-block;
		position: absolute;
		left: 8px;
		width: 16px;
		background: #fff;
		animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	}
	.lds-facebook div:nth-child(1) {
		left: 8px;
		animation-delay: -0.24s;
	}
	.lds-facebook div:nth-child(2) {
		left: 32px;
		animation-delay: -0.12s;
	}
	.lds-facebook div:nth-child(3) {
		left: 56px;
		animation-delay: 0;
	}
	@keyframes lds-facebook {
		0% {
			top: 8px;
			height: 64px;
		}
		50%,
		100% {
			top: 24px;
			height: 32px;
		}
	}
`;

function LoadingBoundary({ children }: Props) {
	const loading = useRecoilValue(loadingAtom);

	if (loading)
		return (
			<LoadingLayout>
				<div className="lds-facebook">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</LoadingLayout>
		);

	return <>{children}</>;
}

export default LoadingBoundary;
