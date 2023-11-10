import React from 'react';
import { Background } from './Loading.style';
import loadingRing from './loading_ring.gif'

const Loading = () => {
	return (
		<>
			<Background>
				<img src={loadingRing} alt="" />
			</Background>
		</>
	);
};

export default Loading;
