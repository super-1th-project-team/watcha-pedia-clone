import ReviewFilter from '../ReviewFilter';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { styled } from 'styled-components';

const ReviewMovies = () => {
	return (
		<ReviewWrapper>
			<ReviewHeader />
			<ReviewList />
		</ReviewWrapper>
	);
};

export default ReviewMovies;

const ReviewWrapper = styled.div`
	margin: 30px auto;
	width: 640px;
	border: 1px solid var(--color-light-gray);
	border-radius: 5px;
	overflow: hidden;
`;
