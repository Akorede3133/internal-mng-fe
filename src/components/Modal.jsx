import { createContext, useContext, useState, cloneElement } from "react"
import Overlay from "./Overlay";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState('');
  const close = () => setOpenModal('')
  const open = setOpenModal;
  return (
    <ModalContext.Provider value={{
      open,
      close,
      openModal
    }}>{children}</ModalContext.Provider>
  )
}

const Open = ( { children, opens } ) => {
  const { open, openModal } = useContext(ModalContext)
  return (
    <div className="flex justify-center">
      { cloneElement(children, { onClick: () => (open(opens)) }) }
    </div>
  )
}

const Window = ({ children, name }) => {
  const { openModal, close } = useContext(ModalContext)
  if (openModal !== name ) return null;

  return createPortal (
    <Overlay >
      <div className="p-4 shadow-lg my-10 fixed z-10 w-[90%] md:w-[60%] left-[50%] translate-x-[-50%]  top-[5%]  bg-white transition-all delay-75">
        <button className="w-full flex justify-end" onClick={close}>
          <HiOutlineXMark className=" text-2xl cursor-pointer" />
        </button>
        {cloneElement(children, { onCloseModal: close }) }
      </div>
    </Overlay>,
    document.body
  )
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal