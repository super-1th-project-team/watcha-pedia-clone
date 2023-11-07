import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import ContentsSwiper from './ContentsSwiper';



const ContentsGallery = () => {
	return (
		<ContentsSection>
			<SectionTitleH3>갤러리</SectionTitleH3>
			<ContentsSwiper />
		</ContentsSection>
	);
};

export default ContentsGallery;
