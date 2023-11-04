import React from 'react';
import * as style from './ContentsBanner.style'

const ContentsBanner = () => {
    return (
        <style.Banner>
            <style.BgImg>img</style.BgImg>
            <style.contentsInfoBox>
                <style.contentsTitle>제목</style.contentsTitle>
                <style.contentsInfo>원어 제목</style.contentsInfo>
                <style.contentsInfo>년도 · 장르 · 국가</style.contentsInfo>
                <style.contentsInfo>러닝타임 · 전체</style.contentsInfo>
                <style.contentsInfo>예매 순위 1위(24%)</style.contentsInfo>
            </style.contentsInfoBox>
        </style.Banner>
    );
};

export default ContentsBanner;