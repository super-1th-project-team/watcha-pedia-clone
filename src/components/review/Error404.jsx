import React from 'react';
import { styled } from 'styled-components';

const Error404 = () => {
	return (
		<ErrorPage>
			<EMessageContainer>
				<img src="/asset/icon-404.svg" alt="error404" />
				<p>이 URL은 존재하지 않는 URL입니다.</p>
			</EMessageContainer>
		</ErrorPage>
	);
};

export default Error404;

const ErrorPage = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-bg-white);
`;

const EMessageContainer = styled.div`
	margin: 0 auto;
	& img {
		width: 72px;
		height: 72px;
	}
	& p {
		margin-top: 12px;
		font-size: 15px;
		font-weight: 500;
		color: #a0a0a0;
	}
`;
