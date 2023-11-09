import React from 'react';
import { styled } from 'styled-components';
import { BiSolidDownArrow } from 'react-icons/bi';

const ReviewFilter = () => {
	return (
		<FilterContainer>
			<FilterBTN>
				<BiSolidDownArrow size={40} color="var(--color-light-gray)" />
				랜덤 영화
			</FilterBTN>
		</FilterContainer>
	);
};

export default ReviewFilter;

const FilterContainer = styled.div`
	background: var(--color-bg-light-gray);
	padding: 16px 20px;
`;

const FilterBTN = styled.button`
	border: none;
	background: none;
	font-size: inherit;
	display: flex;
	align-items: center;
	gap: 10px;
`;
