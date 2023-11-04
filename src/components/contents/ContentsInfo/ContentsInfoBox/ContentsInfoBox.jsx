import React from 'react';
import * as style from './ContentsInfoBox.style'

const ContentsInfoBox = () => {
    return (
        <div>
            <style.InfoBox>
                <style.InfoLeftBox>
                    <style.InfoImg src="" alt="" />
                    <style.GraphSection>
                        <style.GrayText margin="8px">별점 그래프</style.GrayText>
                        <style.Average>평균 별점
                            <style.GrayText as="span"> (2.7만명)</style.GrayText>
                        </style.Average>
                        <p>그래프</p>
                    </style.GraphSection>
                </style.InfoLeftBox>
                <style.InfoRightBox>
                    <style.Grid>
                        <div>
                            <div>별점</div>
                            <style.GrayText>코멘트</style.GrayText>
                        </div>
                        <div>
                            <strong>3.2</strong>    
                            <style.GrayText>예상별점</style.GrayText>
                        </div>
                        <div>
                            <strong>4.5</strong>
                            <style.GrayText>평균별점</style.GrayText>
                        </div>
                        <div>
                            <button>
                                <span>아이콘</span>
                                <style.GrayText>보고싶어요</style.GrayText>
                            </button>
                            <button>
                                <span>아이콘</span>
                                <style.GrayText>코멘트</style.GrayText>
                            </button>
                            <button>
                                <span>아이콘</span>
                                <style.GrayText>보는 중</style.GrayText>
                            </button>
                            <button>
                                <span>아이콘</span>
                                <style.GrayText>더보기</style.GrayText>
                            </button>
                        </div>
                    </style.Grid>
                    <section>내가 쓴 코멘트</section>
                    <section>비슷한 작품</section>
                    <section>작품 설명</section>
                </style.InfoRightBox>
            </style.InfoBox>
        </div>
    );
};

export default ContentsInfoBox;