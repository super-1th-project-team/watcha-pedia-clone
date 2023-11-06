import { useNavigate, useParams } from 'react-router-dom';
import {
	UsersLikesContainer,
	Title,
	ButtonWrap,
	Button,
	Text,
	Count,
	StyledMdKeyboardArrowRight,
} from './UsersLikes.style';

const UsersLikes = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const moveUserLikesPage = (type) => {
		navigate(`/users/${id}/likes?type=${type}`);
	};

	return (
		<UsersLikesContainer>
			<Title>좋아요</Title>
			<ButtonWrap>
				<Button onClick={() => moveUserLikesPage('people')}>
					<div>
						<Text>좋아한 인물</Text>
						<Count>0</Count>
					</div>
					<div>
						<StyledMdKeyboardArrowRight />
					</div>
				</Button>
				<Button onClick={() => moveUserLikesPage('decks')}>
					<div>
						<Text>좋아한 컬렉션</Text>
						<Count>0</Count>
					</div>
					<div>
						<StyledMdKeyboardArrowRight />
					</div>
				</Button>
				<Button onClick={() => moveUserLikesPage('comments')}>
					<div>
						<Text>좋아한 코멘트</Text>
						<Count>0</Count>
					</div>
					<div>
						<StyledMdKeyboardArrowRight />
					</div>
				</Button>
			</ButtonWrap>
		</UsersLikesContainer>
	);
};

export default UsersLikes;
