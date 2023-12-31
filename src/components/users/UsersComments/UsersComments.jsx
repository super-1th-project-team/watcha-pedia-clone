import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	Button,
	ButtonWrap,
	StyledBsArrowLeftShort,
	Title,
	TypeButton,
	UsersCommentsSection,
} from './UsersComments.style';
import { useState } from 'react';
import { useScrollToTop } from '../../../hooks/useScrollToTop';
import UserCommentBox from './UserCommentBox/UserCommentBox';

const UsersComments = () => {
	const [contentType, setContentType] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	const [activeButton, setActiveButton] = useState(1);

	const handleButtonClick = (id) => {
		setActiveButton(id);
		id === 1
			? setContentType('movies')
			: id === 2
			? setContentType('tv_seasons')
			: setContentType('books');
	};

	const getButtonStyle = (id) => {
		return id === activeButton
			? {
					color: 'var(--color-dark-black)',
					fontWeight: 'bold',
					borderBottom: '3px solid var(--color-dark-black)',
			  }
			: {};
	};

	const moveToTheUserPage = () => {
		navigate(`/users/${id}`);
	};

	useScrollToTop();

	return (
		<UsersCommentsSection>
			<div>
				<Button>
					<StyledBsArrowLeftShort onClick={moveToTheUserPage} />
				</Button>
				<Title>코멘트</Title>
			</div>
			<ButtonWrap>
				<TypeButton
					style={getButtonStyle(1)}
					onClick={() => handleButtonClick(1)}>
					영화
				</TypeButton>
				<TypeButton
					style={getButtonStyle(2)}
					onClick={() => handleButtonClick(2)}>
					TV 프로그램
				</TypeButton>
				<TypeButton
					style={getButtonStyle(3)}
					onClick={() => handleButtonClick(3)}>
					책
				</TypeButton>
			</ButtonWrap>
			<UserCommentBox contentType={contentType} />
		</UsersCommentsSection>
	);
};

export default UsersComments;
