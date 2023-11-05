import { useNavigate, useParams } from 'react-router-dom';
import {
	ContentsBoxSection,
	Button,
	Title,
	SubTitle,
	Container,
	RatingsWrap,
	WishesWrap,
	Text,
	StyledBsArrowLeftShort,
} from './ContentsBox.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const ContentsBox = () => {
	const { contentType } = useParams();
	const { id } = useParams();
	const navigate = useNavigate();

	const backToTheUserPageHandler = () => {
		navigate(`/users/${id}`);
	};

	useScrollToTop();

	return (
		<ContentsBoxSection>
			<div>
				<Button onClick={backToTheUserPageHandler}>
					<StyledBsArrowLeftShort />
				</Button>
				<Title>
					{contentType === 'movies'
						? '영화'
						: contentType === 'tv_seasons'
						? 'TV'
						: '책'}
				</Title>
			</div>
			<Container>
				<RatingsWrap>
					<SubTitle>평가</SubTitle>
					<span>0</span>
				</RatingsWrap>
				<WishesWrap>
					<Text>보고싶어요</Text>
					<span>0</span>
				</WishesWrap>
				<WishesWrap>
					<Text>보는 중</Text>
					<span>0</span>
				</WishesWrap>
			</Container>
		</ContentsBoxSection>
	);
};

export default ContentsBox;
