import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import ModalBasic from "../../components/modal/ModalBasic";
import { useNavigate } from "react-router-dom";

function Invoice() {
  const [invoiceList, setInvoiceList] = useState([
    {
      invoiceNo: "1",
      date: "05/10/2025",
      clientName: "Vivek Patel",
      projectName: "ABC",
      subTotal: 4999,
      grandTotal: 5999,
    },
  ]);

  const invoicenoBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.invoiceNo}
    </div>
  );

  const dateBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.date}</div>
  );

  const clientNameBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.clientName}
    </div>
  );

  const projectBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.projectName}
    </div>
  );

  const subtotalBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.subTotal}
    </div>
  );

  const grandTotalBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.grandTotal}
    </div>
  );

  const [invoicePopUpOpen, setInvoicePopUpOpen] = useState(false);
  const setModalOpen = () => {
    setInvoicePopUpOpen(!invoicePopUpOpen);
  };

  const navigate = useNavigate()

  const openInvoiceDetails = () =>{
    navigate("/invoice-detail")
  }

  return (
    <div className="invoice-page px-[15px] pb-[15px]">
      <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
        <div className="my-[20px] px-[20px] flex md:flex-row flex-col w-full gap-[15px] justify-between md:items-center">
          <h2 className="heading text-[#000000]">Invoice List</h2>
          <div className="flex items-center gap-[20px]">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 h-[32px] w-full">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400"
              />

              <InputText
                type="text"
                placeholder="Search here..."
                className="body-text flex-1 outline-none placeholder:text-gray-400 text-gray-700 w-full"
              />
            </div>
            <button
              onClick={setModalOpen}
              className="flex items-center justify-center h-[32px] w-[38px] bg-lightblue text-blue rounded-md hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="">
          <DataTable
            value={invoiceList}
            paginator
            rows={10}
            tableClassName="w-full whitespace-nowrap"
            emptyMessage="No invoice available"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{last}"
            scrollable
            scrollHeight="400px"
          >
            <Column
              field="invoiceNo"
              header="Invoice No"
              body={invoicenoBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="date"
              header="Date"
              body={dateBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="clientName"
              header="Client Name"
              body={clientNameBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="projectName"
              header="Project Name"
              body={projectBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="subtotal"
              header="subtotal"
              body={subtotalBodyTemplate}
              headerStyle={{
                textAlign: "center",
                fontWeight: "500",
                color: "blue",
                fontSize: "16px",
              }}
              headerClassName="bg-lightblue"
            />

            <Column
              field="grandTotal"
              header="Grand Total"
              body={grandTotalBodyTemplate}
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
                      onClick={() => openInvoiceDetails()}
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
        modalOpen={invoicePopUpOpen}
        setModalOpen={() => setModalOpen()}
        title="Invoice Details"
      >
        <section
          className="client-details-page max-h-[80vh] overflow-y-auto bg-white flex flex-col gap-[20]"
          aria-labelledby="client-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col mx-[30px] my-[20px]">
            <div className="grid md:grid-cols-2 gap-[20px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Invoice No</label>
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
                  <label className="label text-[#333333B2]">Date</label>
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
                  <label className="label text-[#333333B2]">Client Name</label>
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
                  <label className="label text-[#333333B2]">Project Name</label>
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
                  <label className="label text-[#333333B2]">Sub Total</label>
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
                  <label className="label text-[#333333B2]">Grand Total</label>
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
                    Address Line 1
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
                    Address Line 2
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
                  <label className="label text-[#333333B2]">Gst</label>
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
                  <label className="label text-[#333333B2]">Hsn Code</label>
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
                  <label className="label text-[#333333B2]">City</label>
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
                  <label className="label text-[#333333B2]">State</label>
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
                  <label className="label text-[#333333B2]">Country</label>
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
                  <label className="label text-[#333333B2]">Total</label>
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
          <div className="py-[20px] bg-gray-100 sticky bottom-0 w-full z-40">
            <div className="flex justify-end gap-[20px] mx-[30px]">
              <button className="prm-btn">Save</button>
              <button onClick={() => setModalOpen()} className="secondary-btn">
                Cancel
              </button>
            </div>
          </div>
        </section>
      </ModalBasic>
    </div>
  );
}

export default Invoice;
