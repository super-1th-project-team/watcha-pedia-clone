import React, { useContext } from 'react';
import ContentsGallery from './ContentsImgs/ContentsGallery';
import SimilarContents from './SimilarContents/SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';
import ContentsComments from './ContentsComments/ContentsComments';
import ContentsVideo from './ContentsImgs/ContentsVideo';
import ModalContext from '../../../context/ModalContext';
import ContentsModals from '../ContentsModals/ContentsModals';
import { useSelector } from 'react-redux';

const ContentsInfo = () => {
	const videoDatas = useSelector((state) => state.movie.videos);
	const reviews = useSelector(state => state.movie.reviews)
	const context = useContext(ModalContext);
	return (
			<>
				{context.isModalOpen && <ContentsModals/>}
					<ContentsInfoBox />
					{reviews.length > 1? <ContentsComments /> : null}
					<ContentsGallery />
					{videoDatas.length > 1  ? <ContentsVideo /> : null}
					{/* <ContentsCollections /> */}
					<SimilarContents />
			</>
	);
};

export default ContentsInfo;
