import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Container, Image } from './AuthContainer.style';
import BackDrop from '../BackDrop/BackDrop';

const AuthContainer = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const isRegistered = useSelector((state) => state.user.isRegistered);

	return (
		<>
			{(isLoggedIn || isRegistered) &&
				createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
			<Container>
				<Image src="/assets/WATCHA_PEDIA_Logo_Main.png" alt="" />
				{isLoggedIn && <Login />}
				{isRegistered && <Register />}
			</Container>
		</>
	);
};

export default AuthContainer;
