import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '916d2ebdabad974a800012d13e9985cd',
		language: 'ko-KR',
		include_image_language: 'en,null' 
	},
});

export default instance;
