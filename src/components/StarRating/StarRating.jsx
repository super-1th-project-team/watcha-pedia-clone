import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StarInput from '../StarRating/StarInput';
import PropTypes from 'prop-types';

const StarRating = ({ value, onRatingChange }) => {
	const clickRatingHandler = (value) => {
		onRatingChange(value);
	};

	return (
		<Base>
			<RatingField>
				{[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map((ratingValue, index) => (
					<StarInput
						key={index}
						onClickRating={() => clickRatingHandler(ratingValue)}
						value={ratingValue}
						isHalf={index % 2 === 1}
						isChecked={value === ratingValue}
					/>
				))}
			</RatingField>
		</Base>
	);
};

export default StarRating;

const Base = styled.section`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const RatingField = styled.fieldset`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	border: none;

	input:checked ~ label,
	labeL:hover,
	labeL:hover ~ label {
		transition: 0.2s;
		color: var(--color-light-red);
	}
`;

StarRating.propTypes = {
	value: PropTypes.number.isRequired,
	onRatingChange: PropTypes.func.isRequired,
};
