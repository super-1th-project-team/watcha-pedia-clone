import { useLocation } from 'react-router-dom';
import ReviewMovies from '../../components/review/ReviewMovies/ReviewMovies';
import ReviewTVSeasons from '../../components/review/ReviewTVSeasons/ReviewTVSeasons';
import ReviewBooks from '../../components/review/ReviewBooks/ReviewBooks';

const Review = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const content_type = query.get('content_type');

	if (content_type === 'movies') return <ReviewMovies />;
	else if (content_type === 'tv_seasons') return <ReviewTVSeasons />;
	else if (content_type === 'books') return <ReviewBooks />;

	return <ReviewMovies />;
};

export default Review;
