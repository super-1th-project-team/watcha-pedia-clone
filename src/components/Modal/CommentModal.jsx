import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';
import { CModal, CrossBTN, SummitBTN, Title } from './Modal.style';

const CommentModal = ({ selectedItem, type, closeModal }) => {
	return (
		<CModal>
			<Title>
				<h2>{type === 'tvSeasons' ? selectedItem.name : selectedItem.title}</h2>
			</Title>
			<CrossBTN onClick={closeModal}>
				<RxCross2 size={20} />
			</CrossBTN>
			<textarea placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요." />
			<SummitBTN>
				<button onClick={closeModal}>저장</button>
			</SummitBTN>
		</CModal>
	);
};

export default CommentModal;

CommentModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	selectedItem: PropTypes.object,
	type: PropTypes.string.isRequired,
	itemId: PropTypes.number.isRequired,
};
