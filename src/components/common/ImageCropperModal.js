import React, { useRef, useState, useEffect } from "react";
import { Cropper } from "react-cropper";
import SwalServices from "../../services/swalServices/SwalServices";
import ModalBasic from "../modal/ModalBasic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";

function ImageCropperModal({
    modalOpen,
    setModalOpen,
    src,
    onConfirm,
    title = "Crop Image (2:3 Aspect Ratio)",
    outputType = "image/webp",
    outputQuality = 0.92,
    maxWidth = 2000,
    maxHeight = 2000,
    handleFileChange,
    props,
}) {
    const cropperRef = useRef(null);
    const [ready, setReady] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (!document.getElementById("cropper-css")) {
            const link = document.createElement("link");
            link.id = "cropper-css";
            link.rel = "stylesheet";
            link.href =
                "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.css";
            document.head.appendChild(link);
        }
    }, []);

    const getCroppedBlob = (callback) => {
        const cropper = cropperRef.current?.cropper;
        if (!cropper) {
            SwalServices.Error("Cropper not initialized properly");
            return;
        }

        const canvas = cropper.getCroppedCanvas({
            maxWidth,
            maxHeight,
            imageSmoothingEnabled: true,
            imageSmoothingQuality: "high",
        });

        if (!canvas) {
            SwalServices.Error("Unable to crop the image. Please try again.");
            return;
        }

        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    SwalServices.Error("Something went wrong while cropping the image.");
                    return;
                }
                callback(blob);
            },
            outputType,
            outputQuality
        );
    };

    const handleConfirm = () => {
        if (isProcessing) return;
        setIsProcessing(true);

        getCroppedBlob((blob) => {
            onConfirm(blob);
            setIsProcessing(false);
            setReady(false);
            setModalOpen(false);
        });
    };

    const handleCancel = () => {
        setReady(false);
        setModalOpen(false);
    };

    const rotate = (deg) => cropperRef.current?.cropper?.rotate(deg);
    const zoom = (ratio) => cropperRef.current?.cropper?.zoom(ratio);
    const reset = () => cropperRef.current?.cropper?.reset();

    const triggerFileDialog = () => fileInputRef.current?.click();

    const onKeyDownTrigger = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            triggerFileDialog();
        }
    };

    return (
        <ModalBasic
            id="image-cropper"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            className="lg:!w-[55%] md:!w-[60%] !w-[90%] !overflow-hidden"
            noCloseIcon={true}
        >
            <div className="heading flex items-start gap-5 justify-between bg-lightbackground p-5 relative">
                <div className="title">
                    <p className="text-[18px] font-medium text-brown">Upload Product Image</p>
                </div>
                <div
                    className="close-btn absolute top-5 right-5 flex items-center justify-center rounded-[5px] bg-brown/20 text-brown hover:bg-brown hover:text-white w-[25px] h-[25px] transition-all duration-300 ease cursor-pointer"
                    onClick={handleCancel}
                    role="button"
                    tabIndex={0}
                >
                    <FontAwesomeIcon icon={faXmark} className="w-[15px] h-[15px]" />
                </div>
            </div>

            <div className="image-vropper p-5">
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />

                {!src ? (
                    <div
                        className="image-upload-sec w-full max-h-[400px] bg-lightbackground rounded-[10px] overflow-hidden border-2 border-dashed border-brown/50 flex items-center justify-center cursor-pointer hover:border-brown/70 transition-all"
                        onClick={triggerFileDialog}
                        onKeyDown={onKeyDownTrigger}
                        role="button"
                        tabIndex={0}
                    >
                        <div className="sample-content flex flex-col items-center justify-center w-[70%] text-center">
                            <FontAwesomeIcon
                                icon={faImage}
                                className="text-brown/80 w-[50px] h-[50px] mb-3"
                            />
                            <p className="text-[16px] text-brown/80 font-medium mt-[5px]">
                                Click to select an image
                            </p>
                            <p className="text-[14px] text-brown/60 mt-2">
                                Upload your shop image or logo (2:3 ratio)
                            </p>
                            <p className="text-[12px] text-brown/50 mt-1">
                                Accepted formats: JPEG, PNG, WEBP (Max 2MB)
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-h-[400px] overflow-hidden">
                        <Cropper
                            src={src}
                            aspectRatio={2 / 3}
                            guides
                            viewMode={1}
                            dragMode="move"
                            autoCropArea={1}
                            background={false}
                            responsive
                            checkOrientation
                            ref={cropperRef}
                            ready={() => setReady(true)}
                        />
                    </div>
                )}

                {/* <div className="mt-4 flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => rotate(-90)}
                        disabled={!ready || isProcessing}
                        className="rounded-md border px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Rotate -90°
                    </button>
                    <button
                        onClick={() => rotate(90)}
                        disabled={!ready || isProcessing}
                        className="rounded-md border px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Rotate +90°
                    </button>
                    <button
                        onClick={() => zoom(0.1)}
                        disabled={!ready || isProcessing}
                        className="rounded-md border px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Zoom In
                    </button>
                    <button
                        onClick={() => zoom(-0.1)}
                        disabled={!ready || isProcessing}
                        className="rounded-md border px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Zoom Out
                    </button>
                    <button
                        onClick={reset}
                        disabled={!ready || isProcessing}
                        className="ml-auto rounded-md border px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Reset
                    </button>
                </div> */}

            </div>
            <div className="cropper-btns p-5 pt-2.5 flex items-center justify-end gap-2">
                <button
                    onClick={handleCancel}
                    disabled={isProcessing}
                    className="rounded-lg px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Cancel
                </button>
                <button
                    onClick={handleConfirm}
                    disabled={!src || !ready || isProcessing}
                    className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isProcessing ? "Processing..." : "Crop & Save"}
                </button>
            </div>
        </ModalBasic>
    );
}

export default ImageCropperModal;