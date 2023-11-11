import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Count, Text } from './Evaluation.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { UPDATE_USER_DATA } from '../../../slice/userSlice';

const Evaluation = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [totalCount, setTotalCount] = useState(0);

	const moveUserRatingsSystemPage = (type) => {
		navigate(`/users/${id}/${type}`);
	};

	const userMovieInfoData = useSelector((state) => state.user.userData.movies);
	const userTVInfoData = useSelector((state) => state.user.userData.tvShows);

	const userId = useSelector((state) => state.user.id);

	const movieCommentCount = userMovieInfoData.reduce((count, movie) => {
		if (movie.comment && movie.comment.text.trim() !== '') {
			return count + 1;
		}
		return count;
	}, 0);

	const tvCommentCount = userTVInfoData.reduce((count, tv) => {
		if (tv.comment && tv.comment.text.trim() !== '') {
			return count + 1;
		}
		return count;
	}, 0);

	useEffect(() => {
		setTotalCount(movieCommentCount + tvCommentCount);
	}, []);

	const dispatch = useDispatch();

	useEffect(() => {
		if (userId) {
			const db = getDatabase();
			const userRef = ref(db, `users/${userId}/userData`);

			onValue(userRef, (snapshot) => {
				const userData = snapshot.val();
				if (userData) {
					dispatch(UPDATE_USER_DATA(userData));
				}
			});
		}
	}, []);

	return (
		<Container>
			<Button onClick={() => moveUserRatingsSystemPage('ratings')}>
				<Count>0</Count>
				<Text>평가</Text>
			</Button>
			<Button onClick={() => moveUserRatingsSystemPage('comments')}>
				<Count>{totalCount}</Count>
				<Text>코멘트</Text>
			</Button>
			<Button onClick={() => moveUserRatingsSystemPage('decks')}>
				<Count>0</Count>
				<Text>컬렉션</Text>
			</Button>
		</Container>
	);
};

export default Evaluation;
