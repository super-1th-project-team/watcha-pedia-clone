import React from 'react';
import ReviewItem from './ReviewItem';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { RItemList } from './styles/ReviewPage.style';

const ReviewList = ({ data, type }) => {
	return (
		<RItemList className="ReviewList">
			<ReviewItem data={data} type={type} />
		</RItemList>
	);
};

export default ReviewList;

ReviewList.propTypes = {
	data: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};
