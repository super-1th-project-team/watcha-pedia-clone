import { getAuth, signOut, deleteUser } from 'firebase/auth';

import PropTypes from 'prop-types';
import {
	UsersSettingPopupSection,
	StyledAiOutlineClose,
	Title,
	Wrap,
	SubTitle,
	Button,
	Container,
} from './UsersSettingPopup.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT_USER } from '../../../slice/userSlice';
import { useState } from 'react';
import UnSubscribePopUp from './UnSubscribePopUp/UnSubscribePopUp';

const UsersSettingPopup = ({ setIsPopup }) => {
	const [isUnSubsPopUp, setIsUnSubsPopUp] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const closePopUpHandler = () => {
		setIsPopup(false);
	};

	const openHelpPage = () => {
		window.open('https://help.pedia.watcha.co.kr/hc/ko', '_blank');
	};

	const openDBPage = () => {
		window.open(
			'https://docs.google.com/forms/d/e/1FAIpQLSeYvBe8eH25gqOjAmKWsnl-ow0zzF8D14-vIIxr_god6-tN9w/viewform',
			'_blank',
		);
	};

	const logoutHandler = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				localStorage.removeItem('user');
				dispatch(LOGOUT_USER());
				navigate('/');
			})
			.catch((error) => {
				const errorMessage = error.errorMessage;
			});
	};

	const openUnSubscribePopUp = () => {
		setIsUnSubsPopUp((prev) => !prev);
	};

	return (
		<UsersSettingPopupSection>
			<Container>
				<div>
					<StyledAiOutlineClose onClick={closePopUpHandler} />
				</div>
				<Title>설정</Title>
				<Wrap>
					<SubTitle>고객센터</SubTitle>
					<Button onClick={openHelpPage}>문의하기 / FAQ</Button>
					<Button onClick={openDBPage}>DB 수정/추가 요청하기</Button>
				</Wrap>
				<Wrap>
					<Button logout="logout" onClick={logoutHandler}>
						로그아웃
					</Button>
					<Button onClick={openUnSubscribePopUp}>탈퇴하기</Button>
				</Wrap>
				{isUnSubsPopUp && (
					<UnSubscribePopUp setIsUnSubsPopUp={setIsUnSubsPopUp} />
				)}
			</Container>
		</UsersSettingPopupSection>
	);
};

UsersSettingPopup.propTypes = {
	setIsPopup: PropTypes.func.isRequired,
};

export default UsersSettingPopup;
