import { useState } from 'react';
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

const UsersInfo = () => {
	const [isPopup, setIsPopup] = useState(false);
	const isPopUpHandler = () => {
		setIsPopup((prev) => !prev);
	};

	return (
		<>
			<UserInfoContainer>
				<IconWrap>
					<StyledSettingsIcon onClick={isPopUpHandler} />
				</IconWrap>
				<ImgWrap>
					<img src="/assets/icon-user.png" alt="" />
				</ImgWrap>
				<UserInfoWrap>
					<NameText>이종현</NameText>
					<EmailText>dataliteracy@icloud.com</EmailText>
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
