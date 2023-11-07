import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContentsBanner from '../../components/contents/ContentsBanner/ContentsBanner';
import ContentsInfo from '../../components/contents/ContentsInfo/ContentsInfo';

const Contents = () => {
	const { id } = useParams();
	const movieData = useSelector((state) => state.movie);
	console.log(movieData);

	return (
		<div>
			{id}
			<ContentsBanner />
			<ContentsInfo />
		</div>
	);
};

export default Contents;
