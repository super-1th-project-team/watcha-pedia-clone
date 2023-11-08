import { useLocation } from 'react-router-dom';
import ReviewMovies from '../../components/review/ReviewMovies/ReviewMovies';
import ReviewTVSeasons from '../../components/review/ReviewTVSeasons/ReviewTVSeasons';
import ReviewBooks from '../../components/review/ReviewBooks/ReviewBooks';
import { styled } from 'styled-components';

const Review = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const content_type = query.get('content_type');

	if (content_type === 'movie') return <ReviewMovies />;
	else if (content_type === 'tv_seasons') return <ReviewTVSeasons />;
	else if (content_type === 'books') return <ReviewBooks />;

	return (
		<RWrapper>
			<ReviewMovies />
		</RWrapper>
	);
};

export default Review;

const RWrapper = styled.div`
	background: var(--color-bg-light-gray);
	width: 100%;
`;
