import { useSelector } from 'react-redux';

const Books = () => {
	const newBooksData = useSelector((state) => state.books);

	return (
		<ul>
			{newBooksData.map((book, index) => (
				<li key={index}>
					<img
						style={{ width: '200px', height: '300px' }}
						src={book.cover}
						alt=""
					/>
					<div>{book.title}</div>
				</li>
			))}
		</ul>
	);
};

export default Books;
