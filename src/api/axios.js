import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '27ab797d20f85bedff7050cd1ca592fe',
		language: 'ko-KR',
	},
});

export default instance;
