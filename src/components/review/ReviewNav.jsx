import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RNav, NavLi, NavUl } from './styles/ReviewPage.style';

const ReviewNav = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedLi, setSelectedLi] = useState(null);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const contentType = searchParams.get('content_type');
		setSelectedLi(contentType);
	}, [location]);

	const clickNavHandler = (contentType) => {
		setSelectedLi(contentType);
		const url = `/review/?content_type=${contentType}`;
		navigate(url);
	};

	return (
		<RNav className="ReviewNav">
			<NavUl>
				<NavLi
					onClick={() => clickNavHandler('movie')}
					isSelected={selectedLi === 'movie'}>
					영화
				</NavLi>
				<NavLi
					onClick={() => clickNavHandler('tv_seasons')}
					isSelected={selectedLi === 'tv_seasons'}>
					TV 프로그램
				</NavLi>
				<NavLi
					onClick={() => clickNavHandler('books')}
					isSelected={selectedLi === 'books'}>
					책
				</NavLi>
			</NavUl>
		</RNav>
	);
};

export default ReviewNav;

ReviewNav.propTypes = {
	contentType: PropTypes.string.isRequired,
};
