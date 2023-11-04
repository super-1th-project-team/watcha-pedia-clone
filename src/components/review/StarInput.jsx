import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Input = styled.input`
	display: none;
`;

const Label = styled.label`
	cursor: pointer;
	font-size: 1.5rem;
	color: lightgray;

	${({ isHalf }) =>
		isHalf &&
		css`
			position: absolute;
			width: 12px;
			overflow: hidden;

			&:nth-of-type(10) {
				transform: translate(-108px);
			}
			&:nth-of-type(8) {
				transform: translate(-84px);
			}
			&:nth-of-type(6) {
				transform: translate(-60px);
			}
			&:nth-of-type(4) {
				transform: translate(-36px);
			}
			&:nth-of-type(2) {
				transform: translate(-12px);
			}
		`}
`;

const StarInput = ({ onClickRating, value, isHalf }) => {
	const handleClickRatingInput = (event) => {
		// const selectedValue = parseFloat(event.target.value);
		// const stringValue = String(selectedValue); // 숫자를 문자열로 변환
		// if (!isNaN(selectedValue)) {
		// 	onClickRating(stringValue);
		// }
		const selectedValue = parseFloat(event.target.value);
		if (!isNaN(selectedValue)) {
			onClickRating(selectedValue);
		}
	};

	return (
		<>
			<Input type="radio" name="rating" id={`star${value}`} value={value} />
			<Label
				onClick={handleClickRatingInput}
				isHalf={isHalf}
				htmlFor={`star${value}`}>
				{isHalf ? <FaStarHalf /> : <FaStar />}
			</Label>
		</>
	);
};

StarInput.propTypes = {
	onClickRating: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	isHalf: PropTypes.bool.isRequired,
};
export default StarInput;
