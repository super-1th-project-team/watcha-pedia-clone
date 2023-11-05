import { useNavigate, useParams } from 'react-router-dom';
import {
	UsersStorageContainer,
	Title,
	ButtonWrap,
	Button,
	ButtonText,
	IconWrap,
	StyledHiOutlineFilm,
	StyledLuMonitorPlay,
	StyledPiBookOpenText,
} from './UserStorage.style';

const UsersStorage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const moveUserContentsBoxPage = (type) => {
		navigate(`/users/${id}/contents/${type}`);
	};

	return (
		<UsersStorageContainer>
			<Title>보관함</Title>
			<ButtonWrap>
				<Button onClick={() => moveUserContentsBoxPage('movies')}>
					<IconWrap>
						<StyledHiOutlineFilm />
					</IconWrap>
					<ButtonText>영화</ButtonText>
				</Button>
				<Button onClick={() => moveUserContentsBoxPage('tv_seasons')}>
					<IconWrap>
						<StyledLuMonitorPlay />
					</IconWrap>
					<ButtonText>TV</ButtonText>
				</Button>
				<Button onClick={() => moveUserContentsBoxPage('books')}>
					<IconWrap>
						<StyledPiBookOpenText />
					</IconWrap>
					<ButtonText>책</ButtonText>
				</Button>
			</ButtonWrap>
		</UsersStorageContainer>
	);
};

export default UsersStorage;
