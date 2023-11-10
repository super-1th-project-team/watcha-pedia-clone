import axios from 'axios';

const instance = axios.create({
	baseURL: '/ttb/api',
	params: {
		ttbkey: 'ttbculture87871410001',
		output: 'js',
		Version: '20131101',
		language: 'ko-KR',
	},
});

export default instance;
