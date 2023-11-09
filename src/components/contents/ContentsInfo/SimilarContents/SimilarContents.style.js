import styled from 'styled-components';

export const SimilarUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
	margin-top: 20px;
`;
export const SimilarLi = styled.li`
	width: 100%;
`;
export const SimilarImgPaddingDiv = styled.div`
	width: 100%;
	padding-top: 145.37%;
	position: relative;
	background: rgb(248, 248, 248);
	border: 1px solid rgb(234, 233, 232);
	border-radius: 5px;
	overflow: hidden;
	background: rgb(248, 248, 248);
`;
export const SimilarImgDiv = styled.div`
	width: 100%;
	height: 100%;
`;
export const SimilarImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const SimilarTitle = styled.p`
	margin-top: 5px;
	font-size: 16px;
	line-height: 22px;
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
`;
export const SimilarRating = styled.p`
  margin-top: 2px;
	font-size: 13px;
	line-height: 18px;
	color: rgb(120, 120, 120);
	margin-top: 2px;
  .star-icon{
    vertical-align: -1px;
  }
`;
export const SimilarGenre = styled.p`
	font-size: 12px;
	line-height: 16px;
	color: rgb(120, 120, 120);
	margin-top: 1px;
`;

export const MoreSimilarBtn = styled.button`
	text-align: center;
	display: block;
	margin: 0 auto 20px auto;
	width: calc(100% - 30px);
	max-width: 172px;
	height: 34px;
	background-color: #fff;
	border: 1px solid rgb(227, 227, 227);
	border-radius: 6px;
	box-sizing: border-box;
	min-width: 72px;
	font-size: 14px;
	cursor: pointer;
  .arr-down{
    width: 12px;
    margin-left: 3px;
  }
`;