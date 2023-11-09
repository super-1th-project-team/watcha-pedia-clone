import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { useSelector } from 'react-redux';
import { ReviewWrapper } from '../styles/ReviewPage.style';

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
