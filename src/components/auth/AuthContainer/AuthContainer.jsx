import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Container, Image } from './AuthContainer.style';
import BackDrop from '../BackDrop/BackDrop';
import AuthErrorModal from '../AuthErrorModal/AuthErrorModal';

const AuthContainer = () => {
	const isLogInPopUp = useSelector((state) => state.user.isLogInPopUp);
	const isRegisterPopUp = useSelector((state) => state.user.isRegisterPopUp);
	const isLoginError = useSelector((state) => state.user.isLoginError);

	return (
		<>
			{(isLogInPopUp || isRegisterPopUp) &&
				createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
			<Container isLoginError={isLoginError}>
				<Image src="/assets/WATCHA_PEDIA_Logo_Main.png" alt="" />
				{isLogInPopUp && <Login />}
				{isRegisterPopUp && <Register />}
				{isLoginError && <AuthErrorModal />}
			</Container>
		</>
	);
};

export default AuthContainer;
