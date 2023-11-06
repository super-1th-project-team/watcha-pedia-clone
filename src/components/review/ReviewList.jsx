import React from 'react';
import ReviewItem from './ReviewItem';
import ReviewFilter from './ReviewFilter';
import { styled } from 'styled-components';

const ReviewList = () => {
	return (
		<RItemList className="ReviewList">
			<ReviewItem />
		</RItemList>
	);
};

export default ReviewList;

const RItemList = styled.div`
	border: 1px solid var(--color-bg-light-gray);
	padding: 20px;
`;
