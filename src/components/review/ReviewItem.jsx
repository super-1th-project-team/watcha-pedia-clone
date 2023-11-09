import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { AiOutlineMore } from 'react-icons/ai';
import PropTypes from 'prop-types';
import MoreReviewModal from '../Modal/MoreReviewModal';
import { IconMoreBTN, RItem, TextContainer } from './styles/ReviewPage.style';

const ReviewItem = ({ data, type }) => {
	const [isOpenedModal, setIsOpenedModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState({});
	const [activeTextContent, setActiveTextContent] = useState({});
	const [starRatings, setStarRatings] = useState({});

	const openModal = (item, type) => {
		setSelectedItem(item, type);
		setIsOpenedModal(true);
		document.body.style.overflow = 'hidden';
	};
	const closeModal = () => {
		setIsOpenedModal(false);
		document.body.style.overflow = 'unset';
	};

	const clickINGHandler = (itemId) => {
		setActiveTextContent((prevTextContent) => ({
			...prevTextContent,
			[itemId]: '보는중',
		}));
	};

	const changeStarRatingHandler = (itemId, rating) => {
		setStarRatings((prevRatings) => ({
			...prevRatings,
			[itemId]: rating,
		}));
	};

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	};

	return (
		<>
			{data &&
				data.map((item, id) => (
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
								<p onClick={() => clickINGHandler(item.id)}>
									<span>
										{truncate(
											type === 'tvSeasons' ? item.name : item.title,
											21,
										)}
									</span>
									{activeTextContent[item.id] ||
										(type === 'movie'
											? item.release_date || ''
											: type === 'tvSeasons'
											? item.first_air_date || ''
											: item.author)}
								</p>
								<StarRating
									itemId={item.id}
									value={starRatings[item.id] || 0}
									onRatingChange={changeStarRatingHandler}
									selectedItem={selectedItem}
									type={type}
								/>
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
							itemId={item.id}
							updateTextContent={clickINGHandler}
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
