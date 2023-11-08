import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { styled } from 'styled-components';
import { AiOutlineMore } from 'react-icons/ai';
import PropTypes from 'prop-types';
import MoreReviewModal from '../Modal/MoreReviewModal';

const ReviewItem = ({ data, type }) => {
	const [isOpenedModal, setIsOpenedModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState({});
	const [clickedINGItemId, setClickedINGItemId] = useState();
	const [textContent, setTextContent] = useState('');

	const openModal = (item, type) => {
		setSelectedItem(item, type);
		setClickedINGItemId(item.id);
		setIsOpenedModal(true);
		document.body.style.overflow = 'hidden';
	};
	const closeModal = () => {
		setIsOpenedModal(false);
		document.body.style.overflow = 'unset';
	};

	const clickedINGItem = data.find(({ id }) => id === clickedINGItemId);

	const clickINGHandler = (itemId) => {
		setClickedINGItemId(itemId);
		setTextContent('보는 중');
	};

	return (
		<>
			{data.map((item, id) => (
				<RItem className="ReviewItem" key={id}>
					<div>
						<img
							style={{ width: '90px', height: 'auto' }}
							src={
								type === 'books'
									? `${item.cover}`
									: `https://image.tmdb.org/t/p/original/${item.poster_path}`
							}
							alt={item.title}
						/>
						<TextContainer>
							<p onClick={() => clickINGHandler(item)}>
								<span>{type === 'tvSeasons' ? item.name : item.title}</span>
								{textContent ||
									(type === 'movie'
										? item.release_date
										: type === 'tvSeasons'
										? item.first_air_date
										: item.author
									).split('-')[0]}
							</p>
							<StarRating />
						</TextContainer>
					</div>
					<IconMoreBTN onClick={() => openModal(item, type, item.id)}>
						<AiOutlineMore size={22} />
					</IconMoreBTN>
					<MoreReviewModal
						isOpened={isOpenedModal}
						closeModal={closeModal}
						selectedItem={selectedItem}
						type={type}
						updateTextContent={clickINGHandler}
						clickedINGItem={clickedINGItem}
					/>
				</RItem>
			))}
		</>
	);
};

export default ReviewItem;

ReviewItem.propTypes = {
	data: PropTypes.object,
	type: PropTypes.string.isRequired,
};

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
	color: var(--color-light-gray);
	padding-top: 5px;
	& span {
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 10px;
		display: block;
		color: var(--color-light-black);
	}
`;

const IconMoreBTN = styled.div`
	cursor: pointer;
	height: fit-content;
`;
