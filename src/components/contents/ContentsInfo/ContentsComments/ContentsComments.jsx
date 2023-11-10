import React from 'react';
import * as style from './ContentsComments.style';
import Comment from './Comment';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ContentsComments = () => {
	const reviews = useSelector((state) => state.movie.reviews);
	const navToComments = useNavigate();

	const moveToMoreComments = () => {
		navToComments(`/comments`);
	};

	return (
		<ContentsSection>
			<style.CommentsTitleDiv>
				<SectionTitleH3>코멘트</SectionTitleH3>
				<style.CommentsCountSpan>{reviews.length}</style.CommentsCountSpan>
			</style.CommentsTitleDiv>
			<style.CommentBoxUl>
				{reviews &&
					reviews.map((review, index) =>
						index < 8 ? <Comment key={index} review={review} /> : null,
					)}
			</style.CommentBoxUl>
			<style.MoreBtn onClick={moveToMoreComments}>더보기</style.MoreBtn>
		</ContentsSection>
	);
};

export default ContentsComments;
