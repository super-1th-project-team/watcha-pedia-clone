import React, { useState } from 'react';
import { BsEye, BsBookmark } from 'react-icons/bs';
import { FaBan, FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
	ModalContainer,
	RModal,
	RModalContentBox,
	RModalIconBox,
	RModalTitle,
} from './Modal.style';
import CommentModal from './CommentModal';

const MoreReviewModal = ({
	closeModal,
	isOpened,
	selectedItem,
	type,
	updateTextContent,
	itemId,
}) => {
	const [commentModalOpen, setCommentModalOpen] = useState(false);

<<<<<<< HEAD
=======
const MoreReviewModal = ({
	closeModal,
	isOpened,
	selectedItem,
	type,
	updateTextContent,
	clickedINGItem,
}) => {
>>>>>>> ad3b691 (모달 배경 스크롤막기)
	const clickClosingHandler = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
			setCommentModalOpen(false);
		}
	};

	const clickINGhandler = () => {
		updateTextContent(selectedItem.id);
	};

	const openCommentModal = () => {
		setCommentModalOpen(true);
	};

	const closeCommentModal = () => {
		setCommentModalOpen(false);
		closeModal();
	};
	if (!isOpened) {
		return null;
	}
<<<<<<< HEAD
=======

	const clickINGhandler = () => {
		updateTextContent(clickedINGItem);
	};

>>>>>>> ad3b691 (모달 배경 스크롤막기)
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
				<RModalContentBox onClick={openCommentModal}>
					<p>코멘트 작성하기</p>
					<FaComment size={28} color="var(--color-light-gray)" />
				</RModalContentBox>
				<RModalContentBox>
					<p>관심없어요</p>
					<FaBan size={28} color="var(--color-light-gray)" />
				</RModalContentBox>
				<div onClick={closeModal}>취소</div>
			</RModal>
			{commentModalOpen && (
				<CommentModal
					closeModal={closeCommentModal}
					selectedItem={selectedItem}
					type={type}
				/>
			)}
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
<<<<<<< HEAD
	itemId: PropTypes.number.isRequired,
=======
	clickedINGItem: PropTypes.object,
>>>>>>> ad3b691 (모달 배경 스크롤막기)
};
