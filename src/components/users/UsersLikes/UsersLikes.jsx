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
	return (
		<UsersLikesContainer>
			<Title>좋아요</Title>
			<ButtonWrap>
				<Button>
					<div>
						<Text>좋아한 인물</Text>
						<Count>0</Count>
					</div>
					<div>
						<StyledMdKeyboardArrowRight />
					</div>
				</Button>
				<Button>
					<div>
						<Text>좋아한 컬렉션</Text>
						<Count>0</Count>
					</div>
					<div>
						<StyledMdKeyboardArrowRight />
					</div>
				</Button>
				<Button>
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
