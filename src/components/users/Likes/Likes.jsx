import { useLocation, useSearchParams } from 'react-router-dom';
import LikePeople from './LikePeople';
import LikeDecks from './LikeDecks';
import LikeComments from './LikeComments';

const Likes = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const type = query.get('type');

	if (type === 'people') return <LikePeople />;
	else if (type === 'decks') return <LikeDecks />;
	else if (type === 'comments') return <LikeComments />;

	return <LikePeople />;
};

export default Likes;
