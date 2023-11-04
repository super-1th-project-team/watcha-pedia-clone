import { Button, Container, Count, Text } from './Evaluation.style';

const Evaluation = () => {
	return (
		<Container>
			<Button>
				<Count>0</Count>
				<Text>평가</Text>
			</Button>
			<Button>
				<Count>0</Count>
				<Text>코멘트</Text>
			</Button>
			<Button>
				<Count>0</Count>
				<Text>컬렉션</Text>
			</Button>
		</Container>
	);
};

export default Evaluation;
