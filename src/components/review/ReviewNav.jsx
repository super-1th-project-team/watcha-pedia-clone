import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { setContentType } from '../../slice/reviewSlice';
import { useNavigate } from 'react-router';

const ReviewNav = () => {
	const dispatch = useDispatch();
	const selectedContentType = useSelector((state) => state.contentType);
	const navigate = useNavigate();

	const clickContentTypeHandler = (contentType) => {
		dispatch(setContentType(contentType));
		navigate(`/review/${contentType}`);
	};

	return (
		<div className="ReviewNav">
			<NavUl>
				<NavLi
					onClick={() => clickContentTypeHandler('movies')}
					className={selectedContentType === 'movies' ? 'active' : ''}>
					영화
				</NavLi>
				<NavLi
					onClick={() => clickContentTypeHandler('tv_seasons')}
					className={selectedContentType === 'tv_seasons' ? 'active' : ''}>
					TV 프로그램
				</NavLi>
				<NavLi
					onClick={() => clickContentTypeHandler('books')}
					className={selectedContentType === 'books' ? 'active' : ''}>
					책
				</NavLi>
			</NavUl>
		</div>
	);
};

export default ReviewNav;

const NavUl = styled.ul`
	display: flex;
`;
const NavLi = styled.li`
	cursor: pointer;
`;
