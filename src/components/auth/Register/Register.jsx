import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import {
	Form,
	Title,
	Wrapper,
	InputStyle,
	TextWrapper,
	Text,
	Button,
	Paragraph,
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
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);

	const dispatch = useDispatch();
	const isRegisterPopUp = useSelector((state) => state.user.isRegisterPopUp);

	const [inputValue, setInputValue] = useState({
		name: null,
		email: '',
		password: '',
	});

	const auth = getAuth();

	const AuthToggleHandler = () => {
		if (isRegisterPopUp) dispatch(TOGGLE_REGISTER_POPUP());
		dispatch(TOGGLE_LOGIN_POPUP());
	};

	const authHandler = (e) => {
		e.preventDefault();

		if (inputValue.name) {
			createUserWithEmailAndPassword(
				auth,
				inputValue.email,
				inputValue.password,
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: inputValue.name,
					}).then(() => {
						console.log(user);

						AuthToggleHandler();
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}
	};

	const isPasswordValid = (password) => {
		if (password.length < 6) {
			return false;
		}

		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasDigit = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(password);

		const conditionsMet =
			[hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar].filter(Boolean)
				.length >= 2;

		return conditionsMet;
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length === 0 || /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && !isPasswordValid(e.target.value)) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	const nameEmailInputIsInValid = !emailIsValid && textIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && textIsTouched;

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
						<Paragraph>
							비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 6자리
							이상이여야 합니다.
						</Paragraph>
					)}
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
