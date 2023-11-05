import { getAuth, deleteUser } from 'firebase/auth';
import {
	Container,
	Title,
	Paragraph,
	ButtonWrap,
	Button,
} from './UnSubscribePopUp.style';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../../../../slice/userSlice';

const UnSubscribePopUp = ({ setIsUnSubsPopUp }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const closePopUpHandler = () => {
		setIsUnSubsPopUp(false);
	};

	const unSubscribeHandler = () => {
		const auth = getAuth();
		const user = auth.currentUser;

		deleteUser(user)
			.then(() => {
				localStorage.removeItem('user');
				dispatch(LOGOUT_USER());
				navigate('/');
			})
			.catch((error) => {});
	};

	return (
		<Container>
			<Title>알림</Title>
			<Paragraph>탈퇴하시겠습니까?</Paragraph>
			<ButtonWrap>
				<Button onClick={closePopUpHandler}>취소</Button>
				<Button onClick={unSubscribeHandler}>확인</Button>
			</ButtonWrap>
		</Container>
	);
};

UnSubscribePopUp.propTypes = {
	setIsUnSubsPopUp: PropTypes.func.isRequired,
};

export default UnSubscribePopUp;
