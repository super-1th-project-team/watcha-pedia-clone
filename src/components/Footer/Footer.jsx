import React from 'react';
import styled from 'styled-components';

const FooterFooter = styled.footer`
	position: relative;
	width: 100%;
	height: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #1c1d1f;
	flex-direction: column;
	bottom: 0;
`;
const FooterRating = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #101113;
	color: white;
	font-size: 20px;
	font-weight: 600;
`;

const FooterContent = styled.div`
	font-size: 12px;
	font-weight: 500;
	width: 80%;
	height: 260px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #1c1d1f;
	color: #838486;
`;

const ContentRight = styled.div``;

const ContentLeft = styled.div`
	line-height: 20px;
`;
const ContentLeftDiv = styled.div`
	margin-bottom: 5px;
	font-weight: 400;
`;

const RatingCount = styled.p`
	color: #ff064a;
`;

const Footer = () => {
	return (
		<FooterFooter>
			<FooterRating>
				지금까지 <RatingCount>{` ★000 개의 평가가 `} </RatingCount> 쌓였어요.
			</FooterRating>
			<FooterContent>
				<ContentLeft>
					<ContentLeftDiv>
						서비스 이용약관 | 개인정보 처리방침 | 회사 안내
					</ContentLeftDiv>
					<ContentLeftDiv>
						<div>고객센터 | cs@watchapedia.co.kr, 02-515-9985</div>
						<div>광고 문의ad_sales@watcha.com·최신 광고 소개서</div>
						<div>제휴 및 대외 협력https://watcha.team/contact</div>
					</ContentLeftDiv>
					<ContentLeftDiv>
						<div>
							주식회사 왓챠대표 박태훈서울특별시 서초구 강남대로 343 신덕빌딩
							3층
						</div>
						<div>사업자 등록 번호 211-88-66013</div>
						<div>© 2022 by WATCHA, Inc. All rights reserved.</div>
					</ContentLeftDiv>
				</ContentLeft>
				<ContentRight></ContentRight>
			</FooterContent>
		</FooterFooter>
	);
};

export default Footer;
