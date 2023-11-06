import styled from 'styled-components';
import { IoSettingsSharp } from 'react-icons/io5';

export const UserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 20px 0 0;
`;

export const IconWrap = styled.div`
	width: 100%;
	text-align: right;
`;

export const StyledSettingsIcon = styled(IoSettingsSharp)`
	width: 20px;
	height: 30px;
	cursor: pointer;
`;

export const ImgWrap = styled.div`
	width: 100%;
	margin: 60px 0 0 20px;

	& img {
		border-radius: 50%;
		width: 135px;
	}
`;

export const UserInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px 0 30px 16px;
`;

export const NameText = styled.span`
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const EmailText = styled.span`
	font-size: 15px;
	color: var(--color-light-gray);
`;
