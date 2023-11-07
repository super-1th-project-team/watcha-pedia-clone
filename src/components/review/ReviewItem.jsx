import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';
import { styled } from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const ReviewItem = () => {
	const movie = useSelector((state) => state.movie);
	const tv = useSelector((state) => state.tv);
	const book = useSelector((state) => state.book);

	return (
		<>
			{movie.map((item, index) => (
				<RItem className="ReviewItem" key={index}>
					<div>
						<img
							style={{ width: '75px', height: 'auto' }}
							src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
							alt={item.title}
						/>
						<MovieText>
							<p>
								{item.title}
								<br />
								{item.release_date ? item.release_date.split('-')[0] : ''}
							</p>
							<StarRating />
						</MovieText>
					</div>
					<IconMoreBTN>
						<AiOutlineMore size={22} />
					</IconMoreBTN>
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
	& > div {
		display: flex;
		gap: 20px;
	}
`;

const MovieText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const IconMoreBTN = styled.div`
	cursor: pointer;
	height: fit-content;
`;
