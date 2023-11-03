import { useSelector } from 'react-redux';

const Movies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie);

	return (
		<ul>
			{nowPlayingMovieData.map((movie, index) => (
				<li key={index}>
					<img
						style={{ width: '300px', height: '500px' }}
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt=""
					/>
					<div>{movie.title}</div>
				</li>
			))}
		</ul>
	);
};

export default Movies;
