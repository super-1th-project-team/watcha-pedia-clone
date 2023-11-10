import { useNavigate, useParams } from 'react-router-dom';
import {
	ContentsBoxSection,
	Button,
	AddButton,
	Title,
	SubTitle,
	Container,
	RatingsWrap,
	WishesWrap,
	Text,
	StyledBsArrowLeftShort,
	Count,
	Wrap,
} from './ContentsBox.style';
import { useScrollToTop } from '../../../hooks/useScrollToTop';

const ContentsBox = () => {
	const { id, contentType } = useParams();
	const navigate = useNavigate();

	const backToTheUserPageHandler = () => {
		navigate(`/users/${id}`);
	};

	const moveToContentTypeRatingsPage = () => {
		navigate(`/users/${id}/contents/${contentType}/ratings`);
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
					<Wrap>
						<SubTitle>평가</SubTitle>
						<Count>0</Count>
					</Wrap>
					<AddButton onClick={moveToContentTypeRatingsPage}>더보기</AddButton>
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
