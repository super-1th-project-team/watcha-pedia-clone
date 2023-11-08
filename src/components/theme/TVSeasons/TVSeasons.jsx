import { useDispatch, useSelector } from 'react-redux';
import { TvBody, TvContent, TvTitle } from './TVSeasons.style';
import MainSwiper from '../../swiper/MainSwiper/MainSwiper';
import { useNavigate } from 'react-router-dom';
import { CHECK_TV_PAGE } from '../../../slice/tvSeasonsSlice';

const TVSeasons = () => {
	const tyDayTrendData = useSelector((state) => state.tvSeasons.tvDayTrend);

	const navigate = useNavigate();

	const moveToContentsPage = (id) => {
		navigate(`/contents/${id}`);
	};

	return (
		<TvBody>
			<TvContent>
				<MainSwiper
					dataTitle="일일 트렌드"
					fetchData={tyDayTrendData}
					movePageFunc={moveToContentsPage}
				/>
			</TvContent>
		</TvBody>
	);
};

export default TVSeasons;
