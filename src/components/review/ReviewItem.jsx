import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { styled } from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';
import PropTypes from 'prop-types';
import MoreReviewModal from '../Modal/MoreReviewModal';

const ReviewItem = ({ data, type }) => {
	const [rating, setRating] = useState(0);
	const [isOpenedModal, setIsOpenedModal] = useState(false);
	const openModal = () => {
		setIsOpenedModal(true);
	};
	const closeModal = () => {
		setIsOpenedModal(false);
	};

	const changeRatingHandler = (newRating) => {
		setRating(newRating);
	};

	return (
		<>
			{data.map((item, id) => (
				<RItem className="ReviewItem" key={id}>
					<div>
						<img
							style={{ width: '75px', height: 'auto' }}
							src={
								type === 'books'
									? `${item.cover}`
									: `https://image.tmdb.org/t/p/original/${item.poster_path}`
							}
							alt={item.title}
						/>
						<TextContainer>
							<p>
								{type === 'tv_seasons' ? item.name : item.title}
								<br />
								{type === 'movie'
									? item.release_date
										? item.release_date.split('-')[0]
										: ''
									: type === 'tv_seasons'
									? item.first_air_date
										? item.first_air_date.split('-')[0]
										: ''
									: item.pubDate
									? item.pubDate.split('-')[0]
									: ''}
							</p>
							<StarRating value={rating} onRatingChange={changeRatingHandler} />
						</TextContainer>
					</div>
					<IconMoreBTN onClick={openModal}>
						<AiOutlineMore size={22} />
					</IconMoreBTN>
					<MoreReviewModal isOpened={isOpenedModal} closeModal={closeModal} />
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

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const IconMoreBTN = styled.div`
	cursor: pointer;
	height: fit-content;
`;

ReviewItem.propTypes = {
	data: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
