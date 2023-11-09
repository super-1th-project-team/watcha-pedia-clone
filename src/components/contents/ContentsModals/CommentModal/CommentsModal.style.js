import styled from 'styled-components';

export const CommentModalDiv = styled.div`
	width: 480px;
	min-height: 460px;
	padding: 18px 20px;
	border-radius: 16px;
	background: #fff;
	position: relative;
  .close-btn{
    position: absolute;
    top: 16px;
    right: 20px;
    width: 30px;
    height: 30px;
    background-color: rgb(238, 239, 243);
    border-radius: 50%;
  }
`;
export const CommentModalTitle = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  margin-bottom: 15px;
`
export const CommentInput = styled.textarea`
	width: 100%;
	min-height: 360px;
	font-size: 17px;
	line-height: 21px;
	margin: 1px 0;
	border: none;
  overflow: visible;
`;
export const CommentFooterDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const CommentFooterLeftDiv = styled.div`
	position: relative;
	&::after {
		content: '';
		position: absolute;
		display: inline-block;
		top: 50%;
		right: 50%;
    transform: translate(-50%, -50%);
		width: 1px;
		height: 11px;
		background-color: rgb(212,212,212);
	}
	.bar {
    margin-right: 22px;    
	}
	.icons {
		width: 30px;
		height: 30px;
		color: rgb(196, 196, 196);
	}
`;

export const CommentFooterRightDiv = styled(CommentFooterDiv)`
	justify-content: end;
	color: rgb(94, 94, 100);
	font-size: 13px;
`;
export const CommentSubmitBtn = styled.button`
	background: rgb(255, 47, 110);
	opacity: 0.5;
	border: none;
	border-radius: 7px;
	height: 38px;
	margin-left: 12px;
	padding: 0 40px;
	font-size: 15px;
	color: #fff;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;
