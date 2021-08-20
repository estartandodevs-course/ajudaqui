import { createContext, useState } from "react";

const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(<></>);
  const [isOpen, setIsOpen] = useState(false);
  const [modalHandlers, setModalHandlers] = useState({ agreen: () => {}, disAgree: () => {} });

  return (
    <Provider value={{
      modalContent,
      setModalContent,
      isOpen,
      setIsOpen,
      modalHandlers,
      setModalHandlers,
    }}
    >
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };

