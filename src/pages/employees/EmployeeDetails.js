import {
  faArrowLeft,
  faCircle,
  faLocation,
  faMailBulk,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Selector from "../../components/dropdown/CustomDropDown";

function EmployeeDetails() {
  const [maritalStatusList, setMaritalStatusList] = useState([
    { label: "Single", value: 1 },
    { label: "Married", value: 2 },
  ]);

  const [departmentList, setDepartmentList] = useState([
    { label: "Management", value: 1 },
    { label: "Development", value: 2 },
    { label: "Designer", value: 3 },
  ]);

  const [positionList, setPositionList] = useState([
    { label: "Frontend Developer", value: 1 },
    { label: "Testing", value: 2 },
    { label: "Backend Developer", value: 3 },
  ]);

  const [employeeDetails, setemployeeDetails] = useState({
    _id: null,
    maritalStatus: "",
  });

  const navigate = useNavigate();

  const backPage = () => {
    navigate("/employee");
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDropdownChange = (selectedOption) => {
    setemployeeDetails((prev) => ({
      ...prev,
      stateId: selectedOption ? selectedOption.value : 0,
    }));
  };

  const [tab, setTab] = useState("general");

  return (
    <div className="employeeDetail-page p-[15px] h-full">
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[20px] items-center">
          <button
            onClick={() => backPage()}
            className="h-[30px] w-[32px] flex items-center justify-center border border-[#E6E6E6E5] rounded-[5px] hover:bg-gray-50 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-[15px] !leading-tight text-[#333333]"
            />
          </button>
          <h2 className="heading">Employee Details</h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[20px] gap-[35px]">
          <div className="rounded-[20px] border border-[#E6E6E6E5] h-[381px]">
            <div className="flex flex-col justify-center items-center py-[30px] border-b">
              <div className="flex flex-col gap-[15px]">
                <div className="rounded-full flex justify-center items-center">
                  <img
                    src="profile-logo.jpg"
                    className="h-[100px] w-[100px] rounded-full"
                  />
                </div>
                <h2 className="heading text-[#333333]">Zyden IT Solutions</h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <span className="body-text text-[#33333366] mt-[5px]">
                  Designation
                </span>
                <button className="label text-[#333333] flex items-center rounded-[10px] justify-center gap-[5px] border h-[26px] w-[65px]">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="body-text h-[6px] w-[6px] text-[#1FC16B]"
                  />
                  Active
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mx-[30px] my-[20px]">
              <div className="flex gap-[10px] items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#2563EB] h-[14.61px] w-[14.61px]"
                />
                <span className="text-[14px] text-[#333333]">
                  +91 9876543210
                </span>
              </div>
              <div className="flex gap-[10px] items-center">
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="text-[#2563EB] h-[14.61px] w-[14.61px]"
                />
                <span className="text-[14px] text-[#333333]">
                  dummy@gmail.com
                </span>
              </div>
              <div className="flex gap-[10px] items-center">
                <FontAwesomeIcon
                  icon={faLocation}
                  className="text-[#2563EB] h-[14.61px] w-[14.61px]"
                />
                <span className="text-[14px] text-[#333333]">
                  Ahmedabad, Gujarat
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-2">
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[15px]">
                <button
                  onClick={() => setTab("general")}
                  className={`h-[38px] w-[110px] rounded-[5px] hover:bg-blue hover:text-white text-[14px] font-[400]  ${
                    tab === "general"
                      ? "bg-blue text-white"
                      : "hover:bg-blue hover:text-white"
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setTab("work")}
                  className={`h-[38px] w-[110px] rounded-[5px] hover:bg-blue hover:text-white text-[14px] font-[400] ${
                    tab === "work"
                      ? "bg-blue text-white"
                      : "hover:bg-blue hover:text-white"
                  }`}
                >
                  Work Details
                </button>
                <button
                  onClick={() => setTab("documents")}
                  className={`h-[38px] w-[105px] rounded-[5px] hover:bg-blue hover:text-white text-[14px] font-[400] ${
                    tab === "documents"
                      ? "bg-blue text-white"
                      : "hover:bg-blue hover:text-white"
                  }`}
                >
                  Documents
                </button>
              </div>
              <div className="border max-h-[798px] border-[#E6E6E6E5] rounded-[20px] ">
                {tab === "general" && (
                  <div className="p-[20px]">
                    <div className="flex flex-col gap-[10px]">
                      <h2 className="heading border-b-[1px] border-[#E6E6E6E5] pb-[10px]">
                        Personal Information
                      </h2>
                      <div
                        className="client-details-page relative max-h-[85vh] overflow-y-auto pr-3 overflow-x-hidden bg-white flex flex-col gap-[20] py-[10px]"
                        aria-labelledby="client-title"
                        role="dialog"
                        aria-modal="true"
                      >
                        <div className="relative">
                          {!image && (
                            <label
                              htmlFor="uploadImage"
                              className="h-[130px] w-[130px] border-[2px] border-dashed border-[#2563EB33] rounded-[10px] flex gap-[5px] flex-col items-center justify-center cursor-pointer"
                            >
                              <div className="h-[40px] w-[40px] bg-[#2563EB1A] rounded-full flex justify-center items-center">
                                <img
                                  src="/fi-rr-camera.png"
                                  className="h-[16px] opacity-40 text-[#2563EB4D]"
                                />
                              </div>
                              <p className="label text-[#2563EB4D]">
                                Upload Your Image
                              </p>
                            </label>
                          )}

                          {image && (
                            <div className="relative">
                              <img
                                src={image}
                                className="h-[130px] w-[130px] object-cover rounded-md"
                              />

                              <button
                                onClick={() => setImage(null)}
                                className="absolute shadow-[0px_2px_8px_rgba(99,99,99,0.2)] bg-white top-[-4px] left-[116px] border rounded-full flex justify-center items-center h-[20px] w-[20px]"
                              >
                                <FontAwesomeIcon
                                  icon={faXmark}
                                  className="text-red-500 text-[20px] h-[12px] w-[12px]"
                                />
                              </button>
                            </div>
                          )}

                          <input
                            type="file"
                            id="uploadImage"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </div>
                        <section
                          className="client-details-page flex flex-col gap-[40]"
                          aria-labelledby="client-title"
                          role="dialog"
                          aria-modal="true"
                        >
                          <div className="flex flex-col my-[20px]">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] items-start">
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    First Name
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Last Name
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Email
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="email"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Mobile No.
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="number"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Gender
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Date of Birth
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="date"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Marital Status
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <Selector
                                  options={maritalStatusList}
                                  type="text"
                                  name="maritalStatus"
                                  id="maritalStatus"
                                  onChange={(selected) =>
                                    handleDropdownChange(
                                      selected,
                                      "maritalStatus"
                                    )
                                  }
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Date Of Marraige
                                </label>
                                <InputText
                                  type="date"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Address Line 1
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Address Line 2
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  City
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  State
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Pincode
                                </label>
                                <InputText
                                  type="number"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Country
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h2 className="heading border-b-[1px] border-[#E6E6E6E5] pb-[10px]">
                              Emergency Contact Details
                            </h2>
                            <div className="grid md:grid-cols-3 gap-[20px] items-start my-[20px]">
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Contact Person Name
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-[1px]">
                                  <label className="label text-[#333333B2]">
                                    Contact No.
                                  </label>
                                  <span className="label text-red-500 rotate-12 leading-none">
                                    *
                                  </span>
                                </div>
                                <InputText
                                  type="number"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                )}

                {tab === "work" && (
                  <div className="p-[20px]">
                    <div className="flex flex-col gap-[10px]">
                      <h2 className="heading border-b-[1px] border-[#E6E6E6E5] pb-[10px]">
                        Employee Information
                      </h2>
                      <div
                        className="client-details-page relative max-h-[85vh] overflow-y-auto pr-3 overflow-x-hidden bg-white flex flex-col gap-[20] py-[10px]"
                        aria-labelledby="client-title"
                        role="dialog"
                        aria-modal="true"
                      >
                        <section
                          className="client-details-page flex flex-col gap-[40]"
                          aria-labelledby="client-title"
                          role="dialog"
                          aria-modal="true"
                        >
                          <div className="flex flex-col my-[20px]">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] items-start">
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Employee ID
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Join Date
                                </label>
                                <InputText
                                  type="date"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Department
                                </label>
                                <Selector
                                  options={departmentList}
                                  type="text"
                                  name="department"
                                  id="department"
                                  onChange={(selected) =>
                                    handleDropdownChange(selected, "department")
                                  }
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Job Title
                                </label>
                                <InputText
                                  type="text"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Position
                                </label>
                                <Selector
                                  options={positionList}
                                  type="text"
                                  name="position"
                                  id="position"
                                  onChange={(selected) =>
                                    handleDropdownChange(selected, "position")
                                  }
                                />
                              </div>
                              <div className="flex flex-col">
                                <label className="label text-[#333333B2]">
                                  Work Email
                                </label>
                                <InputText
                                  type="email"
                                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                )}

                {tab === "documents" && (
                  <div className="p-[20px]">
                    <div className="flex justify-between border-b-[1px] border-[#E6E6E6E5] pb-[10px]">
                      <h2 className="heading">Documents</h2>
                      <button className="text-body h-[30px] w-[134px] bg-[#2563EB1A] text-blue rounded-[5px]">
                        Add Documents
                      </button>
                    </div>
                  </div>
                )}
                <div className="py-[20px] h-[76px] bg-gray-100 w-full z-40 overflow-hidden rounded-b-[20px]">
                  <div className="flex justify-end gap-[20px] mx-[30px]">
                    <button className="prm-btn">Save</button>
                    <button className="secondary-btn">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails ;
