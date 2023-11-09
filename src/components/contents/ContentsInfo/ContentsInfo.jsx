import React, { useContext } from 'react';
import ContentsGallery from './ContentsImgs/ContentsGallery';
import ContentsCollections from './ContentsCollections/ContentsCollections';
import SimilarContents from './SimilarContents/SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';
import ContentsComments from './ContentsComments/ContentsComments';
import ContentsVideo from './ContentsImgs/ContentsVideo';
import ModalContext from '../../../context/ModalContext';
import ContentsModals from '../ContentsModals/ContentsModals';
import { useSelector } from 'react-redux';

const ContentsInfo = () => {
	const videoDatas = useSelector((state) => state.movie.videos);
	const context = useContext(ModalContext);
	return (
			<>
				{context.isModalOpen && <ContentsModals/>}
					<ContentsInfoBox />
					<ContentsComments />
					<ContentsGallery />
					{videoDatas.length > 1 ? <ContentsVideo /> : null}
					{/* <ContentsCollections /> */}
					<SimilarContents />
			</>
	);
};

export default ContentsInfo;
