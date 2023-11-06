import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BooksBody = styled.body`
	margin-top: 100px;
	margin-bottom: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BooksContent = styled.div`
	width: 90%;
`;

const BooksTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	width: 200px;
	height: 40px;
`;

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
