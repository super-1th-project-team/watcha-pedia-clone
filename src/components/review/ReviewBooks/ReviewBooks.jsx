import { styled } from 'styled-components';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { useSelector } from 'react-redux';

const ReviewBooks = () => {
	const booksData = useSelector((state) => state.books);

	return (
		<ReviewWrapper>
			<ReviewHeader />
			<ReviewList data={booksData} />
		</ReviewWrapper>
	);
};

export default ReviewBooks;

const ReviewWrapper = styled.div`
	margin: 30px auto;
	width: 640px;
	border: 1px solid var(--color-light-gray);
	border-radius: 5px;
	overflow: hidden;
`;
