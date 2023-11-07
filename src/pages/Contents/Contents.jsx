import { useParams } from 'react-router-dom';
import ContentsBanner from '../../components/contents/ContentsBanner/ContentsBanner';
import ContentsInfo from '../../components/contents/ContentsInfo/ContentsInfo';

const Contents = () => {
	const { id } = useParams();

	return (
		<div>
			{id}
			<ContentsBanner />
			<ContentsInfo />
		</div>
	);
};

export default Contents;
