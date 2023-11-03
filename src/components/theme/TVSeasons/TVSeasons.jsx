import { useSelector } from 'react-redux';

const TVSeasons = () => {
	const actionTvData = useSelector((state) => state.tvSeasons);

	return (
		<ul>
			{actionTvData.map((tvSeason, index) => (
				<li key={index}>
					<img
						style={{ width: '300px', height: '500px' }}
						src={`https://image.tmdb.org/t/p/original/${tvSeason.poster_path}`}
						alt=""
					/>
					<div>{tvSeason.title}</div>
				</li>
			))}
		</ul>
	);
};

export default TVSeasons;
