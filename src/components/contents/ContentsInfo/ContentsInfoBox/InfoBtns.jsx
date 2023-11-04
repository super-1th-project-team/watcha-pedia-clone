import React from 'react';
import * as style from './ContentsInfoBox.style'


const InfoBtns = () => {
    return (
        <div>
            <style.Btn>
                <span>아이콘</span>
                <style.GrayText>보고싶어요</style.GrayText>
            </style.Btn>
            <style.Btn>
                <span>아이콘</span>
                <style.GrayText>코멘트</style.GrayText>
            </style.Btn>
            <style.Btn>
                <span>아이콘</span>
                <style.GrayText>보는 중</style.GrayText>
            </style.Btn>
            <style.Btn>
                <span>아이콘</span>
                <style.GrayText>더보기</style.GrayText>
            </style.Btn>
        </div>
    );
};

export default InfoBtns;