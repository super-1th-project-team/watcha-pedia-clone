import React from 'react';
import { styled } from 'styled-components';
import { BsEye, BsBookmark } from 'react-icons/bs';
import { FaBan, FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';

const MoreReviewModal = ({
	closeModal,
	isOpened,
	selectedItem,
	type,
	updateTextContent,
	itemId,
}) => {
	const clickClosingHandler = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};
	if (!isOpened) {
		return null;
	}

	const clickINGhandler = () => {
		updateTextContent(selectedItem.id);
	};

	return (
		<ModalContainer onClick={clickClosingHandler}>
			<RModal>
				<RModalTitle>
					<div>
						<img
							style={{ width: '50px', height: 'auto' }}
							src={
								type === 'books'
									? `${selectedItem.cover}`
									: `https://image.tmdb.org/t/p/original/${selectedItem.poster_path}`
							}
							alt={selectedItem.name}
						/>
					</div>
					<div>
						<h2>
							{type === 'tvSeasons' ? selectedItem.name : selectedItem.title}
						</h2>
						<p>
							{type === 'movie'
								? '영화'
								: type === 'tvSeasons'
								? 'TV 프로그램'
								: '책'}
							・
							{
								(type === 'movie'
									? selectedItem.release_date
									: type === 'tvSeasons'
									? selectedItem.first_air_date
									: selectedItem.pubDate
								).split('-')[0]
							}
						</p>
					</div>
				</RModalTitle>
				<RModalIconBox>
					<div>
						<BsBookmark size={42} color="var(--color-light-gray)" />
						<p>보고싶어요</p>
					</div>
					<div onClick={clickINGhandler}>
						<BsEye size={50} color="var(--color-light-gray)" />
						<p>보는 중</p>
					</div>
				</RModalIconBox>
				<RModalContentBox>
					<p>코멘트 작성하기</p>
					<FaComment size={28} color="var(--color-light-gray)" />
				</RModalContentBox>
				<RModalContentBox>
					<p>관심없어요</p>
					<FaBan size={28} color="var(--color-light-gray)" />
				</RModalContentBox>
				<div onClick={closeModal}>취소</div>
			</RModal>
		</ModalContainer>
	);
};

export default MoreReviewModal;

MoreReviewModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	isOpened: PropTypes.bool.isRequired,
	selectedItem: PropTypes.object,
	type: PropTypes.string.isRequired,
	updateTextContent: PropTypes.func.isRequired,
	itemId: PropTypes.number.isRequired,
};

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #1c1d2010;
`;

const RModal = styled.div`
	padding: 25px;
	width: 370px;
	height: 370px;
	border: 1px solid var(--color-bg-light-gray);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	box-sizing: border-box;
	& > div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
		color: var(--color-lignt-red);
		font-weight: 600;
		cursor: pointer;
	}
`;

const RModalTitle = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	display: flex;
	align-items: center;
	gap: 10px;
	padding-bottom: 20px;
	& h2 {
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 10px;
	}
`;

const RModalIconBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	height: 100px;
	display: flex;
	justify-content: space-evenly;
	cursor: pointer;
	& > div {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 10px 0;
	}
	& > div:first-child {
		border-right: 1px solid var(--color-bg-light-gray);
	}
`;

const RModalContentBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
