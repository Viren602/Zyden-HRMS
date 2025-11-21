import React from "react";

const ToggleSwitch = ({ checked, onChange, label }) => {
    return (
        <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="sr-only"
                />
                <div
                    className={`w-[50px] h-[28px] rounded-full transition-all duration-300 ease-in-out 
                    ${checked ? 'bg-brown' : 'bg-[#e0e0e0]'}`}
                >
                    <div
                        className={`absolute top-[5px] left-[5px] w-[18px] h-[18px] rounded-full bg-white shadow-md transform transition-all duration-300 ease-in-out
                        ${checked ? 'translate-x-[22px]' : 'translate-x-0'}`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default ToggleSwitch;
