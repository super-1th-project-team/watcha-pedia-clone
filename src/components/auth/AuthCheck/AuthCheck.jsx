import { useDispatch, useSelector } from 'react-redux';
import {
	Container,
	IconWrap,
	ButtonWrap,
	RegisterButton,
	LoginButton,
	Paragraph,
	StyledIoMdThumbsUp,
	StyledBsBookmark,
	StyledFaComment,
} from './AuthCheck.style';
import {
	CHECK_AUTH_POPUP,
	TOGGLE_LOGIN_POPUP,
	TOGGLE_REGISTER_POPUP,
} from '../../../slice/userSlice';

const AuthCheck = () => {
	const dispatch = useDispatch();
	const buttonType = useSelector((state) => state.user.buttonType);

	const LoginToggleHandler = () => {
		dispatch(TOGGLE_LOGIN_POPUP());
		dispatch(CHECK_AUTH_POPUP(false));
	};

	const RegisterToggleHandler = () => {
		dispatch(TOGGLE_REGISTER_POPUP());
		dispatch(CHECK_AUTH_POPUP(false));
	};

	return (
		<Container>
			<IconWrap>
				{buttonType === 'wishes' && <StyledBsBookmark />}
				{buttonType === 'comment' && <StyledFaComment />}
				{buttonType === 'watching' && <StyledIoMdThumbsUp />}
			</IconWrap>
			{buttonType === 'wishes' && (
				<Paragraph>
					로그인이 필요한 기능이에요. 지금 회원가입
					<br />
					혹은 로그인하고 공통의 취향을 나눠보세요
				</Paragraph>
			)}
			{buttonType === 'comment' && (
				<Paragraph>
					지금 회원가입 혹은 로그인하시고, 경험한
					<br />
					감동을 기록해보세요.
				</Paragraph>
			)}
			{buttonType === 'watching' && (
				<Paragraph>
					내 보관함에 작품을 담으려면 로그인이 필요해요. 회원가입 혹은
					로그인해주세요.
				</Paragraph>
			)}

			<ButtonWrap>
				<RegisterButton onClick={RegisterToggleHandler}>
					회원가입
				</RegisterButton>
				<LoginButton onClick={LoginToggleHandler}>로그인</LoginButton>
			</ButtonWrap>
		</Container>
	);
};

export default AuthCheck;
