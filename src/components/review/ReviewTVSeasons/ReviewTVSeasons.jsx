import { styled } from 'styled-components';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { useSelector } from 'react-redux';

const ReviewTVSeasons = () => {
	const tyDayTrendData = useSelector((state) => state.tvSeasons.tvDayTrend);

	return (
		<ReviewWrapper>
			<ReviewHeader />
			<ReviewList data={tyDayTrendData} type="tvSeasons" />
		</ReviewWrapper>
	);
};

export default ReviewTVSeasons;

const ReviewWrapper = styled.div`
	margin: 30px auto;
	width: 640px;
	border: 1px solid var(--color-light-gray);
	border-radius: 5px;
	overflow: hidden;
`;
