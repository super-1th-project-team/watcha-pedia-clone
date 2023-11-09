import React, { useContext } from 'react';
import * as style from './ImgModal.style';
import ModalContext from '../../../../../../context/ModalContext';

const ImgModal = () => {
	const context = useContext(ModalContext);
	return (
		<style.ModalOverlay onClick={context.closeModal}>
			<style.ModalContentDiv onClick={(e) => e.stopPropagation() }>
				<style.ModalImg src={context.imgUrl} alt="" />
			</style.ModalContentDiv>
		</style.ModalOverlay>
	);
};

export default ImgModal;
