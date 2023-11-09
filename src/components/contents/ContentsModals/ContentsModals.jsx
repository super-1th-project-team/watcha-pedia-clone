import React, { useContext } from 'react';
import * as style from './ContentsModals.style';
import ModalContext from '../../../context/ModalContext';
import CommentModal from './CommentModal/CommentModal';

const ContentsModals = () => {
	const context = useContext(ModalContext);
	return (
		<style.ModalOverlay onClick={context.closeModal}>
			<style.ModalContentDiv onClick={(e) => e.stopPropagation() }>
				{context.imgUrl ? <style.ModalImg src={context.imgUrl} alt="" /> : <CommentModal/>}
			</style.ModalContentDiv>
		</style.ModalOverlay>
	);
};

export default ContentsModals;
