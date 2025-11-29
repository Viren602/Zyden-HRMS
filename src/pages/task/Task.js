// import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Column } from "primereact/column";
// import { DataTable } from "primereact/datatable";
// import { InputText } from "primereact/inputtext";
// import React, { useState } from "react";
// import ModalBasic from "../../components/modal/ModalBasic";

// function Task() {
//   const [taskList, setTasktList] = useState([
//     {
//       taskName: "House Of Fashion",
//       status: "Pending",
//       date: "05/10/2025",
//       assignee: "ABC",
//       project: "ABC",
//       priority: "ABC",
//       discription: "hello my name is...",
//     },
//   ]);

//   const taskBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">
//       {rowData.taskName}
//     </div>
//   );

//   const statusBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">{rowData.status}</div>
//   );

//   const DateBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">{rowData.date}</div>
//   );

//   const assigneeBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">
//       {rowData.assignee}
//     </div>
//   );

//   const projectBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">{rowData.project}</div>
//   );

//   const priorityBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">
//       {rowData.priority}
//     </div>
//   );

//   const discriptionBodyTemplate = (rowData, options) => (
//     <div className="body-text !text-[#333333] text-left">
//       {rowData.discription}
//     </div>
//   );

//   const [taskPopUpOpen, setTaskPopUpOpen] = useState(false);
//   const setModalOpen = () => {
//     setTaskPopUpOpen(!taskPopUpOpen);
//   };
//   return (
//     <div className="task-page p-[15px]">
//       <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-2xl overflow-hidden">
//         <div className="p-[15px] md:flex justify-between">
//           <h2 className="heading text-[#000000]">Task List</h2>
//           <div className="relative flex gap-[20px] justify-center items-center">
//             <InputText
//               placeholder="Search here"
//               className="body-text p-inputtext-sm placeholder:font-light
//                placeholder:text-gray-400 py-[6px] px-[40px] font-normal border ffocus:border-none focus:outline-none shadow-none"
//             />
//             <FontAwesomeIcon
//               icon={faMagnifyingGlass}
//               className="absolute h-[20px] w-[20px] left-[10px] top-[7px] text-gray-400 body-text"
//             />
//             <button
//               onClick={() => setModalOpen()}
//               className="bg-lightblue rounded-[5px] h-[32px] w-[32px] text-blue flex justify-center items-center"
//             >
//               <FontAwesomeIcon icon={faPlus} className="text-[16px]" />
//             </button>
//           </div>
//         </div>
//         <div className="">
//           <DataTable
//             value={taskList}
//             paginator
//             rows={10}
//             tableClassName="w-full whitespace-nowrap"
//             emptyMessage="No tasks available"
//             paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
//             currentPageReportTemplate="{last}"
//             scrollable
//             scrollHeight="400px"
//           >
//             <Column
//               field="taskName"
//               header="Task Name"
//               body={taskBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="status"
//               header="Status"
//               body={statusBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="date"
//               header="Date"
//               body={DateBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="assignee"
//               header="Assignee"
//               body={assigneeBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="project"
//               header="Project"
//               body={projectBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="priority"
//               header="priority"
//               body={priorityBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="discription"
//               header="discription"
//               body={discriptionBodyTemplate}
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//               headerClassName="bg-lightblue"
//             />

//             <Column
//               field="actions"
//               header="Actions"
//               body={(rowData) => (
//                 <div className="flex gap-[10px] justify-center">
//                   <button
//                     className="hover:bg-green-100 h-[35px] w-[35px] rounded-[12px] flex justify-center items-center"
//                     title="Edit"
//                     //   onClick={() => navigateWithCompanyId(rowData)}
//                   >
//                     <i className="pi pi-pencil text-green-500 !text-[15px] !leading-none"></i>
//                   </button>

//                   <button
//                     className="hover:bg-red-100 h-[35px] w-[35px] rounded-[12px] flex justify-center items-center"
//                     title="Delete"
//                     //   onClick={() => deleteCompany(rowData._id)}
//                   >
//                     <i className="pi pi-trash text-red-500 !text-[15px] !leading-none"></i>
//                   </button>
//                 </div>
//               )}
//               headerClassName="flex justify-center bg-lightblue"
//               headerStyle={{
//                 textAlign: "center",
//                 fontWeight: "500",
//                 color: "blue",
//                 fontSize: "16px",
//               }}
//             />
//           </DataTable>
//         </div>
//       </div>
//       <ModalBasic
//         className="!overflow-hidden max-w-[860px]"
//         modalOpen={taskPopUpOpen}
//         setModalOpen={() => setModalOpen()}
//         title="Task Details"
//       >
//         <section
//           className="client-details-page max-h-[85vh] overflow-y-auto bg-white flex flex-col gap-[20]"
//           aria-labelledby="client-title"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="flex flex-col mx-[30px] my-[20px]">
//             <div className="grid md:grid-cols-2 gap-[20px]">
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">Task Name</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">Status</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">Date</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="date"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">Assignee</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">Project</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-[1px]">
//                   <label className="label text-[#333333B2]">priority</label>
//                   <span className="label text-red-500 rotate-12 leading-none">
//                     *
//                   </span>
//                 </div>
//                 <InputText
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="label text-[#333333B2]">discription</label>
//                 <textarea
//                   type="text"
//                   className="p-inputtext-sm placeholder:font-light py-[6px] placeholder:text-gray-400 font-normal border focus:outline-none shadow-none px-[10px] text-gray-800 rounded-[8px]"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="py-[20px] bg-gray-100 sticky bottom-0 w-full z-40">
//             <div className="flex justify-end gap-[20px] mx-[30px]">
//               <button className="prm-btn">Save</button>
//               <button
//                 onClick={() => setModalOpen()}
//                 className="secondary-btn">Cancel</button>
//             </div>
//           </div>
//         </section>
//       </ModalBasic>
//     </div>
//   );
// }

// export default Task;

import {
  faCalendar,
  faUser,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faFilter,
  faMagnifyingGlass,
  faPlus,
  faSearch,
  faSliders,
  faSlidersH,
  faSort,
  faSortAlphaUpAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FaCalendar, FaSort, FaUserFriends } from "react-icons/fa";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

function Task() {
  const [value, setValue] = useState("Select");

  // const onCellEditComplete = (e) => {
  //   const { rowData, newValue, field } = e;
  //   rowData[field] = newValue;
  //   setRows([...rows]);
  // };

  // const [rows, setRows] = useState([
  //   {
  //     id: 1,
  //     task: "Calendar module - design with responsiveness",
  //     status: "Not started",
  //     date: new Date(),
  //     project: "Zyden hrms",
  //   },
  // ]);

  // const statuses = [
  //   { label: "Not started", value: "Not started" },
  //   { label: "In progress", value: "In progress" },
  //   { label: "Completed", value: "Completed" },
  // ];

  // const projects = ["Zyden hrms", "House of fashion", "Pharma Software"];

  // const addRow = () => {
  //   const newRow = {
  //     id: rows.length + 1,
  //     task: "",
  //     status: "Not started",
  //     date: null,
  //     project: "",
  //     priority: "Medium",
  //     remarks: "",
  //   };
  //   setRows([...rows, newRow]);
  // };

  // const priorityOptions = [
  //   { label: "High", value: "High" },
  //   { label: "Medium", value: "Medium" },
  //   { label: "Low", value: "Low" },
  // ];

  // const priorityBody = (row) => {
  //   const colors = {
  //     High: "danger",
  //     Medium: "warn",
  //     Low: "info",
  //   };
  //   return (
  //     <Tag
  //       value={row.priority}
  //       severity={colors[row.priority]}
  //       className="px-3 py-1"
  //     />
  //   );
  // };

  // const statusBody = (row) => {
  //   return <Tag value={row.status} severity="info" className="px-3 py-1" />;
  // };

  // const projectBody = (row) => {
  //   return <Tag value={row.project} className="px-3 py-1" />;
  // };

  const [rows, setRows] = useState([
    {
      id: 1,
      task: "Task 1",
      status: "Not Started",
      date: new Date(),
      project: "Proj A",
      priority: "Select Priority",
      remarks: "",
    },
  ]);

  const statuses = ["Not Started", "Pending", "In Progress", "Completed"];
  const projects = ["Proj A", "Proj B", "Proj C"];
  const priorityOptions = ["Select Priority", "High", "Medium", "Low"];

  const statusColors = {
    "Not Started":
      "bg-gray-200 text-gray-800 h-[30px] flex justify-center items-center",
    Pending:
      "bg-red-200 text-red-900 h-[30px] flex justify-center items-center",
    "In Progress":
      "bg-lightblue text-blue h-[30px] flex justify-center items-center",
    Completed:
      "bg-green-200 text-green-900 h-[30px] flex justify-center items-center",
  };

  const priorityColors = {
    "Select Priority":
      "bg-gray-200 text-gray-800 h-[30px] flex justify-center items-center",
    High: "bg-red-200 text-red-800 h-[30px] flex justify-center items-center",
    Medium:
      "bg-yellow-200 text-yellow-800 h-[30px] flex justify-center items-center",
    Low: "bg-green-200 text-green-800 h-[30px] flex justify-center items-center",
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      task: "",
      status: "",
      date: null,
      project: "",
      priority: "",
      remarks: "",
    };
    setRows([...rows, newRow]);
  };

  const onCellEditComplete = (e) => {
    const { rowData, newValue, field } = e;
    rowData[field] = newValue;
    setRows([...rows]);
  };

  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div className="task-page">
      <div className="p-[15px] flex flex-col gap-[20px]">
        <div className="flex gap-[10px] justify-between border-b pb-[15px]">
          <div>
            <button className="flex items-center justify-center gap-[10px] h-[32px] w-[90px] bg-lightblue rounded-[5px] text-blue hover:text-white hover:bg-blue duration-200">
              <FontAwesomeIcon icon={faUserFriends} />
              Tasks
            </button>
          </div>
          <div>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 h-[32px] w-full">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-gray-400"
              />

              <InputText
                type="text"
                placeholder="Search here..."
                className="body-text flex-1 text-gray-700 w-full"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[5px] bg-lightblue text-blue text-[400] rounded-[5px] h-[32px] w-[110px] flex justify-center items-center hover:text-white hover:bg-blue duration-200">
            <FontAwesomeIcon icon={faPlus} className="h-[16px] leading-tight" />
            <Button onClick={addRow} className="body-text">
              Add Row
            </Button>
          </div>
          <div>
            <DataTable
              value={rows}
              editMode="cell"
              cellEditMode="dblclick"
              dataKey="id"
              globalFilter={globalFilter}
              onCellEditComplete={onCellEditComplete}
              className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-[8px] overflow-hidden"
            >
              <Column
                field="task"
                header="Task Name"
                sortable
                editor={(options) => (
                  <InputText
                    value={options.value}
                    onChange={(e) => {
                      options.editorCallback(e.target.value);
                      const updatedRow = {
                        ...options.rowData,
                        task: e.target.value,
                      };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                    style={{ width: "100%" }}
                  />
                )}
                headerClassName="bg-lightblue"
                style={{ width: "200px" }}
              />

              <Column
                field="status"
                header="Status"
                headerClassName="bg-lightblue text-center"
                style={{
                  width: "150px",
                  minWidth: "120px",
                  maxWidth: "120px",
                  lineHeight: "10px",
                }}
                body={(rowData) => {
                  const colorClass =
                    statusColors[rowData.status] || "bg-gray-100";
                  return (
                    <div className={`rounded-[5px] ${colorClass}`}>
                      {rowData.status}
                    </div>
                  );
                }}
                editor={(options) => (
                  <Dropdown
                    value={options.value}
                    options={statuses}
                    placeholder="Select"
                    autoFocus
                    className={`w-full px-2 py-1 rounded ${
                      statusColors[options.value] || "bg-gray-100"
                    }`}
                    panelStyle={{ minWidth: "100%" }}
                    onChange={(e) => {
                      options.editorCallback(e.value);
                      const updatedRow = {
                        ...options.rowData,
                        status: e.value,
                      };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                  />
                )}
              />
              <Column
                field="date"
                header="Date"
                headerClassName="bg-lightblue"
                style={{ width: "200px", minWidth: "200px", maxWidth: "200px" }}
                body={(row) =>
                  row.date
                    ? Array.isArray(row.date)
                      ? `${row.date[0].toLocaleDateString()} - ${row.date[1].toLocaleDateString()}`
                      : row.date.toLocaleDateString()
                    : ""
                }
                editor={(options) => (
                  <Calendar
                    value={options.value}
                    onChange={(e) => {
                      options.editorCallback(e.value);
                      const updatedRow = { ...options.rowData, date: e.value };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                    selectionMode="range" // this enables start and end date selection
                    showIcon
                    dateFormat="mm/dd/yy"
                    placeholder="Select start and end date"
                    style={{ width: "100%" }}
                  />
                )}
              />

              <Column
                field="project"
                header="Project"
                sortable
                headerClassName="bg-lightblue"
                style={{ width: "150px", minWidth: "150px", maxWidth: "150px" }}
                bodyStyle={{ whiteSpace: "normal", wordBreak: "break-word" }}
                editor={(options) => (
                  <Dropdown
                    value={options.value}
                    options={projects}
                    placeholder="Select project"
                    autoFocus
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      lineHeight: "10px",
                    }}
                    onChange={(e) => {
                      options.editorCallback(e.value);
                      const updatedRow = {
                        ...options.rowData,
                        project: e.value,
                      };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                  />
                )}
              />

              <Column
                field="priority"
                header="Priority"
                style={{
                  width: "150px",
                  minWidth: "120px",
                  maxWidth: "120px",
                  lineHeight: "10px",
                }}
                headerClassName="bg-lightblue text-center"
                body={(rowData) => {
                  const colorClass =
                    priorityColors[rowData.priority] || "bg-gray-100";
                  return (
                    <div
                      className={`px-2 py-1 rounded text-center ${colorClass}`}
                    >
                      {rowData.priority}
                    </div>
                  );
                }}
                editor={(options) => (
                  <Dropdown
                    value={options.value}
                    options={priorityOptions}
                    placeholder="Select priority"
                    autoFocus
                    className={`w-full px-2 py-1 rounded ${
                      priorityColors[options.value] || "bg-gray-100"
                    }`}
                    panelStyle={{ minWidth: "100%" }}
                    onChange={(e) => {
                      options.editorCallback(e.value);
                      const updatedRow = {
                        ...options.rowData,
                        priority: e.value,
                      };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                  />
                )}
              />

              <Column
                field="remarks"
                header="Remarks"
                headerClassName="bg-lightblue"
                style={{ width: "200px", minWidth: "200px", maxWidth: "200px" }}
                bodyStyle={{
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  lineHeight: "1.2rem",
                }}
                editor={(options) => (
                  <InputText
                    value={options.value}
                    placeholder="Enter remarks"
                    autoFocus
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                    }}
                    onChange={(e) => {
                      options.editorCallback(e.target.value);
                      const updatedRow = {
                        ...options.rowData,
                        remarks: e.target.value,
                      };
                      setRows(
                        rows.map((r) =>
                          r.id === options.rowData.id ? updatedRow : r
                        )
                      );
                    }}
                  />
                )}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

{
  /* <FontAwesomeIcon icon={faFileSignature} />  */
}
{
  /* <FontAwesomeIcon icon={faCalendar} /><FontAwesomeIcon icon={faCalendar} /> */
}
