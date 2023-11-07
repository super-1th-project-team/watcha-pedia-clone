import React, { useState } from 'react';
import * as style from './ContentsComments.style';
import { IoStarSharp } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa6';
import { BsFillChatFill } from 'react-icons/bs'

const Comment = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0)
	const likeBtnHandler = () => {
		setIsClicked(!isClicked)
		if(!isClicked){
			setCount(count+1)
		}else{
			setCount(count-1)
		}
		
	}
	return (
		<style.CommentDiv>
			<style.CommentHeaderDiv>
				<style.UserDiv>
					<img src="" alt="유저프로필" />
					<p style={{ marginLeft: '8px' }}>User</p>
				</style.UserDiv>
				<style.UserRating>
					<IoStarSharp />
					4.0
				</style.UserRating>
			</style.CommentHeaderDiv>
			<style.UserCommentDiv>
				<p>유저가 남긴 코멘트</p>
			</style.UserCommentDiv>
			<style.UserCommentResUl>
				<li>
					<FaThumbsUp style={{margin:'0 3px'}}/>{654 + count}
				</li>
				<li style={{marginLeft:'13px'}}>
					<BsFillChatFill style={{margin:'0 3px'}}/>54
				</li>
			</style.UserCommentResUl>
			<style.LikeBtnDiv>
				<style.LikeBtn 
					onClick={likeBtnHandler} 
					color={isClicked ? '#fff' : 'rgb(255,47,110)'} 
					bgcolor={isClicked ? 'rgb(255,47,110)' : 'none'}>좋아요
				</style.LikeBtn>
			</style.LikeBtnDiv>
		</style.CommentDiv>
	);
};

export default Comment;
