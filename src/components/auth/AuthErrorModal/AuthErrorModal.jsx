import { Wrapper, Message, Hr, CloseButton } from './AuthErrorModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_LOGIN_ERROR } from '../../../slice/userSlice';

const AuthErrorModal = () => {
	const dispatch = useDispatch();
	const inputValueEmail = useSelector((state) => state.user.inputValue.email);

	const closeErrorModalHandler = () => {
		dispatch(CHECK_LOGIN_ERROR(false));
	};

	return (
		<Wrapper>
			<Message>
				{inputValueEmail}은 가입되지 않은 <br />
				이메일입니다
			</Message>
			<Hr></Hr>
			<CloseButton onClick={closeErrorModalHandler}>닫기</CloseButton>
		</Wrapper>
	);
};

export default AuthErrorModal;
