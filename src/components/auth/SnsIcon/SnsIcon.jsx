import styled from 'styled-components';

const SnsIcon = () => {
	return (
		<ButtonWrapper>
			<Button>
				<Image src="/assets/icon-kakao.png" alt="kakao-icon" />
			</Button>
			<Button icon="google">
				<Image src="/assets/icon-google.png" alt="google-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-twitter.png" alt="twitter-icon" />
			</Button>
			<Button icon="apple">
				<Image src="/assets/icon-apple.png" alt="apple-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-line.png" alt="line-icon" />
			</Button>
		</ButtonWrapper>
	);
};

export default SnsIcon;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Button = styled.button`
	width: 60px;
	height: 60px;
	border: transparent;
	border-radius: 50%;
	background-color: transparent;
	cursor: pointer;

	${(props) =>
		props.icon === 'google' &&
		`
      & img {
        width: 25px;
        
      }
    `}

	${(props) =>
		props.icon === 'apple' &&
		`

    & img {
      width: 30px;  
    }
  `}
`;

const Image = styled.img`
	width: 45px;
`;
