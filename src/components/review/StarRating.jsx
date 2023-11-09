import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StarInput from './StarInput';

const StarRating = () => {
	const [rating, setRating] = useState(0);

	const clickRatingHandling = (value) => {
		if (rating === value) {
			setRating(0);
		} else {
			setRating(value);
		}
	};

	return (
		<Base>
			<RatingField>
				{[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5].map((value, index) => (
					<StarInput
						key={index}
						onClickRating={() => clickRatingHandling(value)}
						value={value}
						isHalf={index % 2 === 1}
						isChecked={value === rating}
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

const RatingValue = styled.span`
	font-size: 1.2rem;
	line-height: 100%;
`;

const RatingField = styled.fieldset`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	border: none;
	transform: translateY(2px);

	input:checked ~ label,
	labeL:hover,
	labeL:hover ~ label {
		transition: 0.2s;
		color: var(--color-light-red);
	}
`;
