import React from 'react';
import {
	ContentLeft,
	ContentLeftDiv,
	ContentRight,
	FooterFooter,
	FooterRating,
	RatingCount,
	FooterContent,
} from './Footer.style';

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
