import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_LOGIN_USER, TOGGLE_REGISTER_USER } from '../../slice/userSlice';

const Nav = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const isRegistered = useSelector((state) => state.user.isRegistered);
	const dispatch = useDispatch();

	const loginHandler = () => {
		if (isRegistered) dispatch(TOGGLE_REGISTER_USER());
		dispatch(TOGGLE_LOGIN_USER());
	};

	const signUpHandler = () => {
		dispatch(TOGGLE_REGISTER_USER());
		if (isLoggedIn) dispatch(TOGGLE_LOGIN_USER());
	};
	return (
		<section style={{ display: 'flex', justifyContent: 'space-between' }}>
			<div>Nav</div>
			<div style={{ display: 'flex' }}>
				<button onClick={loginHandler}>로그인</button>
				<button onClick={signUpHandler}>회원가입</button>
			</div>
		</section>
	);
};

export default Nav;
