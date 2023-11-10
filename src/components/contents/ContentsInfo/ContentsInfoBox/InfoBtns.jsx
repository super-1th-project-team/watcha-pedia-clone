import React, { useContext, useState } from 'react';
import * as style from './ContentsInfoBox.style';
import { BiPlus } from 'react-icons/bi';
import { RiPencilFill } from 'react-icons/ri';
import { BsEyeFill, BsBookmarkPlusFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdNotInterested } from 'react-icons/md';
import { PiArchiveBoxFill } from 'react-icons/pi';
import { LuCalendarPlus } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_AUTH_POPUP, SET_BUTTON_TYPE } from '../../../../slice/userSlice';
import ModalContext from '../../../../context/ModalContext';

const InfoBtns = ({
	wantBtnHandler,
	watchingBtnHandler,
	wantIsClicked,
	watchingIsClicked,
}) => {
	const [moreIsClicked, setMoreIsClicked] = useState(false);
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const context = useContext(ModalContext);

	const dispatch = useDispatch();

	const wantClickHandler = () => {
		wantBtnHandler(!wantIsClicked);
		if (watchingIsClicked) {
			watchingBtnHandler(false);
		}
	};

	const commentPopUpHandler = () => {
		context.openModal();
	};

	const watchingClickHandler = () => {
		watchingBtnHandler(!watchingIsClicked);
		if (wantIsClicked) {
			wantBtnHandler(false);
		}
	};

	const moreClickHandler = () => {
		setMoreIsClicked(!moreIsClicked);
	};

	const checkAuthHandler = () => {
		if (!isLoggedIn) {
			dispatch(CHECK_AUTH_POPUP(true));
		} else {
			dispatch(CHECK_AUTH_POPUP(false));
		}
	};

	const clickButtonHandler = (type) => {
		dispatch(SET_BUTTON_TYPE(type));
		checkAuthHandler();
	};

	return (
		<>
			<style.BtnContainer>
				<style.Btn
					onClick={
						isLoggedIn ? wantClickHandler : () => clickButtonHandler('wishes')
					}>
					{wantIsClicked ? (
						<BsBookmarkPlusFill className="ico active rotate" />
					) : (
						<BiPlus className="ico cancel-rotate" />
					)}
					<style.GrayText>보고싶어요</style.GrayText>
				</style.Btn>
				<style.Btn
					onClick={
						isLoggedIn
							? commentPopUpHandler
							: () => clickButtonHandler('comment')
					}>
					<RiPencilFill className="ico" />
					<style.GrayText>코멘트</style.GrayText>
				</style.Btn>
				<style.Btn
					onClick={
						isLoggedIn
							? watchingClickHandler
							: () => clickButtonHandler('watching')
					}>
					<BsEyeFill className={watchingIsClicked ? 'ico active' : 'ico'} />
					<style.GrayText>보는 중</style.GrayText>
				</style.Btn>
				<style.Btn style={{ position: 'relative' }} onClick={moreClickHandler}>
					<FiMoreHorizontal className="ico" />
					<style.GrayText>더보기</style.GrayText>
					{moreIsClicked && (
						<style.moreDiv>
							<style.moreBtn>
								<MdNotInterested className="more-btns" />
								관심없어요
							</style.moreBtn>
							{isLoggedIn && (
								<div>
									<style.moreBtn margin="3px 0">
										<PiArchiveBoxFill className="more-btns" />
										컬렉션에 추가
									</style.moreBtn>
									<style.moreBtn>
										<LuCalendarPlus className="more-btns" />본 날짜에 추가
									</style.moreBtn>
								</div>
							)}
						</style.moreDiv>
					)}
				</style.Btn>
			</style.BtnContainer>
		</>
	);
};

export default InfoBtns;
