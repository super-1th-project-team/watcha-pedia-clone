import { useEffect, useState } from 'react';
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
	Paragraph,
} from './Auth.style';
import AuthButton from '../AuthButton/AuthButton';
import SnsIcon from '../SnsIcon/SnsIcon';
import {
	CANCEL_AUTH,
	TOGGLE_LOGIN_POPUP,
	TOGGLE_REGISTER_POPUP,
	CHECK_LOGIN_ERROR,
	UPDATE_INPUT_VALUE,
	LOGIN_USER,
} from '../../../slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);
	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const isLogInPopUp = useSelector((state) => state.user.isLogInPopUp);

	const navigate = useNavigate();

	const auth = getAuth();

	const AuthToggleHandler = () => {
		dispatch(TOGGLE_REGISTER_POPUP());
		if (isLogInPopUp) dispatch(TOGGLE_LOGIN_POPUP());
	};

	const authHandler = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
			.then((userCredential) => {
				const user = userCredential.user;

				dispatch(
					LOGIN_USER({
						isLoggedIn: true,
						id: user.uid,
						name: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
					}),
				);

				localStorage.setItem(
					'user',
					JSON.stringify({
						isLoggedIn: true,
						id: user.uid,
						name: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
					}),
				);

				dispatch(CANCEL_AUTH({ isLogInPopUp: false, isRegisterPopUp: false }));
				navigate('/');
			})
			.catch((error) => {
				dispatch(CHECK_LOGIN_ERROR(true));
			});
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length > 0 && /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && e.target.value.length < 6) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const loadedUser = JSON.parse(storedUser);
			dispatch(LOGIN_USER(loadedUser));
		}
	}, [dispatch]);

	const nameEmailInputIsInValid = !emailIsValid && textIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && textIsTouched;

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
						isValid={nameEmailInputIsInValid}
					/>
					{nameEmailInputIsInValid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<InputStyle
						type="password"
						placeholder="비밀번호"
						name="password"
						onChange={inputValueHandler}
						isValid={namePasswordInputIsInValid}
					/>
					{namePasswordInputIsInValid && (
						<Paragraph>비밀번호는 최소 6자리 이상이어야 합니다.</Paragraph>
					)}
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
