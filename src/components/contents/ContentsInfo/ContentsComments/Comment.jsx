import React, { useState } from 'react';
import * as style from './ContentsComments.style';
import { IoStarSharp } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa6';
import { BsFillChatFill } from 'react-icons/bs';

const Comment = ({ comment }) => {
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0);
	const likeBtnHandler = () => {
		setIsClicked(!isClicked);
		if (!isClicked) {
			setCount(count + 1);
		} else {
			setCount(count - 1);
		}
	};
	return (
		<style.CommentBoxLi>
			<style.CommentHeaderDiv>
				<style.UserDiv>
					<style.UserImgDiv>
						<style.UserImg src={comment.userProfileUrl} alt="유저프로필" />
					</style.UserImgDiv>
					<p style={{ marginLeft: '8px' }}>{comment.id}</p>
				</style.UserDiv>
				<style.UserRating>
					<IoStarSharp className='star-icon'/>4.0
				</style.UserRating>
			</style.CommentHeaderDiv>
			<style.UserCommentDiv>
				<style.UserCommentP>{comment.comment}</style.UserCommentP>
			</style.UserCommentDiv>
			<style.UserCommentResUl>
				<li>
					<FaThumbsUp className='res-btns'/>
					{comment.commentLike + count}
				</li>
				<li style={{ marginLeft: '13px' }}>
					<BsFillChatFill  className='res-btns'/>
					54
				</li>
			</style.UserCommentResUl>
			<style.LikeBtnDiv>
				<style.LikeBtn
					onClick={likeBtnHandler}
					color={isClicked ? '#fff' : 'rgb(255,47,110)'}
					bgcolor={isClicked ? 'rgb(255,47,110)' : 'none'}>
					좋아요
				</style.LikeBtn>
			</style.LikeBtnDiv>
		</style.CommentBoxLi>
	);
};

export default Comment;
