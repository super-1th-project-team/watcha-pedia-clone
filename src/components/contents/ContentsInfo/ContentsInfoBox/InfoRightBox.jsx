import React, { useContext, useState } from 'react';
import InfoBtns from './InfoBtns';
import * as style from './ContentsInfoBox.style';
import { useSelector } from 'react-redux';
import ModalContext from '../../../../context/ModalContext';
import StarRating from '../../../StarRating/StarRating';

const InfoRightBox = () => {
	const context = useContext(ModalContext);
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

	const commentOpenHandler = () => {
		context.openModal();
	};

	return (
		<style.InfoRightBox>
			<style.GridSection>
				<div>
					<StarRating />
					<style.GrayText>평가하기</style.GrayText>
				</div>
				<style.ScoreDiv>
					<div>
						<style.ScoreText>3.2</style.ScoreText>
						<style.GrayText margintp="7px">예상별점</style.GrayText>
					</div>
					<div style={{ marginLeft: 55 }}>
						<style.ScoreText>
							{(detailData.vote_average / 2).toFixed(1)}
						</style.ScoreText>
						<style.GrayText margintp="7px">
							평균별점({detailData.vote_count}명)
						</style.GrayText>
					</div>
				</style.ScoreDiv>
				<InfoBtns
					wantIsClicked={wantIsClicked}
					wantBtnHandler={wantBtnHandler}
					watchingIsClicked={watchingIsClicked}
					setWatchingIsClicked={setWatchingIsClicked}
					watchingBtnHandler={watchingBtnHandler}
				/>
			</style.GridSection>
			{wantIsClicked || watchingIsClicked ? (
				<style.CommentDiv>
					<style.WriteDiv>
						<p>user 님의 생각을 글로 적어보세요.</p>
						<style.WriteBtn onClick={commentOpenHandler}>
							코멘트 남기기
						</style.WriteBtn>
					</style.WriteDiv>
				</style.CommentDiv>
			) : null}
			{/* <section>비슷한 작품</section> */}
			<style.DescSection>{detailData.overview}</style.DescSection>
		</style.InfoRightBox>
	);
};

export default InfoRightBox;
