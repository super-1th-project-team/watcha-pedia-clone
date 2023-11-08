import React from 'react';
import * as style from './ContentsInfoBox.style';
import InfoRightBox from './InfoRightBox';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';

const ContentsInfoBox = () => {
	const movieDetailData = useSelector((state) => state.movie.movieDetail);
	const tvDetailData = useSelector((state) => state.tvSeasons.tvDetail);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	const detailData = isCheckTVPage ? tvDetailData : movieDetailData;

	return (
		<style.BgGray>
			<style.InfoBox>
				<style.InfoLeftBox>
					<style.InfoImg
						src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`}
						alt=""
					/>
					<style.GraphSection>
						<style.GrayText margin="8px">별점 그래프</style.GrayText>
						<style.Average>
							평균 <IoStarSharp />
							{(detailData.vote_average / 2).toFixed(1)}
							<style.GrayText as="span">
								{' '}
								({detailData.vote_count}명)
							</style.GrayText>
						</style.Average>
						{/* <p>그래프</p> */}
					</style.GraphSection>
				</style.InfoLeftBox>
				<InfoRightBox />
			</style.InfoBox>
		</style.BgGray>
	);
};

export default ContentsInfoBox;
