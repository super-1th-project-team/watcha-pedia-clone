import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BooksBody, BooksContent, BooksTitle } from './Books.style';

const Books = () => {
	const newBooksData = useSelector((state) => state.books);

	return (
		<BooksBody>
			<BooksContent>
				<Swiper
					loop={false}
					spaceBetween={0}
					slidesPerView={5}
					slidesPerGroup={5}
					grabCursor={true}
					allowTouchMove={false}
					cssMode={true}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper">
					{newBooksData.map((book, index) => (
						<SwiperSlide key={index}>
							<BooksTitle>{index + 1}</BooksTitle>
							<img
								style={{
									width: '200px',
									height: '300px',
									borderRadius: '8px',
								}}
								src={book.cover}
								alt=""
							/>
							<BooksTitle>{book.title}</BooksTitle>
						</SwiperSlide>
					))}
				</Swiper>
			</BooksContent>
		</BooksBody>
	);
};

export default Books;
