import { useSelector } from 'react-redux';
import { BooksBody, BooksContent } from './Books.style';
import MainSwiper from '../../swiper/MainSwiper/MainSwiper';
import { useNavigate, useParams } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';

const Books = () => {
	const newBooksData = useSelector((state) => state.books.newBooks);
	const bestSellerBooksData = useSelector((state) => state.books.bestSeller);
	const foreignBestSellerBooksData = useSelector(
		(state) => state.books.foreignBestSeller,
	);

	const usedBooksData = useSelector((state) => state.books.usedBooks);

	const navigate = useNavigate();

	const moveToContentsPage = (id) => {
		navigate(`/contents/${id}`);
	};

	return (
		<BooksBody>
			<BooksContent>
				<MainSwiper
					dataTitle="신간 리스트"
					fetchData={newBooksData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="베스트 셀러"
					fetchData={bestSellerBooksData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="외국 베스트 셀러"
					fetchData={foreignBestSellerBooksData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="중고 도서"
					fetchData={usedBooksData}
					movePageFunc={moveToContentsPage}
				/>
			</BooksContent>
		</BooksBody>
	);
};

export default Books;
