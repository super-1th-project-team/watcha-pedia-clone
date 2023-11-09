import React, { useContext, useEffect } from 'react';
import * as style from './ContentsBanner.style';
import { useSelector } from 'react-redux';
import ModalContext from '../../../context/ModalContext';

const ContentsBanner = () => {
	const movieDetailData = useSelector((state) => state.movie.movieDetail);
	const tvDetailData = useSelector((state) => state.tvSeasons.tvDetail);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	const detailData = isCheckTVPage === true ? tvDetailData : movieDetailData;

	return (
		<style.Banner>
			<style.BgImg
				src={`https://image.tmdb.org/t/p/original/${detailData.backdrop_path}`}
			/>
			<style.contentsInfoBox>
				<style.contentsTitle>{detailData.title || detailData.name}</style.contentsTitle>
				<style.contentsInfo mgtop='16px'>{detailData.original_title || detailData.original_name}</style.contentsInfo>
				<style.contentsInfo mgtop='8px'>
					{detailData.release_date || detailData.first_air_date} {'· '}
					{detailData.genres &&
						detailData.genres.map((genre) => (
							<style.genreText key={genre.id}>{genre.name}</style.genreText>
						))}{' '} 
					{!isCheckTVPage && `· 국가`}
				</style.contentsInfo>
				<style.contentsInfo mgtop='8px'>{isCheckTVPage ? detailData.origin_country : `${detailData.runtime}분`}</style.contentsInfo>
				<style.contentsInfo mgtop='16px'>
					인기도 : {detailData.popularity}
				</style.contentsInfo>
			</style.contentsInfoBox>
		</style.Banner>
	);
};

export default ContentsBanner;
