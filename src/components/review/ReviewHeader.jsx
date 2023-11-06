import React from 'react';
import ReviewCount from './ReviewCount';
import PhraseReview from './PhraseReview';
import ReviewNav from './ReviewNav';
import ReviewFilter from './ReviewFilter';
import { styled } from 'styled-components';

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

const RHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px 20px 0 20px;
`;
