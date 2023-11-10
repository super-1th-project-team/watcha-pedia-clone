import { useEffect, useState } from 'react';
import Evaluation from '../Evaluation/Evaluation';
import {
	UserInfoContainer,
	IconWrap,
	StyledSettingsIcon,
	ImgWrap,
	UserInfoWrap,
	NameText,
	EmailText,
} from './UserInfo.style';
import UsersSettingPopup from '../UsersSettingPopup/UsersSettingPopup';
import BackDrop from '../../auth/BackDrop/BackDrop';

const UsersInfo = () => {
	const [isPopup, setIsPopup] = useState(false);
	const isPopUpHandler = () => {
		setIsPopup((prev) => !prev);
	};

	const storedUser = JSON.parse(localStorage.getItem('user'));

	const userPhotoURL = storedUser?.photoURL || '/assets/icon-user.png';
	const userName = storedUser?.name || '이름 없음';
	const userEmail = storedUser?.email || '이메일 없음';

	return (
		<>
			<UserInfoContainer>
				{isPopup && <BackDrop setIsPopup={setIsPopup} />}
				<IconWrap>
					<StyledSettingsIcon onClick={isPopUpHandler} />
				</IconWrap>
				<ImgWrap>
					<img src={userPhotoURL} alt="" />
				</ImgWrap>
				<UserInfoWrap>
					<NameText>{userName}</NameText>
					<EmailText>{userEmail}</EmailText>
				</UserInfoWrap>
			</UserInfoContainer>
			<Evaluation />
			{isPopup && (
				<UsersSettingPopup isPopup={isPopup} setIsPopup={setIsPopup} />
			)}
		</>
	);
};

export default UsersInfo;
