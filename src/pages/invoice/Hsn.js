import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import ValidationText from "../../utils/validation/ValidationText";

function Hsn() {
  const [search, setSearch] = useState("");
  const [hsnDetail, setHsnDetail] = useState({
    _id: null,
    hsnCode: " ",
    description: " ",
    sgst: null,
    cgst: null,
    igst: null,
    utgst: null,
  });

  const handleChange = (e, field) => {
    setHsnDetail((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const [hsnList, setHsnList] = useState([]);
  return (
    <div className="hsn-page p-[15px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="md:!text-[22px] !text-[20px] text-blue font-[500]">
          HSN
        </h2>
        <div className="flex flex-col gap-[20px]">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-[10px]">
            <div className="flex flex-col">
              <label className="!text-[15px]">HSN Code</label>
              <input
                id="HSNCode"
                type="text"
                value={hsnDetail.hsnCode}
                onChange={(e) => handleChange(e, "hsnCode")}
                // onBlur={() => validationFieldForHsnCode("hsnCode")}
                name="hsnCode"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.hsnCode} /> */}
            </div>
            <div className="flex flex-col">
              <label className="!text-[15px]">HSN description</label>
              <input
                id="HNSCodeDescription"
                type="text"
                value={hsnDetail.description}
                onChange={(e) => handleChange(e, "description")}
                // onBlur={() => validationFieldForHsnCode("description")}
                name="description"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.description} /> */}
            </div>
            <div className="flex flex-col">
              <label className="!text-[15px]">SGST</label>
              <input
                id="SGST"
                type="number"
                value={hsnDetail.sgst}
                onChange={(e) => handleChange(e, "sgst")}
                // onBlur={() => validationFieldForHsnCode("sgst")}
                name="sgst"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.sgst} /> */}
            </div>
            <div className="flex flex-col">
              <label className="!text-[15px]">CGST</label>
              <input
                id="CGST"
                type="number"
                value={hsnDetail.cgst}
                onChange={(e) => handleChange(e, "cgst")}
                // onBlur={() => validationFieldForHsnCode("cgst")}
                name="cgst"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.cgst} /> */}
            </div>
            <div className="flex flex-col">
              <label className="!text-[15px]">IGST</label>
              <input
                id="IGST"
                type="number"
                value={hsnDetail.igst}
                onChange={(e) => handleChange(e, "igst")}
                // onBlur={() => validationFieldForHsnCode("igst")}
                name="igst"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.igst} /> */}
            </div>
            <div className="flex flex-col">
              <label className="!text-[15px]">UTGST</label>
              <input
                id="UTGST"
                type="number"
                value={hsnDetail.utgst}
                onChange={(e) => handleChange(e, "utgst")}
                // onBlur={() => validationFieldForHsnCode("utgst")}
                name="utgst"
                className="w-full h-[35px] border px-3 rounded-md"
              />
              {/* <ValidationText error={hsnValidationState?.error?.utgst} /> */}
            </div>
            <div className="flex items-center gap-[10px] md:mt-[20px]">
              <button
                // onClick={addeditHsn}
                className="h-[38px] w-[40.6px] bg-lightblue text-blue rounded-lg flex items-center justify-center"
              >
                {hsnDetail._id ? (
                  <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
            <div className="flex justify-between my-2 md:mx-5 mx-2">
              <input
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by any field"
                className="h-[40px] lg:w-[40%] md:w-[50%] w-[90%] ffocus-none outline-none border rounded-[5px] px-2"
              />
            </div>
            <DataTable
              value={hsnList}
              paginator
              rows={5}
              tableClassName="w-full whitespace-nowrap"
              className="custom-table"
              emptyMessage="No hsn code available"
              paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{last}"
              globalFilter={search}
              globalFilterFields={["hsnCode", "sgst", "cgst", "utgst", "igst"]}
              scrollable
            >
              <Column
                field="hsnCode"
                header="HSN Code"
                body={(rowData) => (
                  <div className="text-left">{rowData.hsnCode}</div>
                )}
                id="HSNCode"
                sortable
                headerStyle={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="description"
                header="Description"
                body={(rowData) => (
                  <div className="text-left">{rowData.description}</div>
                )}
                id="HNSCodeDescription"
                sortable
                headerStyle={{
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="SGST"
                header="SGST"
                body={(rowData) => (
                  <div className="text-left">{rowData.sgst}</div>
                )}
                id="SGST"
                sortable
                headerStyle={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="CGST"
                header="CGST"
                body={(rowData) => (
                  <div className="text-left">{rowData.cgst}</div>
                )}
                id="CGST"
                sortable
                headerStyle={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="IGST"
                header="IGST"
                body={(rowData) => (
                  <div className="text-left">{rowData.igst}</div>
                )}
                id="IGST"
                sortable
                headerStyle={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="UTGST"
                header="UTGST"
                body={(rowData) => (
                  <div className="text-left">{rowData.utgst}</div>
                )}
                id="UTGST"
                sortable
                headerStyle={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#1e293b",
                }}
                headerClassName="bg-lightblue"
              />
              <Column
                field="actions"
                header="Actions"
                body={(rowData) => (
                  <div className="flex gap-[10px]">
                    <div className="hover:bg-green-100 h-[35px] w-[35px] rounded-full flex justify-center items-center">
                      <button
                        className="table-button table-edit-btn flex justify-center items-center h-full w-full !p-0"
                        title="Edit"
                        // onClick={() => getHsnById(rowData)}
                      >
                        <i className="pi pi-pencil text-green-500 !text-[15px] !leading-none"></i>
                      </button>
                    </div>
                    <div className="hover:bg-red-100 h-[35px] w-[35px] rounded-full flex justify-center items-center">
                      <button
                        // onClick={() => deletehsn(rowData._id)}
                        className="table-button table-delete-btn flex justify-center items-center h-full w-full !p-0"
                        title="Delete"
                      >
                        <i className="pi pi-trash text-red-500 !text-[15px] !leading-none"></i>
                      </button>
                    </div>
                  </div>
                )}
                headerClassName="text-center flex justify-center bg-lightblue"
                bodyClassName="text-center flex justify-center"
                headerStyle={{
                  fontWeight: "600",
                  color: "#1e293b",
                }}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hsn;
