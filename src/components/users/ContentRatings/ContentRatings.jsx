import { useNavigate, useParams } from 'react-router-dom';
import MovieRatings from './MovieRatings';
import TVRatings from './TVRatings';
import BooksRatings from './BooksRatings';
import {
	ContentsRatingsSection,
	Button,
	Title,
	ButtonWrap,
	TypeButton,
	StyledBsArrowLeftShort,
} from './ContentsRatings.style';
import { useState } from 'react';

const ContentRatings = () => {
	const { id, contentType } = useParams();
	const navigate = useNavigate();

	const [activeButton, setActiveButton] = useState(1);

	const handleButtonClick = (id) => {
		setActiveButton(id);
	};

	const getButtonStyle = (id) => {
		return id === activeButton
			? {
					color: 'red',
					fontWeight: 'bold',
					borderBottom: '3px solid var(--color-lignt-red)',
			  }
			: {};
	};

	const moveToContentsTypePage = () => {
		navigate(`/users/${id}/contents/${contentType}`);
	};

	return (
		<ContentsRatingsSection>
			<div>
				<Button>
					<StyledBsArrowLeftShort onClick={moveToContentsTypePage} />
				</Button>
				<Title>평가한 작품들</Title>
			</div>
			<ButtonWrap>
				<TypeButton
					style={getButtonStyle(1)}
					onClick={() => handleButtonClick(1)}>
					전체
				</TypeButton>
				<TypeButton
					style={getButtonStyle(2)}
					onClick={() => handleButtonClick(2)}>
					별점순
				</TypeButton>
			</ButtonWrap>
			{contentType === 'movies' && <MovieRatings />}
			{contentType === 'tv_seasons' && <TVRatings />}
			{contentType === 'books' && <BooksRatings />}
		</ContentsRatingsSection>
	);
};

export default ContentRatings;
