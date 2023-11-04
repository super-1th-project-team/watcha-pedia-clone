import {
	Form,
	Title,
	Wrapper,
	InputStyle,
	TextWrapper,
	Text,
	Button,
} from '../Login/Auth.style';
import AuthButton from '../AuthButton/AuthButton';
import SnsIcon from '../SnsIcon/SnsIcon';
import {
	TOGGLE_LOGIN_USER,
	TOGGLE_REGISTER_USER,
} from '../../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
	const dispatch = useDispatch();
	const isRegistered = useSelector((state) => state.user.isRegistered);

	const AuthToggleHandler = () => {
		if (isRegistered) dispatch(TOGGLE_REGISTER_USER());
		dispatch(TOGGLE_LOGIN_USER());
	};

	return (
		<>
			<Form>
				<Title>회원가입</Title>
				<Wrapper>
					<InputStyle type="text" placeholder="이름" />
					<InputStyle type="email" placeholder="이메일" />
					<InputStyle type="password" placeholder="비밀번호" />
					<AuthButton title="회원가입" />
				</Wrapper>
			</Form>
			<div>
				<Text>이미 가입하셨나요?</Text>
				<Button onClick={AuthToggleHandler}>로그인</Button>
			</div>
			<TextWrapper>
				<Text text="or">OR</Text>
			</TextWrapper>
			<SnsIcon />
		</>
	);
};

export default Register;
