import React from 'react';
import * as style from './ContentsComments.style';
import { IoStarSharp } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa6';
import { BsFillChatFill } from 'react-icons/bs'

const Comment = () => {
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
					<FaThumbsUp style={{margin:'0 3px'}}/>654
				</li>
				<li style={{marginLeft:'13px'}}>
					<BsFillChatFill style={{margin:'0 3px'}}/>54
				</li>
			</style.UserCommentResUl>
			<style.LikeBtnDiv>
				<style.LikeBtn>좋아요</style.LikeBtn>
			</style.LikeBtnDiv>
		</style.CommentDiv>
	);
};

export default Comment;
