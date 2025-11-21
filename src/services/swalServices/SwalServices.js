import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)
class SwalServices {

    /** Confirm  */
    async Confirm({ title, text, saveBtnText, cancelBtnText }) {
        return (MySwal.fire({
            toast: true,
            position: "top-end",
            timer: 6000,
            html: `
    <div class="swal-content-wrapper confirm-content flex flex-col gap-5">
      <div class="flex items-start gap-5">
        <div class="swal-icon-check w-[30px] aspect-square rounded-[10px] overflow-hidden bg-orange-500 flex items-center justify-center">
          <img src="question.png" alt="Confirm" class="w-[15px] h-[15px]">
        </div>
        <div class="swal-text-area w-[350px]">
          <h3 class="swal-title m-0 mb-[5px]">${title}</h3>
          <p class="swal-message mb-3">${text}</p>
          <div class="swal-btns flex items-center gap-3">
            <button id="custom-confirm-btn" class="confirm-button border-0 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-200">
              ${saveBtnText}
            </button>
            <button id="custom-cancel-btn" class="cancel-button border-0 px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-medium transition duration-200">
              ${cancelBtnText}
            </button>
          </div>
        </div>
        <div class="swal-close-btn text-[25px] cursor-pointer" id="custom-swal-close">
          <i class="fas fa-times !w-full !h-full"></i>
        </div>
      </div>
    </div>
  `,
            customClass: {
                popup: 'confirm-popup',
                container: 'swal-container !w-[500px]',
            },
            allowOutsideClick: false,
            allowEscapeKey: true,
            showConfirmButton: false,
            showCancelButton: false,
            showCloseButton: false,
            buttonsStyling: false,
            showClass: {
                popup: 'swal2-show warn-show !px-[20px] !py-[30px]'
            },
            hideClass: {
                popup: 'swal2-hide warn-hide !px-[20px] !py-[30px]'
            },
            didOpen: () => {
                document.getElementById('custom-swal-close')?.addEventListener('click', () => {
                    MySwal.close();
                });

                document.getElementById('custom-cancel-btn')?.addEventListener('click', () => {
                    MySwal.close({ isDismissedBy: 'cancel' });
                });

                document.getElementById('custom-confirm-btn')?.addEventListener('click', () => {
                    MySwal.clickConfirm();
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                return true;
            } else if (result.isDismissedBy === 'cancel') {
                return false;
            }
        })
        )
    }

    async Warning(text) {
        MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 6000,
            html: `
    <div class="swal-content-wrapper warning-content flex items-start gap-5">
      <div class="swal-icon-check w-[30px] aspect-square rounded-[10px] overflow-hidden bg-orange-500 flex items-center justify-center">
        <img src="warning.png" alt="Warning" class="w-[15px] h-[15px]">
      </div>
      <div class="swal-text-area w-[350px]">
        <h3 class="swal-title m-0 mb-[5px]">Notice</h3>
        <p class="swal-message">Please review the information before proceeding.</p>
      </div>
      <div class="swal-close-btn text-[25px] w- cursor-pointer" id="custom-swal-close">
        <i class="fas fa-times !w-full !h-full"></i>
      </div>
    </div>
  `,
            customClass: {
                popup: 'warning-popup',
                container: 'swal-container !w-[500px]'
            },
            allowOutsideClick: false,
            allowEscapeKey: true,
            didOpen: () => {
                const closeBtn = document.getElementById('custom-swal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        MySwal.close();
                    });
                }
            },
            showClass: {
                popup: 'swal2-show warn-show !px-[20px] !py-[30px]'
            },
            hideClass: {
                popup: 'swal2-hide warn-hide !px-[20px] !py-[30px]'
            }
        });
    }

    async Error(text) {
        MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 6000,
            html: `
    <div class="swal-content-wrapper error-content flex items-start gap-5">
      <div class="swal-icon-check w-[30px] aspect-square rounded-[10px] overflow-hidden bg-red-500 flex items-center justify-center">
        <img src="error.png" alt="Error" class="w-[15px] h-[15px]">
      </div>
      <div class="swal-text-area w-[350px]">
        <h3 class="swal-title m-0 mb-[5px]">Error occurred</h3>
        <p class="swal-message">${text ? text : "Something went wrong. We’ll get back to you soon."}</p>
      </div>
      <div class="swal-close-btn text-[25px] w- cursor-pointer" id="custom-swal-close">
        <i class="fas fa-times !w-full !h-full"></i>
      </div>
    </div>
  `,
            customClass: {
                popup: 'error-popup',
                container: 'swal-container !w-[500px]'
            },
            allowOutsideClick: false,
            allowEscapeKey: true,
            didOpen: () => {
                const closeBtn = document.getElementById('custom-swal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        MySwal.close();
                    });
                }
            },
            showClass: {
                popup: 'swal2-show error-show !px-[20px] !py-[30px]'
            },
            hideClass: {
                popup: 'swal2-hide error-hide !px-[20px] !py-[30px]'
            }
        });
    }


    async Alert(text) {
        MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 6000,
            html: `
    <div class="swal-content-wrapper warning-content flex items-start gap-5">
      <div class="swal-icon-check w-[30px] aspect-square rounded-[10px] overflow-hidden bg-orange-500 flex items-center justify-center">
        <img src="warning.png" alt="Warning" class="w-[15px] h-[15px]">
      </div>
      <div class="swal-text-area w-[350px]">
        <h3 class="swal-title m-0 mb-[5px]">Notice</h3>
        <p class="swal-message">${text}</p>
      </div>
      <div class="swal-close-btn text-[25px] w- cursor-pointer" id="custom-swal-close">
        <i class="fas fa-times !w-full !h-full"></i>
      </div>
    </div>
  `,
            customClass: {
                popup: 'warning-popup',
                container: 'swal-container !w-[500px]'
            },
            allowOutsideClick: false,
            allowEscapeKey: true,
            didOpen: () => {
                const closeBtn = document.getElementById('custom-swal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        MySwal.close();
                    });
                }
            },
            showClass: {
                popup: 'swal2-show warn-show !px-[20px] !py-[30px]'
            },
            hideClass: {
                popup: 'swal2-hide warn-hide !px-[20px] !py-[30px]'
            }
        });
    }

    async showLoginAlert(text) {
        MySwal.fire({
            text: text,
            timer: 6000,
            icon: "warning",
            iconHtml: '<span className="warnning-icons"><img src="/warningtick.png" alt=""/></span>',
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonText: "Login"
        }).then((result) => {
            if (result.value) {
                window.location = "/#/login" + "?redirect=" + window.location.hash
            }
        });
    }

    async Success(text) {
        await MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 6000,
            html: `
    <div class="swal-content-wrapper success-content flex items-start gap-5">
      <div class="swal-icon-check w-[30px] aspect-square rounded-[10px] overflow-hidden bg-green-500 flex items-center justify-center">
        <img src="check.png" alt="success" class="w-[15px] h-[15px]">
      </div>
      <div class="swal-text-area w-[350px]">
        <h3 class="swal-title m-0 mb-[5px]">Success</h3>
        <p class="swal-message">${text}</p>
      </div>
      <div class="swal-close-btn text-[25px] w- cursor-pointer" id="custom-swal-close">
        <i class="fas fa-times !w-full !h-full"></i>
      </div>
    </div>
  `,
            customClass: {
                popup: 'success-popup',
                container: 'swal-container !w-[500px]'
            },
            allowOutsideClick: false,
            allowEscapeKey: true,
            didOpen: () => {
                const closeBtn = document.getElementById('custom-swal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        MySwal.close();
                    });
                }
            },
            showClass: {
                popup: 'swal2-show success-show !px-[20px] !py-[30px]'
            },
            hideClass: {
                popup: 'swal2-hide success-hide !px-[20px] !py-[30px]'
            }
        });
    }


    async Toaster(text) {
        MySwal.fire({
            text: text,
            toast: true,
            icon: "success",
            timer: 6000,
            iconHtml: '<span className="sucess-icons"><img src="/righttike.png" alt=""/></span>',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
        });
    }


    async ThankYou(title, text) {
        MySwal.fire({
            title: title,
            text: text,
            icon: "info",
            iconHtml: '<span className="sucess-icons"><img src="/righttike.png" alt=""/></span>',
            showCancelButton: false,
            allowOutsideClick: false,
            allowEscapeKey: true
        });
    }

    async SuccessWithAction(text, saveBtnText) {
        return (MySwal.fire({
            title: "Success",
            text: text,
            icon: 'success',
            iconHtml: '<span className="sucess-icons"><img src="/righttike.png" alt=""/></span>',
            showCancelButton: false,
            confirmButtonText: saveBtnText,
            showCloseButton: false,
            allowOutsideClick: false,
            allowEscapeKey: true,
        }).then((result) => {
            if (result.value) {
                return true;
            } else if (result.dismiss === MySwal.DismissReason.cancel) {
                return false;
            }
        })
        )
    }

    async ErrorWithAction(text, saveBtnText) {
        return (MySwal.fire({
            title: "",
            text: text,
            icon: 'warning',
            iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png" alt=""/></span>',
            showCancelButton: false,
            confirmButtonText: saveBtnText,
            showCloseButton: false,
            allowOutsideClick: false,
            allowEscapeKey: true,
        }).then((result) => {
            if (result.value) {
                return true;
            } else if (result.dismiss === MySwal.DismissReason.cancel) {
                return false;
            }
        })
        )
    }

    async SuccessdsWithAction(text, saveBtnText) {
        return (MySwal.fire({
            title: "",
            text: text,
            icon: 'warning',
            iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png" alt=""/></span>',
            showCancelButton: false,
            confirmButtonText: saveBtnText,
            showCloseButton: false,
            allowOutsideClick: false,
            allowEscapeKey: true,
        }).then((result) => {
            if (result.value) {
                return true;
            } else if (result.dismiss === MySwal.DismissReason.cancel) {
                return false;
            }
        })
        )
    }
}

export default SwalServices;
