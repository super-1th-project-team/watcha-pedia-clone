import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.button`
	width: 60px;
	height: 60px;
	border: none;
	border-radius: 50%;
	background-color: transparent;
	cursor: pointer;

	${(props) =>
		props.icon === 'google' &&
		`
			width: 50px;
			height: 50px;
			margin: 5px 5px;
			border: 0.5px solid var(--color-light-gray);
      & img {
        width: 25px;
      }
    `}

	${(props) =>
		props.icon === 'apple' &&
		`
			& img {
				width: 50px;  
			}
  `}
`;

export const Image = styled.img`
	width: 45px;
`;
