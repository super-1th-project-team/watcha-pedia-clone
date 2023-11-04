import React from 'react';
import { styled } from 'styled-components';

const ReviewNav = () => {
	return (
		<div className="ReviewNav">
			<NavUl>
				<li>영화</li>
				<li>TV 프로그램</li>
				<li>책</li>
			</NavUl>
		</div>
	);
};

export default ReviewNav;

const NavUl = styled.ul`
	display: flex;
`;
