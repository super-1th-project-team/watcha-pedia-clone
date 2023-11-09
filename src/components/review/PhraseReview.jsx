import React from 'react';
import { styled } from 'styled-components';

const PhraseReview = () => {
	return (
		<RPhrase className="PhraseReview">
			<span>평가 수가 적어요ㅜㅜ</span>
		</RPhrase>
	);
};

export default PhraseReview;

const RPhrase = styled.div`
	margin: 10px 0;
`;
