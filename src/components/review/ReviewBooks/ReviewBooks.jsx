import { styled } from 'styled-components';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { useSelector } from 'react-redux';
import shuffleArray from '../../../utils/shuffleArray';

const ReviewBooks = () => {
	const newBooksData = useSelector((state) => state.books.newBooks);
	const bestSellerBooksData = useSelector((state) => state.books.bestSeller);
	const foreignBestSellerBooksData = useSelector(
		(state) => state.books.foreignBestSeller,
	);
	const usedBooksData = useSelector((state) => state.books.usedBooks);

	const allBooksData = [
		...newBooksData,
		...bestSellerBooksData,
		...foreignBestSellerBooksData,
		...usedBooksData,
	];

	return (
		<ReviewWrapper>
			<ReviewHeader />
			<ReviewList data={shuffleArray(allBooksData)} type="books" />
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
