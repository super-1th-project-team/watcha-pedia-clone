import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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
	CANCEL_AUTH,
	TOGGLE_LOGIN_USER,
	TOGGLE_REGISTER_USER,
	CHECK_LOGIN_ERROR,
	UPDATE_INPUT_VALUE,
} from '../../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	const navigate = useNavigate();

	const inputValue = useSelector((state) => state.user.inputValue);

	const auth = getAuth();

	const AuthToggleHandler = () => {
		dispatch(TOGGLE_REGISTER_USER());
		if (isLoggedIn) dispatch(TOGGLE_LOGIN_USER());
	};

	const authHandler = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch(CANCEL_AUTH({ isLoggedIn: false, isRegistered: false }));
				navigate('/');
			})
			.catch((error) => {
				dispatch(CHECK_LOGIN_ERROR(true));
			});
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		dispatch(UPDATE_INPUT_VALUE({ name, value }));
	};

	return (
		<>
			<Form onSubmit={authHandler}>
				<Title>로그인</Title>
				<Wrapper>
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
