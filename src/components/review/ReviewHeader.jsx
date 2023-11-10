import React from 'react';
import ReviewCount from './ReviewCount';
import PhraseReview from './PhraseReview';
import ReviewNav from './ReviewNav';
import { RHeader } from './styles/ReviewPage.style';

const ReviewHeader = () => {
	return (
		<RHeader className="ReviewHeader">
			<ReviewCount />
			<PhraseReview />
			<ReviewNav />
		</RHeader>
	);
};

export default ReviewHeader;
