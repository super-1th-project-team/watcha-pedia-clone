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

const UsersInfo = () => {
	return (
		<>
			<UserInfoContainer>
				<IconWrap>
					<StyledSettingsIcon />
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
		</>
	);
};

export default UsersInfo;
