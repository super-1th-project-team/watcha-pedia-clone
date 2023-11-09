import React from 'react';
import * as style from './ContentsComments.style'
import Comment from './Comment';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useNavigate, useParams } from 'react-router-dom';

const userMockComments = [
	{
		id: '유저1',
		userProfileUrl:
			'https://images.unsplash.com/photo-1682687980976-fec0915c6177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		userRate: null,
		comment: '메시지가 없다고 해서 안좋은 영화가 아니다. 친절하지 않다고 해서 안좋은 영화가 아니다. 라고 하더라도 의외로 이 영화는 꽤나 직선적인 메시지를 담고 있는데, 전달하는 방법이 결코 상냥하지는 않다. 제목은 직설적이나, 뭘 가르치려고 드는 영화는 아니다. 마치 흐르는 물이 되어 타인의 꿈을 들여다보는것처럼 구성되어있는데, 이는 나우시카나 하쿠처럼 일어나는 일들에 항상 답을 갖고 있는 인물들이 아닌 상황과 감정에 이끌려 나아가는 인물이 주인공으로 설정되어 있기 때문이다. 흐르는 꿈같은 이야기에서 여느 영화가 그렇듯 일어나는 일련의 일들에 대한 주어져야할, 주어지기 쉽상인 왜? 라는 질문의 답의 분량은 극도로 자제되어 있다. 다분히 의도 되어지고 있다고 보는데 이 영화에서 말하듯 탑을 쌓는건 쌓는 이들의 몫이지 탑이 되는 돌멩이들의 역할이 아니라는것이다.',
		commentLike: 28,
		reply: 3,
	},
	{
		id: '이동진 평론가',
		userProfileUrl:
			'https://images.unsplash.com/photo-1698936082463-0d26856dc7b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		userRate: 3.0,
		comment: '작품 전체가 길고 간절하게 수행하는 의례처럼 다가온다.',
		commentLike: 500,
		reply: 71,
	},
	{
		id: '유저2',
		userProfileUrl:
			'https://images.unsplash.com/photo-1699183926113-4737b1c276ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		userRate: 4.5,
		comment: '문을 열어 과거를 꼭 안아주고픈 현재의 사람들',
		commentLike: 28,
		reply: 3,
	},
	{
		id: '유저3',
		userProfileUrl:
			'https://images.unsplash.com/photo-1699111386434-5573b25c6cb4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		userRate: 4.0,
		comment:
			'작은 불씨들이 모여 큰 불이 되어 정의를 외친 함성들에게 바치는 뜨거운 헌사',
		commentLike: 115,
		reply: 65,
	},
	{
		id: '유저4',
		userProfileUrl:
			'https://images.unsplash.com/photo-1698308246064-e86c57c63782?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		userRate: 3.5,
		comment: '희망은 작은 고리들의 연쇄에 있다',
		commentLike: 2813,
		reply: 95,
	},
];

const ContentsComments = () => {
    const navToComments = useNavigate();

    const moveToMoreComments = () => {
        navToComments(`/comments`)
    }

    return (
		<ContentsSection>
			<style.CommentsTitleDiv>
				<SectionTitleH3>코멘트</SectionTitleH3>
				<style.CommentsCountSpan>{userMockComments.length}</style.CommentsCountSpan>
			</style.CommentsTitleDiv>
			<style.CommentBoxUl>
				{userMockComments.map((comment, index) => (
					index < 8 ? (<Comment key={index} comment={comment}/>) : null
				))}
			</style.CommentBoxUl>
			<style.MoreBtn onClick={moveToMoreComments}>더보기</style.MoreBtn>
		</ContentsSection>
    )
};

export default ContentsComments;