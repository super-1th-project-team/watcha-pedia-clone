import React, { useContext } from 'react';
import ContentsGallery from './ContentsImgs/ContentsGallery';
import ContentsCollections from './ContentsCollections/ContentsCollections';
import SimilarContents from './SimilarContents/SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';
import ContentsComments from './ContentsComments/ContentsComments';
import ContentsVideo from './ContentsImgs/ContentsVideo';
import ModalContext from '../../../context/ModalContext';
import ContentsModals from '../ContentsModals/ContentsModals';

const ContentsInfo = () => {
	const context = useContext(ModalContext);
	return (
			<>
				{context.isModalOpen && <ContentsModals/>}
					<ContentsInfoBox />
					<ContentsComments />
					<ContentsGallery />
					<ContentsVideo />
					{/* <ContentsCollections /> */}
					<SimilarContents />
			</>
	);
};

export default ContentsInfo;
