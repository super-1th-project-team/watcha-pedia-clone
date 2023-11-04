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
	return (
		<UsersStorageContainer>
			<Title>보관함</Title>
			<ButtonWrap>
				<Button>
					<IconWrap>
						<StyledHiOutlineFilm />
					</IconWrap>
					<ButtonText>영화</ButtonText>
				</Button>
				<Button>
					<IconWrap>
						<StyledLuMonitorPlay />
					</IconWrap>
					<ButtonText>TV</ButtonText>
				</Button>
				<Button>
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
