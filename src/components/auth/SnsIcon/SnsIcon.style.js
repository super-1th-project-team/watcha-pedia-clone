import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.button`
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

export const Image = styled.img`
	width: 45px;
`;
