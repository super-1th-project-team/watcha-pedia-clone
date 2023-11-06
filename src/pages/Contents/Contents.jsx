import { useParams } from 'react-router-dom';

const Contents = () => {
	const { id } = useParams();

	return <div>{id}</div>;
};

export default Contents;
