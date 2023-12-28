import { createContext, useContext, useState, cloneElement, useRef, useEffect } from "react"
import Overlay from "./Overlay";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

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

  const ref = useOutsideClick(close);
  if (openModal !== name ) return null;

  return createPortal (
    <Overlay >
      <div ref={ref} className="p-4 shadow-lg my-10 fixed z-10 w-[90%] md:w-[60%] left-[50%] translate-x-[-50%]  top-[5%]  bg-white transition-all delay-75">
        <button className="w-full flex justify-end" >
          <HiOutlineXMark className="text-2xl cursor-pointer" onClick={close} />
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