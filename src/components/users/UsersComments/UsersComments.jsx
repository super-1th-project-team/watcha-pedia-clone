import { useLocation } from 'react-router-dom';

const UsersComments = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const content_type = query.get('content_type');

	return <div>{content_type}</div>;
};

export default UsersComments;
