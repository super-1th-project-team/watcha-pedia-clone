import React, { useContext } from 'react';
import ModalContext from '../../../../context/ModalContext';
import { ModalOverlay } from '../ContentsModals.style';
import * as style from './CommentsModal.style';

const CommentModal = () => {
	const context = useContext(ModalContext);
	return (
		<ModalOverlay onClick={context.closeModal}>
			<style.CommentModalDiv onClick={(e) => e.stopPropagation()}>
				<form action="">
					<p>title</p>
					<style.CommentInput
						type="text"
						placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
					/>
					<button onClick={(e) => e.preventDefault()}>저장</button>
				</form>
				<style.CommentCloseBtn onClick={context.closeModal}>
					닫기
				</style.CommentCloseBtn>
			</style.CommentModalDiv>
		</ModalOverlay>
	);
};

export default CommentModal;
