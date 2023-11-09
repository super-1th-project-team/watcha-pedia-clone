import React, { useContext } from 'react';
import * as style from './ContentsModals.style';
import ModalContext from '../../../context/ModalContext';
import CommentModal from './CommentModal/CommentModal';

const ContentsModals = () => {
	const context = useContext(ModalContext);

	const overlayClickHandler = () => {
		context.closeModal();
		context.setIsImg(false);
	}

	return (
		<style.ModalOverlay onClick={overlayClickHandler}>
			<style.ModalContentDiv onClick={(e) => e.stopPropagation() }>
				{context.isImg ? <style.ModalImg src={context.imgUrl} alt="" /> : <CommentModal/>}
			</style.ModalContentDiv>
		</style.ModalOverlay>
	);
};

export default ContentsModals;
