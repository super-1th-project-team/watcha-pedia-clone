import React, { useState } from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';
import * as style from './SimilarContents.style';
import SimilarContent from './SimilarContent';

const SimilarContents = () => {
	const [moreClicked, setMoreClicked] = useState(false);
	const [visibleContents, setVisibleContents] = useState(9);
	const similarMovieData = useSelector((state) => state.movie.similarMovies);
	const similarTVData = useSelector((state) => state.tvSeasons.tvSimilar);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	const similarData = isCheckTVPage === true ? similarTVData : similarMovieData;

	const moreBtnHandler = () => {
		setMoreClicked(true);
		setVisibleContents(visibleContents + 9);
	};

	return (
		<ContentsSection>
			<SectionTitleH3>비슷한 작품</SectionTitleH3>
			<style.SimilarUl>
				{similarData &&
					similarData
						.slice(0, visibleContents)
						.map((data, index) => <SimilarContent key={index} data={data} />)}
			</style.SimilarUl>
			{!moreClicked ? (
				<style.MoreSimilarBtn onClick={moreBtnHandler}>
					더보기 <SlArrowDown className="arr-down"/>
				</style.MoreSimilarBtn>
			) : <div style={{height:'30px'}}></div>}
		</ContentsSection>
	);
};

export default SimilarContents;
