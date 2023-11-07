import PropTypes from 'prop-types';
import { Button } from './AuthButton.style';

const AuthButton = (props) => {
	return <Button>{props.title}</Button>;
};

AuthButton.propTypes = {
	title: PropTypes.string.isRequired, // title prop의 타입을 문자열로 지정하고 필수로 설정
};

export default AuthButton;
