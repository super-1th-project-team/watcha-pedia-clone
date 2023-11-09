import { useEffect, useState } from 'react';
import * as style from './ContentsComments.style';
import { FaThumbsUp } from 'react-icons/fa6';
import { BsFillChatFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import movieAxios from '../../../../api/axios';
import tvAxios from '../../../../api/axios';
import { SET_COMMENT_MOVIE_DETAILS } from '../../../../slice/movieSlice';

const UserCommentBox = ({ contentType }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0);

	const { photoURL, name } = useSelector((state) => state.user);

	const userMovieInfoData = useSelector((state) => state.user.userData.movies);
	const userTVInfoData = useSelector((state) => state.user.userData.tvShows);

	console.log(userMovieInfoData);

	const likeBtnHandler = () => {
		setIsClicked(!isClicked);
		if (!isClicked) {
			setCount(count + 1);
		} else {
			setCount(count - 1);
		}
	};

	const movieCommentsArray = userMovieInfoData
		.filter((movie) => movie.comment && movie.comment.text.trim() !== '')
		.map((movie) => ({
			id: movie.movieId,
			text: movie.comment.text,
		}));

	const tvCommentsArray = userTVInfoData
		.filter((tv) => tv.comment && tv.comment.text.trim() !== '')
		.map((tv) => ({
			id: tv.tvShowsId,
			text: tv.comment.text,
		}));

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchDetails = async () => {
			const movieDetailsPromises = userMovieInfoData
				.filter((movie) => movie.movieId)
				.map(async (movie) => {
					const response = await movieAxios.get(`/movie/${movie.movieId}`);
					return response.data;
				});

			console.log('movieDetailsPromises', movieDetailsPromises);

			const tvDetailsPromises = userTVInfoData
				.filter((tv) => tv.tvShowsId)
				.map((tv) => tvAxios.get(`/tv/${String(tv.tvShowsId)}`));

			try {
				const movieDetails = await Promise.all(movieDetailsPromises);
				const tvDetails = await Promise.all(tvDetailsPromises);
				dispatch(SET_COMMENT_MOVIE_DETAILS(movieDetails));
			} catch (error) {
				console.error('Error fetching details:', error);
			}
		};

		fetchDetails();
	}, [userMovieInfoData, userTVInfoData, dispatch]);

	const movieCommentDetail = useSelector(
		(state) => state.movie.commentMovieDetail,
	);

	console.log('movieCommentDetail', movieCommentDetail);

	return (
		<style.CommentSection>
			<style.CommentBoxUl>
				{(contentType === 'movies' || contentType === ''
					? movieCommentsArray
					: contentType === 'tv_seasons'
					? tvCommentsArray
					: []
				).map((content) => {
					const detail = movieCommentDetail.find(
						(detail) => detail.id === content.id,
					);
					console.log('detail', detail);
					return (
						<style.CommentBoxLi key={content.id}>
							<style.CommentHeaderDiv>
								<style.UserDiv>
									<style.UserImgDiv>
										<style.UserImg
											src={
												photoURL === null ? '/assets/icon-user.png' : photoURL
											}
										/>
										<div>{name}</div>
									</style.UserImgDiv>
									<p style={{ marginLeft: '8px' }}>{}</p>
								</style.UserDiv>
							</style.CommentHeaderDiv>
							<style.UserCommentDiv>
								{/* <img
									src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
									alt={detail.title}
								/> */}
								<div>
									<div>제목</div>
									{/* <div>{detail.title}</div> */}
									<div>
										{contentType === 'movies'
											? '영화'
											: contentType === 'tv_seasons'
											? 'TV 프로그램'
											: '책'}
										, 2023
									</div>
									<style.UserCommentP>{content.text}</style.UserCommentP>
								</div>
							</style.UserCommentDiv>
							<style.UserCommentResUl>
								<li>
									<FaThumbsUp className="res-btns" />
									{count}
								</li>
								<li style={{ marginLeft: '13px' }}>
									<BsFillChatFill className="res-btns" />
									54
								</li>
							</style.UserCommentResUl>
							<style.LikeBtnDiv>
								<style.LikeBtn
									onClick={likeBtnHandler}
									color={isClicked ? '#fff' : 'rgb(255,47,110)'}
									bgcolor={isClicked ? 'rgb(255,47,110)' : 'none'}>
									좋아요
								</style.LikeBtn>
							</style.LikeBtnDiv>
						</style.CommentBoxLi>
					);
				})}
			</style.CommentBoxUl>
		</style.CommentSection>
	);
};

export default UserCommentBox;
