import PropTypes from 'prop-types';
import { Button } from './AuthButton.style';

const AuthButton = (props) => {
	return <Button type="submit">{props.title}</Button>;
};

AuthButton.propTypes = {
	title: PropTypes.string.isRequired,
};

export default AuthButton;
