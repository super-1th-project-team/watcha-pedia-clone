import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { LiaStarSolid, LiaStarHalfSolid } from 'react-icons/lia';
import PropTypes from 'prop-types';

const StarInput = ({ onClickRating, value, isHalf }) => {
	const handleClickRatingInput = (event) => {
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
				{isHalf ? <LiaStarHalfSolid /> : <LiaStarSolid />}
			</Label>
		</>
	);
};

export default StarInput;

StarInput.propTypes = {
	onClickRating: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	isHalf: PropTypes.bool.isRequired,
};

const Input = styled.input`
	display: none;
`;

const Label = styled.label`
	cursor: pointer;
	font-size: 40px;
	color: lightgray;

	${({ isHalf }) =>
		isHalf &&
		css`
			position: absolute;
			width: 20px;
			overflow: hidden;

			&:nth-of-type(10) {
				transform: translate(-180px);
			}
			&:nth-of-type(8) {
				transform: translate(-140px);
			}
			&:nth-of-type(6) {
				transform: translate(-100px);
			}
			&:nth-of-type(4) {
				transform: translate(-60px);
			}
			&:nth-of-type(2) {
				transform: translate(-20px);
			}
		`}
`;
