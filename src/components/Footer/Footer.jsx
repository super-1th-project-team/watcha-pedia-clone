import React from 'react';
import {
	ContentLeft,
	ContentLeftDiv,
	ContentRight,
	FooterFooter,
	FooterRating,
	RatingCount,
	FooterContent,
	ContentLeftDivWeak,
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
						서비스 이용약관 | 개인정보 처리방침 |{' '}
						<a
							href="https://watcha.team/"
							style={{ color: '#838486', textDecoration: 'none' }}>
							회사 안내
						</a>
					</ContentLeftDiv>
					<ContentLeftDiv>
						<div>
							고객센터 |{' '}
							<a
								href="mailto:cs@watchapedia.co.kr"
								style={{ color: '#838486', textDecoration: 'none' }}>
								cs@watchapedia.co.kr
							</a>
							,{' '}
							<a
								href="tel:02-515-9985"
								style={{ color: '#838486', textDecoration: 'none' }}>
								02-515-9985
							</a>
						</div>
						<div>
							광고 문의 |
							<a
								href="mailto:ad_sales@watcha.com"
								style={{ color: '#838486', textDecoration: 'none' }}>
								ad_sales@watcha.com
							</a>
							· 최신 광고 소개서
						</div>
						<div>
							제휴 및 대외 협력
							<a
								href="https://watcha.team/contact"
								style={{ color: '#838486', textDecoration: 'none' }}>
								https://watcha.team/contact
							</a>
						</div>
					</ContentLeftDiv>
					<ContentLeftDivWeak>
						<div>
							주식회사 왓챠대표 박태훈서울특별시 서초구 강남대로 343 신덕빌딩
							3층
						</div>
						<div>사업자 등록 번호 211-88-66013</div>
						<div>© 2022 by WATCHA, Inc. All rights reserved.</div>
					</ContentLeftDivWeak>
				</ContentLeft>
				<ContentRight></ContentRight>
			</FooterContent>
		</FooterFooter>
	);
};

export default Footer;
