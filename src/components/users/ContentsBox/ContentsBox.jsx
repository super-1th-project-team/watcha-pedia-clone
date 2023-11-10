import { useNavigate, useParams } from 'react-router-dom';
import {
	ContentsBoxSection,
	Button,
	AddButton,
	Title,
	SubTitle,
	Container,
	RatingsWrap,
	WishesWrap,
	Text,
	StyledBsArrowLeftShort,
	Count,
	Wrap,
} from './ContentsBox.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { useSelector } from 'react-redux';

const ContentsBox = () => {
	const { id, contentType } = useParams();
	const navigate = useNavigate();

	const backToTheUserPageHandler = () => {
		navigate(`/users/${id}`);
	};

	const moveToContentTypeRatingsPage = () => {
		navigate(`/users/${id}/contents/${contentType}/ratings`);
	};

	useScrollToTop();

	const userMovieInfoData = useSelector((state) => state.user.userData.movies);
	const userTVInfoData = useSelector((state) => state.user.userData.tvShows);

	const movieWishesCount = userMovieInfoData.reduce((count, movie) => {
		if (movie.wishes) {
			return count + 1;
		}
		return count;
	}, 0);

	const tvWishesCount = userTVInfoData.reduce((count, tv) => {
		if (tv.wishes) {
			return count + 1;
		}
		return count;
	}, 0);

	const movieWatchingCount = userMovieInfoData.reduce((count, movie) => {
		if (movie.watching) {
			return count + 1;
		}
		return count;
	}, 0);

	const tvWatchingCount = userTVInfoData.reduce((count, tv) => {
		if (tv.watching) {
			return count + 1;
		}
		return count;
	}, 0);

	return (
		<ContentsBoxSection>
			<div>
				<Button onClick={backToTheUserPageHandler}>
					<StyledBsArrowLeftShort />
				</Button>
				<Title>
					{contentType === 'movies'
						? '영화'
						: contentType === 'tv_seasons'
						? 'TV'
						: '책'}
				</Title>
			</div>
			<Container>
				<RatingsWrap>
					<Wrap>
						<SubTitle>평가</SubTitle>
						<Count>0</Count>
					</Wrap>
					<AddButton onClick={moveToContentTypeRatingsPage}>더보기</AddButton>
				</RatingsWrap>
				<WishesWrap>
					<Text>보고싶어요</Text>
					<span>
						{contentType === 'movies' && movieWishesCount}
						{contentType === 'tv_seasons' && tvWishesCount}
						{contentType === 'books' && '0'}
					</span>
				</WishesWrap>
				<WishesWrap>
					<Text>보는 중</Text>
					<span>
						{contentType === 'movies' && movieWatchingCount}
						{contentType === 'tv_seasons' && tvWatchingCount}
						{contentType === 'books' && '0'}
					</span>
				</WishesWrap>
			</Container>
		</ContentsBoxSection>
	);
};

export default ContentsBox;
