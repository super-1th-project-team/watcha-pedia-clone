import React from 'react';
import ReviewCount from './ReviewCount';
import PhraseReview from './PhraseReview';
import ReviewNav from './ReviewNav';
import ReviewFilter from './ReviewFilter';

const ReviewHeader = () => {
	return (
		<div className="ReviewHeader">
			<ReviewCount />
			<PhraseReview />
			<ReviewNav />
			<ReviewFilter />
		</div>
	);
};

export default ReviewHeader;
