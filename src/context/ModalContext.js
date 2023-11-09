import { createContext, useState } from 'react';

const ModalContext = createContext({
	isImg: false,
	isModalOpen: false,
	openModal: () => {},
	closeModal: () => {},
	imgUrl: '',
  url: () => {}
});

export const ModalProvider = ({ children }) => {
	const [isImg, setIsImg] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false);
	const [imgUrl, setImgUrl] = useState('');

	const openModalHandler = () => {
		setModalOpen(true);
	};

	const closeModalHandler = () => {
		setModalOpen(false);
	};

	const urlHandler = (url) => {
		setImgUrl(url);
	};


	return (
		<ModalContext.Provider
			value={{
				isImg: isImg,
				setIsImg: setIsImg,
				isModalOpen: isModalOpen,
				imgUrl: imgUrl,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
        url: urlHandler
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
