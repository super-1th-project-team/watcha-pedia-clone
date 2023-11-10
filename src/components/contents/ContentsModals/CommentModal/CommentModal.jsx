import React, { useContext } from 'react';
import ModalContext from '../../../../context/ModalContext';
import { ModalOverlay } from '../ContentsModals.style';
import * as style from './CommentsModal.style';
import { IoIosClose } from 'react-icons/io';
import { BsTwitter } from 'react-icons/bs';
import { BiSolidHide } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const CommentModal = () => {
	const movieDetailData = useSelector((state) => state.movie.movieDetail);
	const tvDetailData = useSelector((state) => state.tvSeasons.tvDetail);

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);

	const detailData = isCheckTVPage === true ? tvDetailData : movieDetailData;
	const context = useContext(ModalContext);
	return (
		<ModalOverlay onClick={context.closeModal}>
			<style.CommentModalDiv onClick={(e) => e.stopPropagation()}>
				<form action="">
					<style.CommentModalTitle>
						{detailData.title || detailData.name}
					</style.CommentModalTitle>
					<style.CommentInput
						type="text"
						placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
						maxLength={10000}
					/>
					<style.CommentFooterDiv>
						<style.CommentFooterLeftDiv>
							<BsTwitter className="icons bar" />
							<BiSolidHide className="icons" />
						</style.CommentFooterLeftDiv>
						<style.CommentFooterRightDiv>
							<p>0/10000</p>
							<style.CommentSubmitBtn onClick={(e) => e.preventDefault()}>
								저장
							</style.CommentSubmitBtn>
						</style.CommentFooterRightDiv>
					</style.CommentFooterDiv>
				</form>
				<IoIosClose className="close-btn" onClick={context.closeModal} />
			</style.CommentModalDiv>
		</ModalOverlay>
	);
};

export default CommentModal;
