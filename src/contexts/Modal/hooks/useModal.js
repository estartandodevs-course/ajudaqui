import { useContext } from "react";
import { ModalContext } from "..";

export const useModal = () => {
  const {
    modalContent, setModalContent, setIsOpen, setModalHandlers, isOpen,
  } = useContext(ModalContext);

  const showModal = (component, handlers) => {
    setModalContent(component);
    setIsOpen(true);
    setModalHandlers(handlers);
  };

  return { modalContent, isOpen, showModal };
};
