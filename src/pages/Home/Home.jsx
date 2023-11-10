import { useLocation } from 'react-router-dom';
import Movies from '../../components/theme/Movies/Movies';
import Books from '../../components/theme/Books/Books';
import TVSeasons from '../../components/theme/TVSeasons/TVSeasons';
import { useScrollToTop } from '../../hooks/useScrollToTop.js';
import { useDispatch } from 'react-redux';
import { CHECK_TV_PAGE } from '../../slice/tvSeasonsSlice';


const Home = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');

	const dispatch = useDispatch();

	useScrollToTop();

	const domainCheck = () => {
		if (domain === 'tv_seasons') {
			dispatch(CHECK_TV_PAGE(true));
		} else if (domain === 'movies' || domain === null) {
			dispatch(CHECK_TV_PAGE(false));
		}
	};

	domainCheck();

	if (domain === 'movies') return <Movies />;
	else if (domain === 'books') return <Books />;
	else if (domain === 'tv_seasons') return <TVSeasons />;

	return <Movies />;
};

export default Home;
