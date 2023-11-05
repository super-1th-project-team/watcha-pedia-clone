import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LikePeople from './LikePeople';
import LikeDecks from './LikeDecks';
import LikeComments from './LikeComments';
import {
	LikesSection,
	Button,
	Title,
	ButtonWrap,
	TypeButton,
	StyledBsArrowLeftShort,
} from './Likes.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const Likes = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const type = query.get('type');

	const navigate = useNavigate();
	const { id } = useParams();

	const backToTheUserPageHandler = () => {
		navigate(`/users/${id}`);
	};

	const moveTypeComponent = (type) => {
		navigate(`?type=${type}`);
	};

	useScrollToTop();

	return (
		<LikesSection>
			<div>
				<Button onClick={backToTheUserPageHandler}>
					<StyledBsArrowLeftShort />
				</Button>
				<Title>좋아요</Title>
			</div>
			<ButtonWrap>
				<TypeButton
					type={type === 'people'}
					onClick={() => moveTypeComponent('people')}>
					인물
				</TypeButton>
				<TypeButton
					type={type === 'decks'}
					onClick={() => moveTypeComponent('decks')}>
					컬렉션
				</TypeButton>
				<TypeButton
					type={type === 'comments'}
					onClick={() => moveTypeComponent('comments')}>
					코멘트
				</TypeButton>
			</ButtonWrap>
			{type === 'people' && <LikePeople />}
			{type === 'decks' && <LikeDecks />}
			{type === 'comments' && <LikeComments />}
		</LikesSection>
	);
};

export default Likes;
