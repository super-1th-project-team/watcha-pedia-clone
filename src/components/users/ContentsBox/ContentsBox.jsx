import { useParams } from 'react-router-dom';

const ContentsBox = () => {
	const { contentType } = useParams();

	return <div>{contentType}</div>;
};

export default ContentsBox;
