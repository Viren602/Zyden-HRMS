import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import ModalBasic from "../../components/modal/ModalBasic";

function Expenses() {
  const [expenseList, setExpensetList] = useState([
    {
      expenseNo: "House Of Fashion",
      date: "05/10/2025",
      expenseName: "ABC",
      subTotal: "ABC",
      grandTotal: "ABC",
    },
  ]);

  const expenseNoBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.expenseNo}
    </div>
  );

  const dateBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">{rowData.date}</div>
  );

  const expenseNameBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.expenseName}
    </div>
  );

  const subTotalBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.subTotal}
    </div>
  );

  const grandTotalBodyTemplate = (rowData, options) => (
    <div className="body-text !text-[#333333] text-left">
      {rowData.grandTotal}
    </div>
  );

  const [expensePopUpOpen, setExpensePopUpOpen] = useState(false);
  const setModalOpen = () => {
    setExpensePopUpOpen(!expensePopUpOpen);
  };

  return (
    <div className="expenses-page p-[15px]">
      <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
        <div className="p-[15px] md:flex justify-between">
          <h2 className="heading text-[#000000]">Expense List</h2>
          <div className="relative flex gap-[20px] justify-center items-center">
            <InputText
              placeholder="Search here"
              className="body-text p-inputtext-sm placeholder:font-light
               placeholder:text-gray-400 py-[6px] px-[40px] font-normal border ffocus:border-none focus:outline-none shadow-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute h-[20px] w-[20px] left-[10px] top-[7px] text-gray-400 body-text"
            />
            <button
              onClick={() => setModalOpen()}
              className="bg-lightblue rounded-[5px] h-[32px] w-[32px] text-blue flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faPlus} className="text-[16px]" />
            </button>
          </div>
        </div>
        <div className="">
          <DataTable
            value={expenseList}
            paginator
            rows={10}
            tableClassName="w-full whitespace-nowrap"
            emptyMessage="No expense available"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{last}"
            scrollable
            scrollHeight="400px"
          >
            <Column
              field="expenseNo"
              header="Expense No"
              body={expenseNoBodyTemplate}
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
              field="expenseName,"
              header="Expense Name"
              body={expenseNameBodyTemplate}
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
              body={subTotalBodyTemplate}
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
        modalOpen={expensePopUpOpen}
        setModalOpen={() => setModalOpen()}
        title="Expense Details"
      >
        <section
          className="client-details-page max-h-[85vh] overflow-y-auto bg-white flex flex-col gap-[20]"
          aria-labelledby="client-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col mx-[30px] my-[20px]">
            <div className="grid md:grid-cols-2 gap-[20px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-[1px]">
                  <label className="label text-[#333333B2]">Expense No</label>
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
                  <label className="label text-[#333333B2]">expense name</label>
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

export default Expenses;
