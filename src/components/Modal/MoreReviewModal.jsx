import React from 'react';
import { styled } from 'styled-components';
import { BsEye, BsBookmark } from 'react-icons/bs';
import { FaBan, FaComment } from 'react-icons/fa';
import PropTypes from 'prop-types';

const MoreReviewModal = ({ closeModal, isOpened }) => {
	const clickBackgroundHandler = (e) => {
		if (e.target === e.currentTarget) {
			// 모달 배경을 클릭했을 때만 모달을 닫음
			closeModal();
		}
	};
	if (!isOpened) {
		return null; // 모달이 닫혔을 때는 아무것도 렌더링하지 않음
	}

	return (
		<ModalContainer onClick={clickBackgroundHandler}>
			<RModal>
				<RModalTitle>
					<div>
						<img src="" alt="" />
					</div>
					<div>
						<h2>title</h2>
						<br />
						<p>theme ・ 개봉연도</p>
					</div>
				</RModalTitle>
				<RModalIconBox>
					<div>
						<BsBookmark size={42} color="var(--color-light-gray)" />
						<p>보고싶어요</p>
					</div>
					<div>
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
				<div>취소</div>
			</RModal>
		</ModalContainer>
	);
};

export default MoreReviewModal;

MoreReviewModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	isOpened: PropTypes.bool.isRequired,
};

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #43434310;
`;

const RModal = styled.div`
	padding: 25px;
	width: 370px;
	height: 370px;
	border: 1px solid var(--color-bg-light-gray);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	& > div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
		color: var(--color-light-red);
		font-weight: 600;
	}
`;

const RModalTitle = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	padding-bottom: 20px;
	display: flex;
`;

const RModalIconBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	height: 100px;
	display: flex;
	justify-content: space-between;
	& > div {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	& > div:first-child {
		border-right: 1px solid var(--color-bg-light-gray);
	}
`;

const RModalContentBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
