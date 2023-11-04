import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
	TOGGLE_LOGIN_POPUP,
	TOGGLE_REGISTER_POPUP,
} from '../../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Register = () => {
	const dispatch = useDispatch();
	const isRegistered = useSelector((state) => state.user.isRegistered);

	const [inputValue, setInputValue] = useState({
		name: '',
		email: '',
		password: '',
	});

	const auth = getAuth();

	const AuthToggleHandler = () => {
		if (isRegistered) dispatch(TOGGLE_REGISTER_POPUP());
		dispatch(TOGGLE_LOGIN_POPUP());
	};

	const authHandler = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, inputValue.email, inputValue.password)
			.then((userCredential) => {
				const user = userCredential.user;
				AuthToggleHandler();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
	};

	return (
		<>
			<Form onSubmit={authHandler}>
				<Title>회원가입</Title>
				<Wrapper>
					<InputStyle
						type="text"
						placeholder="이름"
						name="name"
						onChange={inputValueHandler}
					/>
					<InputStyle
						type="email"
						placeholder="이메일"
						name="email"
						onChange={inputValueHandler}
					/>
					<InputStyle
						type="password"
						placeholder="비밀번호"
						name="password"
						onChange={inputValueHandler}
					/>
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
