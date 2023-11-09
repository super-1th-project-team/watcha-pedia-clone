import React from 'react';
import ReviewItem from './ReviewItem';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const ReviewList = ({ data, type }) => {
	return (
		<RItemList className="ReviewList">
			<ReviewItem data={data} type={type} />
		</RItemList>
	);
};

export default ReviewList;

const RItemList = styled.div`
	border: 1px solid var(--color-bg-light-gray);
	padding: 20px;
`;

ReviewList.propTypes = {
	data: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
