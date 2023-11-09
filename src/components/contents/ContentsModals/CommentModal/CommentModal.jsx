import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../../../../context/ModalContext';
import { ModalOverlay } from '../ContentsModals.style';
import * as style from './CommentsModal.style';
import { useDispatch, useSelector } from 'react-redux';
import { SET_COMMENT } from '../../../../slice/userSlice';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const CommentModal = () => {
	const context = useContext(ModalContext);
	const [textAreaValue, setTextAreaValue] = useState('');
	const [userMovieInfoDataUpdated, setUserMovieInfoDataUpdated] =
		useState(false);
	const [userTVInfoDataUpdated, setUserTVInfoDataUpdated] = useState(false);

	const dispatch = useDispatch();

	const isCheckTVPage = useSelector((state) => state.tvSeasons.isTVPage);
	const { id } = useParams();
	const movieId = !isCheckTVPage && id;
	const tvShowsId = isCheckTVPage && id;

	const userId = useSelector((state) => state.user.id);
	const movieDetailData = useSelector((state) => state.movie.movieDetail);
	const tvDetailData = useSelector((state) => state.tvSeasons.tvDetail);
	const detailData = isCheckTVPage === true ? tvDetailData : movieDetailData;

	const userMovieInfoData = useSelector((state) => state.user.userData.movies);
	const userTVInfoData = useSelector((state) => state.user.userData.tvShows);

	const valueChangeHandler = (e) => {
		setTextAreaValue(e.target.value);
	};

	const commentSubmitHandler = (e) => {
		e.preventDefault();

		dispatch(
			SET_COMMENT({
				id: isCheckTVPage ? tvShowsId : movieId,
				isTVPage: isCheckTVPage,
				comment: textAreaValue,
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
		if (userMovieInfoDataUpdated || userTVInfoDataUpdated) {
			writeUserData();

			setUserMovieInfoDataUpdated(false);
			setUserTVInfoDataUpdated(false);
		}
	}, [userMovieInfoDataUpdated, userTVInfoDataUpdated]);

	return (
		<ModalOverlay onClick={context.closeModal}>
			<style.CommentModalDiv onClick={(e) => e.stopPropagation()}>
				<form action="">
					<p>{detailData.title}</p>
					<style.CommentTextArea
						type="text"
						placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
						onChange={valueChangeHandler}
					/>
					<button onClick={commentSubmitHandler}>저장</button>
				</form>
				<style.CommentCloseBtn onClick={context.closeModal}>
					닫기
				</style.CommentCloseBtn>
			</style.CommentModalDiv>
		</ModalOverlay>
	);
};

export default CommentModal;
