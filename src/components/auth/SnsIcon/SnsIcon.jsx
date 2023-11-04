import { Button, ButtonWrapper, Image } from './SnsIcon.style';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { CANCEL_AUTH } from '../../../slice/userSlice';
import { useNavigate } from 'react-router-dom';

const SnsIcon = () => {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const googleLoginHandler = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;

				dispatch(CANCEL_AUTH({ isLoggedIn: false, isRegistered: false }));
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
