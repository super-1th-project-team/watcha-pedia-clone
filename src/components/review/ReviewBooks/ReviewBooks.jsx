import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { useSelector } from 'react-redux';
import shuffleArray from '../../../utils/shuffleArray';
import { HiddenBox, ReviewWrapper } from '../styles/ReviewPage.style';

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
			<HiddenBox />
			<ReviewHeader />
			<ReviewList data={shuffleArray(allBooksData)} type="books" />
		</ReviewWrapper>
	);
};

export default ReviewBooks;
