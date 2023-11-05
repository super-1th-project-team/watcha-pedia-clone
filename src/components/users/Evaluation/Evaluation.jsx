import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Count, Text } from './Evaluation.style';

const Evaluation = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const moveUserRatingsSystemPage = (type) => {
		navigate(`/users/${id}/${type}`);
	};

	return (
		<Container>
			<Button onClick={() => moveUserRatingsSystemPage('ratings')}>
				<Count>0</Count>
				<Text>평가</Text>
			</Button>
			<Button onClick={() => moveUserRatingsSystemPage('comments')}>
				<Count>0</Count>
				<Text>코멘트</Text>
			</Button>
			<Button onClick={() => moveUserRatingsSystemPage('decks')}>
				<Count>0</Count>
				<Text>컬렉션</Text>
			</Button>
		</Container>
	);
};

export default Evaluation;
