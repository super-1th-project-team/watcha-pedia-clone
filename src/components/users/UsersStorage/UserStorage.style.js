import styled from 'styled-components';
import { HiOutlineFilm } from 'react-icons/hi2';
import { LuMonitorPlay } from 'react-icons/lu';
import { PiBookOpenText } from 'react-icons/pi';

export const UsersStorageContainer = styled.div`
	padding: 20px 0 0 16px;
`;

export const Title = styled.h1`
	font-size: 22px;
	font-weight: bold;
`;

export const ButtonWrap = styled.div`
	display: flex;
	width: 100%;
	margin: 12px 0 30px 0;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 33.3%;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

export const ButtonText = styled.span`
	font-size: 16px;
	font-weight: 500;
`;

export const IconWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: var(--color-bg-light-gray);
	margin-bottom: 10px;
`;

export const StyledHiOutlineFilm = styled(HiOutlineFilm)`
	width: 25px;
	height: 25px;
	color: var(--color-dark-gray);
`;

export const StyledLuMonitorPlay = styled(LuMonitorPlay)`
	width: 25px;
	height: 25px;
	color: var(--color-dark-gray);
`;

export const StyledPiBookOpenText = styled(PiBookOpenText)`
	width: 25px;
	height: 25px;
	color: var(--color-dark-gray);
`;
