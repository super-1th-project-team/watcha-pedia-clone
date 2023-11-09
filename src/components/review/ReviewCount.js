import React from 'react';
import { useSelector } from 'react-redux';

const ReviewCount = () => {
	let count = useSelector((state) => state.count);
	return (
		<div className="ReviewCount">
			<h1>{(count, 0)}</h1>
		</div>
	);
};

export default ReviewCount;
