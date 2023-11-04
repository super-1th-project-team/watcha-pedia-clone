import {
	Form,
	Title,
	Wrapper,
	Desc,
	InputStyle,
	TextWrapper,
	Text,
	Button,
} from './Auth.style';
import AuthButton from '../AuthButton/AuthButton';
import SnsIcon from '../SnsIcon/SnsIcon';
import {
	TOGGLE_LOGIN_USER,
	TOGGLE_REGISTER_USER,
} from '../../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	const AuthToggleHandler = () => {
		dispatch(TOGGLE_REGISTER_USER());
		if (isLoggedIn) dispatch(TOGGLE_LOGIN_USER());
	};

	return (
		<>
			<Form>
				<Title>로그인</Title>
				<Wrapper>
					<InputStyle type="email" placeholder="이메일" />
					<InputStyle type="password" placeholder="비밀번호" />
					<AuthButton title="로그인" />
				</Wrapper>
			</Form>
			<div>
				<Text>계정이 없으신가요?</Text>
				<Button onClick={AuthToggleHandler}>회원가입</Button>
			</div>
			<TextWrapper>
				<Text text="or">OR</Text>
			</TextWrapper>
			<SnsIcon />
			<Desc>
				TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는
				<br /> 같은 계정을 사용해요.
			</Desc>
		</>
	);
};

export default Login;
