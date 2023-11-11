import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../../../../context/ModalContext';
import { ModalOverlay } from '../ContentsModals.style';
import * as style from './CommentsModal.style';
import { IoIosClose } from 'react-icons/io';
import { BsTwitter } from 'react-icons/bs';
import { BiSolidHide } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { SET_COMMENT } from '../../../../slice/userSlice';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';



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
				<form action="" onSubmit={commentSubmitHandler}>
					<style.CommentModalTitle>
						{detailData.title || detailData.name}
					</style.CommentModalTitle>
					<style.CommentInput
						type="text"
						placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
						maxLength={10000}
						onChange={valueChangeHandler}
					/>
					<style.CommentFooterDiv>
						<style.CommentFooterLeftDiv>
							<BsTwitter className="icons bar" />
							<BiSolidHide className="icons" />
						</style.CommentFooterLeftDiv>
						<style.CommentFooterRightDiv>
							<p>0/10000</p>
							<style.CommentSubmitBtn type="submit">
								저장
							</style.CommentSubmitBtn>
						</style.CommentFooterRightDiv>
					</style.CommentFooterDiv>
				</form>
				<IoIosClose className="close-btn" onClick={context.closeModal} />
			</style.CommentModalDiv>
		</ModalOverlay>
	);
};

export default CommentModal;
