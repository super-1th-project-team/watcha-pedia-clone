import { useDispatch } from 'react-redux';
import { BackDropElem } from './BackDrop.style';
import { CANCEL_AUTH, CHECK_AUTH_POPUP } from '../../../slice/userSlice';

const BackDrop = () => {
	const dispatch = useDispatch();

	const cancelAuthHandler = () => {
		dispatch(CANCEL_AUTH({ isLoggedIn: false, isRegistered: false }));
		dispatch(CHECK_AUTH_POPUP(false));
	};

	return <BackDropElem onClick={cancelAuthHandler} />;
};

export default BackDrop;
