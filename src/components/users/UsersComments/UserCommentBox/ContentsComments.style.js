import { styled } from 'styled-components';

export const CommentSection = styled.section`
	width: 100%;
	margin-top: 100px;
`;

export const CommentBoxUl = styled.ul`
	width: 30%;
	margin: auto;
`;

export const CommentBoxLi = styled.li`
	padding: 0 12px;
	background-color: rgb(242, 242, 242);
	border-radius: 6px;
	border: 1px solid var(--color-dark-gray);
	list-style: none;
	margin-top: 30px;
`;

export const CommentsTitleDiv = styled.div`
	display: flex;
	height: 48px;
	line-height: 48px;
	margin-bottom: 20px;
`;

export const CommentsCountSpan = styled.span`
	font-size: 24px;
	color: rgb(255, 47, 110);
	margin-left: 8px;
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
	align-items: center;
	font-size: 17px;
`;
export const UserImgDiv = styled.div`
	display: flex;
`;
export const UserImg = styled.img`
	border-radius: 50%;
	width: 30px;
	height: 30px;
	object-fit: cover;
`;
export const UserRating = styled.div`
	min-width: 55px;
	text-align: center;
	height: 26px;
	line-height: 26px;
	border: 1px solid rgb(234, 234, 234);
	border-radius: 13px;
	background-color: #fff;
	color: rgb(74, 74, 74);
	font-size: 14px;
	.star-icon {
		width: 18px;
		height: 18px;
		vertical-align: -3px;
		margin-right: 3px;
	}
`;
export const UserCommentDiv = styled.div`
	display: flex;
	font-size: 15px;
	line-height: 24px;
	border-bottom: 1px solid rgb(229, 229, 229);
	padding: 12px 0 15px;
	height: 147px;

	& img {
		width: 70px;
		height: 100px;
	}
`;
export const UserCommentP = styled.p`
	height: 100%;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 5;
`;
export const UserCommentResUl = styled.ul`
	display: flex;
	align-items: center;
	height: 44px;
	border-bottom: 1px solid rgb(229, 229, 229);
	font-size: 14px;
	.res-btns {
		margin: 0 3px;
		vertical-align: -1px;
	}
`;

export const LikeBtnDiv = styled.div`
	padding: 9.5px 0;
`;
export const LikeBtn = styled.button`
	background: ${(props) => props.bgcolor};
	font-size: 17px;
	color: ${(props) => props.color};
	border: none;
	border-radius: 3px;
	padding: 2px 8px;
`;
export const MoreBtn = styled.button`
	position: absolute;
	top: 78px;
	right: 60px;
	color: rgb(255, 47, 110);
	font-size: 16px;
	border: none;
	background: none;
	padding: 0;
`;
