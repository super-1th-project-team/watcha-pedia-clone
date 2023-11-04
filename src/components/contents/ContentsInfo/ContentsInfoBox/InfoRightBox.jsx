import React from 'react';
import InfoBtns from './InfoBtns';
import * as style from './ContentsInfoBox.style'

const InfoRightBox = () => {
    return (
        <style.InfoRightBox>
            <style.GridSection>
                <div>
                    <div>
                        <svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" className="css-1wu0qm1 e1ri6xst0"><g fillRule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg>
                        <svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" className="css-1wu0qm1 e1ri6xst0"><g fillRule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg>
                        <svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" className="css-1wu0qm1 e1ri6xst0"><g fillRule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg>
                        <svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" className="css-1wu0qm1 e1ri6xst0"><g fillRule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg>
                        <svg height="44" viewBox="0 0 44 44" width="44" xmlns="http://www.w3.org/2000/svg" fill="#eee" className="css-1wu0qm1 e1ri6xst0"><g fillRule="evenodd"><path d="M22 33.444L9.83 42.327c-.784.572-1.842-.196-1.539-1.118l4.687-14.32L.769 18.06c-.787-.569-.383-1.812.588-1.81l15.067.033 4.624-14.34c.298-.924 1.606-.924 1.904 0l4.624 14.34 15.067-.033c.971-.002 1.375 1.241.588 1.81l-12.209 8.829 4.688 14.32c.302.922-.756 1.69-1.54 1.118L22 33.444z"></path></g></svg>
                    </div>
                    <style.GrayText>평가상태마다 코멘트</style.GrayText>
                </div>
                <style.ScoreDiv>
                    <div>
                        <style.ScoreText>3.2</style.ScoreText>
                        <style.GrayText>예상별점</style.GrayText>
                    </div>
                    <div style={{marginLeft: 55}}>
                        <style.ScoreText>4.5</style.ScoreText>
                        <style.GrayText>평균별점(2,932명)</style.GrayText>
                    </div>
                </style.ScoreDiv>
                <InfoBtns />
            </style.GridSection>
            <section>내가 쓴 코멘트</section>
            <section>비슷한 작품</section>
            <style.DescSection>작품 설명</style.DescSection>
        </style.InfoRightBox>
    );
};

export default InfoRightBox;