import React, { useState } from 'react';
import * as style from './ContentsComments.style';
import { IoStarSharp } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa6';
import { BsFillChatFill } from 'react-icons/bs';

const Comment = ({ review }) => {
	const reviewDetails = review.author_details
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
						<style.UserImg src={`https://image.tmdb.org/t/p/original/${reviewDetails.avatar_path}`} alt="user" />
					</style.UserImgDiv>
					<p style={{ marginLeft: '8px' }}>{reviewDetails.username}</p>
				</style.UserDiv>
				<style.UserRating>
					<IoStarSharp className='star-icon'/>{(reviewDetails.rating/2).toFixed(1)}
				</style.UserRating>
			</style.CommentHeaderDiv>
			<style.UserCommentDiv>
				<style.UserCommentP>{review.content}</style.UserCommentP>
			</style.UserCommentDiv>
			<style.UserCommentResUl>
				<li>
					<FaThumbsUp className='res-btns'/>
					{~~(Math.random() * 1000) + count}
				</li>
				<li style={{ marginLeft: '13px' }}>
					<BsFillChatFill  className='res-btns'/>
					{~~(Math.random() * 100)}
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
