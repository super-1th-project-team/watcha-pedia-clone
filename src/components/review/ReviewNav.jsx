import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ReviewNav = () => {
	const navigate = useNavigate();

	const clickNavHandler = (contentType) => {
		navigate(`/review/${contentType}`);
	};

	return (
		<RNav className="ReviewNav">
			<NavUl>
				<NavLi onClick={() => clickNavHandler('movies')}>영화</NavLi>
				<NavLi onClick={() => clickNavHandler('tv_seasons')}>TV 프로그램</NavLi>
				<NavLi onClick={() => clickNavHandler('books')}>책</NavLi>
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
	&:active,
	&:focus {
		color: var(--color-light-red);
		border-bottom: 2px solid var(--color-light-red);
	}
`;
