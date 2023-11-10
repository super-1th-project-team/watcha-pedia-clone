import { Button, ButtonWrapper, Image } from './SnsIcon.style';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { CANCEL_AUTH, LOGIN_USER } from '../../../slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SnsIcon = () => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const googleLoginHandler = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;

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
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	return (
		<ButtonWrapper>
			<Button>
				<Image src="/assets/icon-kakao.png" alt="kakao-icon" />
			</Button>
			<Button icon="google" onClick={googleLoginHandler}>
				<Image src="/assets/icon-google.svg" alt="google-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-twitter.png" alt="twitter-icon" />
			</Button>
			<Button icon="apple">
				<Image src="/assets/icon-apple.svg" alt="apple-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-line.png" alt="line-icon" />
			</Button>
		</ButtonWrapper>
	);
};

export default SnsIcon;
