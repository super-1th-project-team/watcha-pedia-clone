import React, { useState } from 'react';
import InfoBtns from './InfoBtns';
import * as style from './ContentsInfoBox.style';
import { useSelector } from 'react-redux';

const InfoRightBox = () => {
	const movieDetailData = useSelector((state) => state.movie.movieDetail);
	const tvDetailData = useSelector((state) => state.tvSeasons.tvDetail);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	const detailData = isCheckTVPage === true ? tvDetailData : movieDetailData;

	const [wantIsClicked, setWantIsClicked] = useState(false);
	const [watchingIsClicked, setWatchingIsClicked] = useState(false);

	const wantBtnHandler = (bool) => {
		setWantIsClicked(bool);
	};

	const watchingBtnHandler = (bool) => {
		setWatchingIsClicked(bool);
	};

	return (
		<style.InfoRightBox>
			<style.GridSection>
				<div>
					<div>별 아이콘</div>
					<style.GrayText>평가상태마다 코멘트</style.GrayText>
				</div>
				<style.ScoreDiv>
					<div>
						<style.ScoreText>3.2</style.ScoreText>
						<style.GrayText>예상별점</style.GrayText>
					</div>
					<div style={{ marginLeft: 55 }}>
						<style.ScoreText>{detailData.vote_average / 2}</style.ScoreText>
						<style.GrayText>평균별점({detailData.vote_count}명)</style.GrayText>
					</div>
				</style.ScoreDiv>
				<InfoBtns
					wantIsClicked={wantIsClicked}
					wantBtnHandler={wantBtnHandler}
					watchingIsClicked={watchingIsClicked}
					watchingBtnHandler={watchingBtnHandler}
				/>
			</style.GridSection>
			{wantIsClicked || watchingIsClicked ? (
				<style.CommentDiv>
					<style.WriteDiv>
						<p>user 님의 생각을 글로 적어보세요.</p>
						<button>코멘트 남기기</button>
					</style.WriteDiv>
				</style.CommentDiv>
			) : null}
			<section>비슷한 작품</section>
			<style.DescSection>{detailData.overview}</style.DescSection>
		</style.InfoRightBox>
	);
};

export default InfoRightBox;
