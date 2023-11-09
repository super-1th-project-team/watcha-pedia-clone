import React, { useContext, useEffect, useState } from 'react';
import * as style from './ContentsInfoBox.style';
import { BiPlus } from 'react-icons/bi';
import { RiPencilFill } from 'react-icons/ri';
import { BsEyeFill, BsBookmarkPlusFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdNotInterested } from 'react-icons/md';
import { PiArchiveBoxFill } from 'react-icons/pi';
import { LuCalendarPlus } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import {
	CHECK_AUTH_POPUP,
	SET_BUTTON_TYPE,
	TOGGLE_WISHES,
	TOGGLE_WATCHING,
	UPDATE_USER_DATA,
	SET_NO_INTEREST,
} from '../../../../slice/userSlice';
import ModalContext from '../../../../context/ModalContext';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const InfoBtns = ({
	wantBtnHandler,
	watchingBtnHandler,
	wantIsClicked,
	watchingIsClicked,
	setWatchingIsClicked,
}) => {
	const [moreIsClicked, setMoreIsClicked] = useState(false);
	const [userMovieInfoDataUpdated, setUserMovieInfoDataUpdated] =
		useState(false);
	const [userTVInfoDataUpdated, setUserTVInfoDataUpdated] = useState(false);

	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const isTVPage = useSelector((state) => state.tvSeasons.isTVPage);
	const context = useContext(ModalContext);
	const { id } = useParams();
	const movieId = !isTVPage && id;
	const tvShowsId = isTVPage && id;

	const userId = useSelector((state) => state.user.id);
	const userMovieInfoData = useSelector((state) => state.user.userData.movies);
	const userTVInfoData = useSelector((state) => state.user.userData.tvShows);
	console.log(userMovieInfoData);
	console.log(userTVInfoData);

	const dispatch = useDispatch();

	const wantClickHandler = () => {
		wantBtnHandler(!wantIsClicked);
		if (watchingIsClicked) {
			watchingBtnHandler(false);
		}

		dispatch(
			TOGGLE_WISHES({
				id: isTVPage ? tvShowsId : movieId,
				isTVPage: isTVPage,
			}),
		);

		writeUserData();
	};

	const writeUserData = () => {
		const db = getDatabase();
		set(ref(db, `users/${userId}/userData/`), {
			movies: userMovieInfoData,
			tvShows: userTVInfoData,
		})
			.then(() => {
				console.log('Data saved successfully.');
			})
			.catch((error) => {
				console.error('Error saving data: ', error);
			});

		setUserMovieInfoDataUpdated(true);
		setUserTVInfoDataUpdated(true);
	};

	useEffect(() => {
		if (userId) {
			const db = getDatabase();
			const userRef = ref(db, `users/${userId}/userData`);

			onValue(userRef, (snapshot) => {
				const userData = snapshot.val();
				if (userData) {
					console.log(userData);
					dispatch(UPDATE_USER_DATA(userData));
				}
			});
		}
	}, []);

	useEffect(() => {
		if (userMovieInfoDataUpdated || userTVInfoDataUpdated) {
			writeUserData();

			setUserMovieInfoDataUpdated(false);
			setUserTVInfoDataUpdated(false);
		}
	}, [userMovieInfoDataUpdated, userTVInfoDataUpdated]);

	const commentPopUpHandler = () => {
		context.openModal();
	};

	const watchingClickHandler = () => {
		watchingBtnHandler(!watchingIsClicked);
		if (wantIsClicked) {
			wantBtnHandler(false);
		}

		dispatch(
			TOGGLE_WATCHING({
				id: isTVPage ? tvShowsId : movieId,
				isTVPage: isTVPage,
			}),
		);

		writeUserData();
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

	const noInterestClickHandler = () => {
		dispatch(
			SET_NO_INTEREST({
				id: isTVPage ? tvShowsId : movieId,
				isTVPage: isTVPage,
			}),
		);

		setWatchingIsClicked(false);
		writeUserData();
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
							<style.moreBtn onClick={noInterestClickHandler}>
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
