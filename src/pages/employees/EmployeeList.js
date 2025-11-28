import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import ModalBasic from "../../components/modal/ModalBasic";

function EmployeeList() {
  const [employeeList, setEmployeetList] = useState([
    {
      employeeName: "Ritesh Patel",
      joiningDate: "20/11/2025",
      role: "web Development",
      jobTitle: "Designer",
    },
  ]);

  const employeeBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.employeeName}
    </div>
  );

  const joiningDateBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.joiningDate}
    </div>
  );

  const roleBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.role}</div>
  );

  const jobTitleBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.jobTitle}
    </div>
  );

  const [employeePopUpOpen, setEmployeePopUpOpen] = useState(false);
  const setModalOpen = () => {
    setEmployeePopUpOpen(!employeePopUpOpen);
  };
  return (
    <div className="employee-page p-[15px]">
      <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
        <div className="my-[20px] px-[20px] flex md:flex-row flex-col w-full gap-[15px] justify-between md:items-center">
          <h2 className="heading text-[#000000]">Employee List</h2>
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 h-[32px] w-full">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400"
              />

              <InputText
                type="text"
                placeholder="Search here..."
                className="flex-1 outline-none placeholder:text-gray-400 text-gray-700 w-full"
              />
            </div>
            <button className="flex items-center justify-center h-[32px] w-[38px] bg-lightblue text-blue rounded-md hover:bg-blue-600">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="">
          <DataTable
            value={employeeList}
            paginator
            rows={10}
            tableClassName="w-full whitespace-nowrap"
            emptyMessage="No employee available"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{last}"
            scrollable
            scrollHeight="400px"
          >
            <Column
              field="employeeName"
              header="Employee Name"
              body={employeeBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="joiningDate"
              header="Joining Date"
              body={joiningDateBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="role"
              header="Role"
              body={roleBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="jobTitle"
              header="Job Title"
              body={jobTitleBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="actions"
              header="Actions"
              body={(rowData) => (
                <div className="flex gap-[10px] justify-center">
                  <button
                    className="hover:bg-green-100 h-[35px] w-[35px] rounded-[12px] flex justify-center items-center"
                    title="Edit"
                    //   onClick={() => navigateWithCompanyId(rowData)}
                  >
                    <i className="pi pi-pencil text-green-500 !text-[15px] !leading-none"></i>
                  </button>

                  <button
                    className="hover:bg-red-100 h-[35px] w-[35px] rounded-[12px] flex justify-center items-center"
                    title="Delete"
                    //   onClick={() => deleteCompany(rowData._id)}
                  >
                    <i className="pi pi-trash text-red-500 !text-[15px] !leading-none"></i>
                  </button>
                </div>
              )}
              headerClassName="flex justify-center bg-lightblue"
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
            />
          </DataTable>
        </div>
      </div>
      <ModalBasic
        className="!overflow-hidden max-w-[860px]"
        modalOpen={employeePopUpOpen}
        setModalOpen={() => setModalOpen()}
        title="Employee Details"
      >
        <section
          className="client-details-page max-h-[85vh] overflow-y-auto bg-white flex flex-col gap-[20]"
          aria-labelledby="client-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col mx-[30px] my-[20px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">
                    Employee Name
                  </label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Client Name</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Start Date</label>
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
                  <label className="label text-[#333333B2]">End Date</label>
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
                  <label className="label text-[#333333B2]">Status</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText
                  type="text"
                  className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="py-[20px] bg-gray-100 sticky bottom-0 w-full z-40">
            <div className="flex justify-end gap-[20px] mx-[30px]">
              <button className="prm-btn">Save</button>
              <button className="secondary-btn">Cancel</button>
            </div>
          </div>
        </section>
      </ModalBasic>
    </div>
  );
}

export default EmployeeList;
