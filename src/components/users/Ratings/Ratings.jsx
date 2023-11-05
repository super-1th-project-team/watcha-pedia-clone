import { useNavigate, useParams } from 'react-router-dom';
import {
	RatingsSection,
	Button,
	TypeButton,
	Title,
	StyledBsArrowLeftShort,
	Container,
	SubTitle,
} from './Ratings.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const Ratings = () => {
	const navigate = useNavigate();
	const { id, contentType } = useParams();

	const moveToContentsRatingsPage = (type) => {
		navigate(`/users/${id}/contents/${type}/ratings`);
	};

	const backToTheUserPage = () => {
		navigate(`/users/${id}`);
	};

	useScrollToTop();

	return (
		<RatingsSection>
			<div>
				<Button>
					<StyledBsArrowLeftShort onClick={backToTheUserPage} />
				</Button>
				<Title>평가</Title>
			</div>
			<Container>
				<TypeButton onClick={() => moveToContentsRatingsPage('movies')}>
					<SubTitle>영화</SubTitle>
					<span>0</span>
				</TypeButton>
				<TypeButton onClick={() => moveToContentsRatingsPage('tv_seasons')}>
					<SubTitle>TV 프로그램</SubTitle>
					<span>0</span>
				</TypeButton>
				<TypeButton onClick={() => moveToContentsRatingsPage('books')}>
					<SubTitle>책</SubTitle>
					<span>0</span>
				</TypeButton>
			</Container>
		</RatingsSection>
	);
};

export default Ratings;
