import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';
import * as style from './SimilarContents.style';

const SimilarContents = () => {
	const similarMovieData = useSelector((state) => state.movie.similarMovies);
	const similarTVData = useSelector((state) => state.tvSeasons.tvSimilar);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	console.log(similarMovieData);
	console.log(similarTVData);

	const similarData = isCheckTVPage === true ? similarTVData : similarMovieData;

	return (
		<ContentsSection>
			<SectionTitleH3>비슷한 작품</SectionTitleH3>
			<style.SimilarUl>
				{similarData &&
					similarData.map((movie, index) => (
						<style.SimilarLi key={index}>
							<div>
								<style.SimilarImg
									src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
									alt="포스터"
								/>
							</div>
							<div>
								<style.SimilarTitle>{movie.title}</style.SimilarTitle>
								<style.SimilarRating>
									평균{' '}
									<span>
										<IoStarSharp />
										{movie.vote_average}
									</span>
								</style.SimilarRating>
								<style.SimilarGenre>영화(장르인듯)</style.SimilarGenre>
							</div>
						</style.SimilarLi>
					))}
			</style.SimilarUl>
			<style.MoreSimilarBtn>
				더보기 <SlArrowDown style={{ width: '12px', marginLeft: '3px' }} />
			</style.MoreSimilarBtn>
		</ContentsSection>
	);
};

export default SimilarContents;
