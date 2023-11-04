import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Container, Image } from './AuthContainer.style';
import BackDrop from '../BackDrop/BackDrop';
import AuthErrorModal from '../AuthErrorModal/AuthErrorModal';

const AuthContainer = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const isRegistered = useSelector((state) => state.user.isRegistered);
	const isLoginError = useSelector((state) => state.user.isLoginError);

	return (
		<>
			{(isLoggedIn || isRegistered) &&
				createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
			<Container isLoginError={isLoginError}>
				<Image src="/assets/WATCHA_PEDIA_Logo_Main.png" alt="" />
				{isLoggedIn && <Login />}
				{isRegistered && <Register />}
				{isLoginError && <AuthErrorModal />}
			</Container>
		</>
	);
};

export default AuthContainer;
