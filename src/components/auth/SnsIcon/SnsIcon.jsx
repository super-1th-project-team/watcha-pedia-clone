import { Button, ButtonWrapper, Image } from './SnsIcon.style';

const SnsIcon = () => {
	return (
		<ButtonWrapper>
			<Button>
				<Image src="/assets/icon-kakao.png" alt="kakao-icon" />
			</Button>
			<Button icon="google">
				<Image src="/assets/icon-google.svg" alt="google-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-twitter.png" alt="twitter-icon" />
			</Button>
			<Button icon="apple">
				<Image src="/assets/icon-apple.svg" alt="apple-icon" />
			</Button>
			<Button>
				<Image src="/assets/icon-line.png" alt="line-icon" />
			</Button>
		</ButtonWrapper>
	);
};

export default SnsIcon;
