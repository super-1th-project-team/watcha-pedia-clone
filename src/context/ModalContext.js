import { createContext, useState } from 'react';

const ModalContext = createContext({
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	imgUrl: '',
	url: () => {},
});

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [imgUrl, setImgUrl] = useState('');

	const openModalHandler = () => {
		setModalOpen(true);
	};

	const closeModalHandler = () => {
		setModalOpen(false);
	};

	const urlHandler = (img) => {
		setImgUrl(img.url);
	};

	return (
		<ModalContext.Provider
			value={{
				isModalOpen: isModalOpen,
				imgUrl: imgUrl,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				url: urlHandler,
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
