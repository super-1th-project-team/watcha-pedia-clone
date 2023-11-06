import React, { useState } from 'react';
import StarRating from './StarRating';
import { styled } from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const ReviewItem = () => {
	const movie = useSelector((state) => state.movie);

	return (
		<>
			{movie.map((movie, index) => (
				<RItem className="ReviewItem" key={index}>
					<div>
						<img
							style={{ width: '75px', height: 'auto' }}
							src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
							alt={movie.title}
						/>
						<div>
							<p>{movie.title}</p>
							<p>・</p>
							<StarRating />
						</div>
					</div>

					<AiOutlineMore />
				</RItem>
			))}
		</>
	);
};

export default ReviewItem;

const RItem = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid var(--color-bg-light-gray);
	padding: 20px 0;
`;
