import React, { useState } from 'react';
import * as style from './ContentsInfoBox.style'
import './ico.css'
import { BiPlus } from 'react-icons/bi'
import { RiPencilFill } from 'react-icons/ri'
import { BsEyeFill, BsBookmarkPlusFill } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'



const InfoBtns = ({wantBtnHandler, watchingBtnHandler, wantIsClicked, watchingIsClicked}) => {
    const [moreIsClicked, setMoreIsClicked] = useState(false);

    const wantClickHandler = () => {
        wantBtnHandler(!wantIsClicked);
        if(watchingIsClicked){
            watchingBtnHandler(false)
        }
    }

    const watchingClickHandler = () => {
        watchingBtnHandler(!watchingIsClicked);
        if(wantIsClicked){
            wantBtnHandler(false)
        }
    }

    const moreClickHandler = () => {
        setMoreIsClicked(!moreIsClicked)
    }

    return (

        <>
            <div>
                <style.Btn onClick={wantClickHandler}>
                    {wantIsClicked? <BsBookmarkPlusFill className='ico active'/> :<BiPlus className='ico'/>}
                    <style.GrayText>보고싶어요</style.GrayText>
                </style.Btn>
                <style.Btn>
                    <RiPencilFill className='ico'/>
                    <style.GrayText>코멘트</style.GrayText>
                </style.Btn>
                <style.Btn onClick={watchingClickHandler}>
                    <BsEyeFill className={watchingIsClicked ? 'ico active' : 'ico'}/>
                    <style.GrayText>보는 중</style.GrayText>
                </style.Btn>
                <style.Btn style={{position:'relative'}} onClick={moreClickHandler}>
                    <FiMoreHorizontal className='ico'/>
                    <style.GrayText>더보기</style.GrayText>
                    {moreIsClicked && 
                        <style.moreDiv>
                            <p>관심없어요</p>
                            <p>컬렉션에 추가</p>
                            <p>본 날짜에 추가</p>
                        </style.moreDiv>}
                </style.Btn>
            </div>
        </>
    );
};

export default InfoBtns;