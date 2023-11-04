import React from 'react';
import * as style from './ContentsInfoBox.style'
import InfoRightBox from './InfoRightBox';

const ContentsInfoBox = () => {
    return (
        <style.BgGray>
            <style.InfoBox>
                <style.InfoLeftBox>
                    <style.InfoImg src="" alt="" />
                    <style.GraphSection>
                        <style.GrayText margin='8px'>별점 그래프</style.GrayText>
                        <style.Average>평균 별점
                            <style.GrayText as="span"> (2.7만명)</style.GrayText>
                        </style.Average>
                        <p>그래프</p>
                    </style.GraphSection>
                </style.InfoLeftBox>
                <InfoRightBox />
            </style.InfoBox>
        </style.BgGray>
    );
};

export default ContentsInfoBox;