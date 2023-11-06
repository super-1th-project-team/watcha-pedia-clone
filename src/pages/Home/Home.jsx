import { useLocation } from 'react-router-dom';
import Movies from '../../components/theme/Movies/Movies';
import Books from '../../components/theme/Books/Books';
import TVSeasons from '../../components/theme/TVSeasons/TVSeasons';

const Home = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');

	if (domain === 'movies') return <Movies />;
	else if (domain === 'books') return <Books />;
	else if (domain === 'tv_seasons') return <TVSeasons />;

	return <Movies />;
};

export default Home;
