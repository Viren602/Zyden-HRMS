import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  faArrowLeft,
  faArrowRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const locales = {};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Custom Toolbar
const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  return (
    <div className="p-5 flex justify-between items-center rounded-full ">
      <div className="flex gap-[15px]">
        <div className="flex flex-col justify-center items-center border border-gray-300 rounded-[8px] w-[62px] h-[58px] overflow-hidden">
          <span className="label flex items-center justify-center text-gray-500 w-full h-[45px] bg-gray-100 text-center rounded-t-[8px]">
            {format(new Date(), "MMM")}
          </span>
          <span className="text-lg font-bold text-blue-600 h-full w-full flex items-center justify-center">
            {format(new Date(), "d")}
          </span>
        </div>

        <div className="flex flex-col ">
          <span className="text-[19px] font-[500]">{label}</span>
          <div className="text-[15px] text-gray-600">
            {format(startOfWeek(new Date()), "MMM d, yyyy")} -{" "}
            {format(new Date(), "MMM d, yyyy")}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-[8px] h-[40px] w-[180px]">
          <button
            onClick={() => onNavigate("PREV")}
            className="flex-1 h-full hover:bg-gray-50 text-gray-400 hover:text-gray-500 duration-200 rounded flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="h-full border"></span>
          <button
            onClick={() => onNavigate("TODAY")}
            className="flex-[2] h-full hover:bg-gray-50 rounded flex justify-center items-center"
          >
            Today
          </button>
          <span className="h-full border"></span>

          <button
            onClick={() => onNavigate("NEXT")}
            className="flex-1 h-full hover:bg-gray-50 text-gray-400 hover:text-gray-500 duration-200 rounded flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <select
          value={view}
          onChange={(e) => onView(e.target.value)}
          className="border outline-none h-[40px] rounded-[8px] px-2 w-[180px] hover:bg-gray-50"
        >
          <option value="month">Month view</option>
          <option value="week">Week view</option>
          <option value="day">Day view</option>
        </select>

        <button className="font-[500] h-[40px] bg-lightblue text-blue rounded-[8px] hover:bg-blue hover:text-white px-4 whitespace-nowrap flex gap-[5px] justify-center items-center">
          <FontAwesomeIcon icon={faPlus} />
          Add event
        </button>
      </div>
    </div>
  );
};

const BigCalendarPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      start: new Date("2025-11-25T10:00:00"),
      end: new Date("2025-11-25T11:00:00"),
    },
    {
      id: 2,
      title: "Project Deadline",
      start: new Date("2025-11-25T12:00:00"),
      end: new Date("2025-11-25T13:00:00"),
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const openModalForEvent = (event) => {
    setSelectedEvent(event);
    setTitle(event.title);
    setStartDate(event.start.toISOString().split("T")[0]);
    setStartTime(event.start.toISOString().split("T")[1].substring(0, 5));
    setEndDate(event.end.toISOString().split("T")[0]);
    setEndTime(event.end.toISOString().split("T")[1].substring(0, 5));
    setModalOpen(true);
  };

  const openModalForSlot = ({ start, end }) => {
    setSelectedEvent(null);
    setTitle("");
    setStartDate(start.toISOString().split("T")[0]);
    setStartTime(start.toISOString().split("T")[1].substring(0, 5));
    setEndDate(end.toISOString().split("T")[0]);
    setEndTime(end.toISOString().split("T")[1].substring(0, 5));
    setModalOpen(true);
  };

  const handleSave = () => {
    const newEvent = {
      id: selectedEvent ? selectedEvent.id : Date.now(),
      title,
      start: new Date(`${startDate}T${startTime}`),
      end: new Date(`${endDate}T${endTime}`),
    };

    if (selectedEvent) {
      setEvents(events.map((e) => (e.id === selectedEvent.id ? newEvent : e)));
    } else {
      setEvents([...events, newEvent]);
    }
    setModalOpen(false);
  };

  return (
    <>
      {" "}
      <div className="p-4">
        <div className="order border-gray-300 rounded-lg shadow-[0_2px_8px_rgba(99,99,99,0.2)] overflow-hidden">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            selectable
            onSelectEvent={openModalForEvent}
            onSelectSlot={openModalForSlot}
            components={{ toolbar: CustomToolbar }}
          />

          {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 shadow-[0_2px_8px_rgba(99,99,99,0.2)] flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-[400px]">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <h2 className="heading text-blue">
                      {selectedEvent ? "Edit Event" : "Add Event"}
                    </h2>
                    <div>
                      <label className="text-body">Title:</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded-[5px] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex gap-[10px]">
                      <div className="flex-1">
                        <label className="text-body font-[500]">
                          Start Date:
                        </label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full border p-2 rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-body font-[500]">
                          Start Time:
                        </label>
                        <input
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="w-full border p-2 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="flex-1">
                      <label className="text-body font-[500]">End Date:</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-body font-[500]">End Time:</label>
                      <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="secondary-btn"
                    >
                      Cancel
                    </button>
                    <button onClick={handleSave} className="prm-btn">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BigCalendarPage;
