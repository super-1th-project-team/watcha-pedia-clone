import { useDispatch } from 'react-redux';
import { BackDropElem } from './BackDrop.style';
import { CANCEL_AUTH } from '../../../slice/userSlice';

const BackDrop = () => {
	const dispatch = useDispatch();

	const cancelAuthHandler = () => {
		dispatch(CANCEL_AUTH({ isLoggedIn: false, isRegistered: false }));
	};

	return <BackDropElem onClick={cancelAuthHandler} />;
};

export default BackDrop;
