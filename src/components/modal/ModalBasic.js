import React, { useRef, useEffect } from "react";
import Transition from "../../utils/Transition";

function ModalBasic({
  children,
  id,
  className,
  title,
  modalOpen,
  setModalOpen,
  noCloseIcon,
  btnClass,
  scrollPopUp = false,
}) {
  const modalContent = useRef(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!modalOpen || modalContent.current.contains(target)) return
  //     setModalOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  useEffect(() => {
    if (modalContent.current) {
      modalContent.current.scrollTop = 0;
      modalContent.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollPopUp]);

  // close if the esc key is pressed
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // restore scroll
    }

    // cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className={`bg-white rounded-[14px] shadow-normalShadow w-full relative max-h-full main-model-sec overflow-visible ${className}`}
        >
          {/* Modal header */}
          <div
            className={`py-[20px] px-[30px] modal-top-title-sections flex justify-between items-center border-b border-[#e6e6e6] ${btnClass}`}
          >
            <h2 className={`heading theme-color font-bold`}>{title}</h2>
            {noCloseIcon === true ? null : (
              <button
                className="h-[30px] w-[30px] flex justify-center items-center bg-[#e6e6e6]/40 rounded-[5px] border border-[#e6e6e6] hover:bg-[#e6e6e6] transition duration-300 ease"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
              >
                <div className="sr-only">Close</div>
                <i className="fi fi-rr-cross-small text-[18px] h-[18px] leading-tight" />
              </button>
            )}
          </div>
          {children}
        </div>
      </Transition>
    </>
  );
}
export default ModalBasic;
