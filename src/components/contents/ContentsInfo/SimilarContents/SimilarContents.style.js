import styled from "styled-components";

export const SimilarUl = styled.ul`
  display:flex;
  margin-top: 20px;
`
export const SimilarLi = styled.li`
  width: 15%;
`
export const SimilarTitle = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
`
export const SimilarRating = styled.p`
  font-size: 13px;
  line-height: 18px;
  color:  rgb(120,120,120);
  margin-top: 2px;
`
export const SimilarGenre = styled.p`
  font-size: 12px;
  line-height: 16px;
  color:  rgb(120,120,120);
  margin-top: 1px;
`
export const SimilarImg = styled.img`
  width: 100%;
  height: 100%;
`
export const MoreSimilarBtn = styled.button`
  text-align: center;
  display: block;
  margin: 0 auto 20px auto;
  width: calc(100% - 30px);
  max-width: 172px;    
  height: 34px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 6px;
  box-sizing: border-box;
  min-width: 72px;
  font-size: 14px;
  cursor: pointer;
`