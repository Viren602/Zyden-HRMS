import React, { useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

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
      modalContent.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [scrollPopUp]);

  // close if the esc key is pressed
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";   // disable scroll
    } else {
      document.body.style.overflow = "";         // restore scroll
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
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
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
        <div ref={modalContent} className={`bg-white rounded-[14px] shadow-normalShadow w-full relative max-h-full main-model-sec overflow-visible ${className}`}>
          {/* Modal header */}
          <div className={`absolute top-[15px] right-[15px] modal-top-title-sections ${btnClass}`}>
            <div className="flex justify-between items-center">
              <div className={`table-title-txt ${noCloseIcon === true ? "text-center" : null} theme-color font-bold`}>{title}</div>
              {
                noCloseIcon === true ?
                  null :
                  (<button className="h-[30px] w-[30px] p-[5px] flex items-center justify-center text-[#757575] hover:text-[#3a3a3a] rounded-full close-button" onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}>
                    <div className="sr-only">Close</div>
                    <svg className="!w-5 !h-[15px] fill-current">
                      <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                    </svg>
                  </button>)
              }
            </div>
          </div>
          {children}
        </div>
      </Transition>
    </>
  );
}
export default ModalBasic;
