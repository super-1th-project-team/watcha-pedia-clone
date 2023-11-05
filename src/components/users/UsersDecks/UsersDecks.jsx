import { useNavigate, useParams } from 'react-router-dom';
import {
	Button,
	StyledBsArrowLeftShort,
	Title,
	UsersDecksSection,
} from './UsersDecks.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const UsersDecks = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const moveToTheUserPage = () => {
		navigate(`/users/${id}`);
	};

	useScrollToTop();

	return (
		<UsersDecksSection>
			<div>
				<Button>
					<StyledBsArrowLeftShort onClick={moveToTheUserPage} />
				</Button>
				<Title>컬렉션</Title>
			</div>
		</UsersDecksSection>
	);
};

export default UsersDecks;
