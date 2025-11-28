import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TextInput from "../../components/common/TextInput";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import "primeicons/primeicons.css";
import ModalBasic from "../../components/modal/ModalBasic";

function Clients() {
  const [clientList, setClientList] = useState([
    {
      clientName: "Vivek Patel",
      companyName: "It Solutions",
      mobileNo: 7874188729,
      city: "Surat",
      state: "Gujarat",
      country: "India",
    },
  ]);

  const clientBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.clientName}
    </div>
  );

  const companyBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.companyName}
    </div>
  );

  const mobileNoBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.mobileNo}
    </div>
  );

  const cityBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.city}</div>
  );

  const stateBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.state}</div>
  );

  const countryBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.country}</div>
  );

  const [clientPopUpOpen, setClientPopUpOpen] = useState(false);
  const setModalOpen = () => {
    setClientPopUpOpen(!clientPopUpOpen);
  };

  return (
    <div className="clients-page p-[15px]">
      <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
        <div className="my-[20px] px-[20px] flex md:flex-row flex-col w-full gap-[15px] justify-between md:items-center">
          <h2 className="heading text-[#000000]">Clients List</h2>
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
            value={clientList}
            paginator
            rows={10}
            tableClassName="w-full whitespace-nowrap"
            emptyMessage="No clients available"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{last}"
            scrollable
            scrollHeight="400px"
          >
            <Column
              field="clientName"
              header="Client Name"
              body={clientBodyTemplate}
              headerStyle={{
                textAlign: "left",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="companyName"
              header="Company Name"
              body={companyBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="mobileNo"
              header="Mobile No"
              body={mobileNoBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="city"
              header="City"
              body={cityBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="state"
              header="State"
              body={stateBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="country"
              header="Country"
              body={countryBodyTemplate}
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
        modalOpen={clientPopUpOpen}
        setModalOpen={() => setModalOpen()}
        title="Client Details"
      >
        <section
          className="client-details-page max-h-[75vh] overflow-y-auto bg-white flex flex-col gap-[20]"
          aria-labelledby="client-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col mx-[30px] my-[20px]">
            <div className="grid md:grid-cols-2 gap-[20px]">
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
                  <label className="label text-[#333333B2]">Company Name</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Email</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Mobile No</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>

                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">
                    Address Line 1
                  </label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">
                    Address Line 2
                  </label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">City</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">State</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Country</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Pincode</label>
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
                  <label className="label text-[#333333B2]">GST No</label>
                  <span className="label text-red-500 rotate-12 leading-none">
                    *
                  </span>
                </div>
                <InputText
                  type="number"
                  style={{ MozAppearance: "textfield" }}
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

export default Clients;
