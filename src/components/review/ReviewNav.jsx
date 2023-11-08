import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const RNav = styled.div`
	width: 100%;
`;

const NavUl = styled.ul`
	display: flex;
	width: 100%;
`;
const NavLi = styled.li`
	cursor: pointer;
	flex: 1;
	padding: 20px 0;
	text-align: center;
	${(props) =>
		props.isSelected &&
		css`
			color: var(--color-light-red);
			border-bottom: 3px solid var(--color-light-red);
		`}
`;

ReviewNav.propTypes = {
	contentType: PropTypes.string.isRequired,
};
