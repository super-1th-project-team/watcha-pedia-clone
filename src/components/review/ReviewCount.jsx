import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const ReviewCount = () => {
	let count = useSelector((state) => state.count);
	return (
		<CountText className="ReviewCount">
			<h1>{(count, 0)}</h1>
		</CountText>
	);
};

export default ReviewCount;

const CountText = styled.div`
	font-size: 30px;
	font-weight: bold;
`;
