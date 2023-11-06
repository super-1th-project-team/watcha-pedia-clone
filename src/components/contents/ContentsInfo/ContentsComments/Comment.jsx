import React from 'react';

const Comment = () => {
    return (
        <div>
            <div>
                <img src="" alt="유저프로필" />
                <p>User</p>
                <p><span>아이콘</span>별점</p>
            </div>
            <div>
                <p>유저가 남긴 코멘트</p>
            </div>
            <div>
                <ul>
                    <li><span>따봉아이콘</span>654</li>
                    <li><span>댓글아이콘</span>54</li>
                </ul>
            </div>
            <div>
                <button>좋아요</button>
            </div>
        </div>
    );
};

export default Comment;