import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StarInput from '../StarRating/StarInput';
import PropTypes from 'prop-types';

const StarRating = ({ itemId, onRatingChange, value, selectedItem, type }) => {
	const [selectedRating, setSelectedRating] = useState(0);

	const clickRatingHandler = (value) => {
		onRatingChange(selectedItem.id);
		setSelectedRating((prev) => (prev === value ? 0 : value));
	};

	return (
		<Base>
			<RatingField>
				{[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map((value, index) => (
					<StarInput
						key={index}
						onClickRating={() => clickRatingHandler(value)}
						value={value}
						isHalf={index % 2 === 1}
						isChecked={selectedRating === value}
					/>
				))}
			</RatingField>
		</Base>
	);
};

export default StarRating;

StarRating.propTypes = {
	value: PropTypes.number.isRequired,
	onRatingChange: PropTypes.func.isRequired,
	selectedItem: PropTypes.object,
	type: PropTypes.string.isRequired,
	itemId: PropTypes.number.isRequired,
};

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
