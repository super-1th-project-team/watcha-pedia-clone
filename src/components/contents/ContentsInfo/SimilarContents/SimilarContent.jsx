import React from 'react';
import * as style from './SimilarContents.style'
import { IoStarSharp } from 'react-icons/io5';

const SimilarContent = ({data}) => {
	return (
		<style.SimilarLi>
			<style.SimilarImgPaddingDiv>
				<style.SimilarImgDiv>
				<style.SimilarImg
					src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
					alt="포스터"
				/>
				</style.SimilarImgDiv>
			</style.SimilarImgPaddingDiv>
			<div>
				<style.SimilarTitle>
          {data.title}
        </style.SimilarTitle>
				<style.SimilarRating>
					평균{' '}
					<span>
						<IoStarSharp className='star-icon'/>{' '}
						{(data.vote_average / 2).toFixed(1)}
					</span>
				</style.SimilarRating>
				<style.SimilarGenre>영화{data.genres}</style.SimilarGenre>
			</div>
		</style.SimilarLi>
	);
};

export default SimilarContent;
