import { styled } from 'styled-components';

export const CommentsTitleDiv = styled.div`
	display: flex;
	height: 48px;
	margin-bottom: 20px;
`;

export const CommentsCountSpan = styled.span`
	font-size: 24px;
	color: rgb(255, 47, 110);
	margin-left: 8px;
`;
export const CommentDiv = styled.div`
	width: 324px; // 여러 개 있을 때 변경해야할 부분
	padding: 0 12px;
	background-color: rgb(242, 242, 242);
    border-radius: 6px;
`;

export const CommentHeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 54px;
	border-bottom: 1px solid rgb(229, 229, 229);
`;
export const UserDiv = styled.div`
	display: flex;
	font-size: 17px;
`;
export const UserRating = styled.div`
	min-width: 55px;
	text-align: center;
	height: 26px;
	line-height: 26px;
	border: 1px solid rgb(234, 234, 234);
	border-radius: 13px;
	background-color: #fff;
`;
export const UserCommentDiv = styled.div`
	padding: 12px 0 15px;
	font-size: 15px;
	line-height: 24px;
	height: 120px;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px solid rgb(229, 229, 229);
`;
export const UserCommentResUl = styled.ul`
    display: flex;
    align-items: center;
    height: 44px;
	border-bottom: 1px solid rgb(229, 229, 229);
    font-size: 14px;
`;

export const LikeBtnDiv = styled.div`
    padding: 9.5px 0 ;
`
export const LikeBtn = styled.button`
    background: ${props => props.bgColor};
    font-size: 17px;
    color: ${props => props.color};
    border: none;
	border-radius: 3px;
    padding: 2px 8px;
`
export const MoreBtn = styled.button`
    position: absolute;
    top: 60px;
    right: 60px;
    color: rgb(255,47,110);
    font-size: 16px;
    border: none;
    background: none;
    padding: 0;
`