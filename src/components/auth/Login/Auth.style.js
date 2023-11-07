import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Title = styled.h3`
	font-size: 18px;
	font-weight: bold;
	margin: 20px 0;
	color: var(--color-dark-black);
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

export const Paragraph = styled.p`
	width: 90%;
	text-align: left;
	color: var(--color-dark-red);
	margin-top: 10px;
	margin-left: 10px;
	font-size: 12px;
	line-height: 1.2;
`;

export const Desc = styled.div`
	padding-top: 10px;
	line-height: 1.3;
	text-align: center;
	width: 85%;
	height: 50px;
	color: var(--color-light-gray);
	background-color: var(--color-bg-light-gray);
	margin-top: 35px;
`;

export const InputStyle = styled.input`
	font-size: 16px;
	width: 90%;
	height: 45px;
	padding: 10px;
	margin-top: 10px;
	background-color: var(--color-bg-light-gray);
	border: none;
	outline: none;
	border-radius: 5px;

	${(props) =>
		props.isValid === true &&
		`
		border: 1px solid var(--color-dark-red);
	`}
`;

export const TextWrapper = styled.div`
	margin-top: 20px;
`;

export const Text = styled.span`
	font-size: 14px;
	color: var(--color-light-gray);

	${(props) =>
		props.text === 'or' &&
		`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &::before,
	    &::after {
		    content: '';
		    display: block;
		    width: 150px;
		    height: 1px;
		    background-color: var(--color-light-gray);
		    margin: 8px 10px;
	}
  `}
`;

export const Button = styled.button`
	font-size: 14px;
	color: var(--color-lignt-red);
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
`;
