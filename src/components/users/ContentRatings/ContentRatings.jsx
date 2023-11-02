import { useParams } from 'react-router-dom';
import MovieRatings from './MovieRatings';
import TVRatings from './TVRatings';
import BooksRatings from './BooksRatings';

const ContentRatings = () => {
	const { contentType } = useParams();

	if (contentType === 'movies') return <MovieRatings />;
	else if (contentType === 'tv_seasons') return <TVRatings />;
	else if (contentType === 'books') return <BooksRatings />;

	return <div>ContentRatings</div>;
};

export default ContentRatings;
