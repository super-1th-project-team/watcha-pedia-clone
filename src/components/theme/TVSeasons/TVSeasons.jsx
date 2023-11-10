import { useDispatch, useSelector } from 'react-redux';
import { TvBody, TvContent, TvTitle } from './TVSeasons.style';
import MainSwiper from '../../swiper/MainSwiper/MainSwiper';
import { useNavigate } from 'react-router-dom';
import { CHECK_TV_PAGE } from '../../../slice/tvSeasonsSlice';

const TVSeasons = () => {
	const tvDayTrendData = useSelector((state) => state.tvSeasons.tvDayTrend);
	const tvWeekTrendData = useSelector((state) => state.tvSeasons.tvWeekTrend);
	const tvOnTheAir = useSelector((state) => state.tvSeasons.tvOnTheAir);
	const tvPopular = useSelector((state) => state.tvSeasons.tvPopular);
	const tvAction = useSelector((state) => state.tvSeasons.tvAction);
	const tvAnimation = useSelector((state) => state.tvSeasons.tvAnimation);
	const tvKids = useSelector((state) => state.tvSeasons.tvKids);

	const navigate = useNavigate();

	const moveToContentsPage = (id) => {
		navigate(`/contents/${id}`);
	};

	return (
		<TvBody>
			<TvContent>
				<MainSwiper
					dataTitle="일일 트렌드 순위"
					fetchData={tvDayTrendData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="주간 트렌드 순위"
					fetchData={tvWeekTrendData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="현재 방송중 순위"
					fetchData={tvOnTheAir}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="역대 명작 순위"
					fetchData={tvPopular}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="액션 순위"
					fetchData={tvAction}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="애니메이션 순위"
					fetchData={tvAnimation}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="Kids"
					fetchData={tvKids}
					movePageFunc={moveToContentsPage}
				/>
			</TvContent>
		</TvBody>
	);
};

export default TVSeasons;
