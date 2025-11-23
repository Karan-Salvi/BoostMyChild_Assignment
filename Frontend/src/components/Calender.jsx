import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Attendance from "./Attendance";
import { useGetAttendanceByDateQuery } from "../store/api/attendanceApi";

const Calender = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const { data: attendanceData, isLoading: attendanceLoading } =
    useGetAttendanceByDateQuery(selectedDate, {
      skip: !selectedDate,
    });

  const handleDateClick = (arg) => {
    console.log(arg);
    setSelectedDate(arg.dateStr);
    setOpenModal(true);
  };
  return (
    <div className="w-full overflow-hidden p-5 m-2 border border-gray-200 rounded-md shadow-sm ">
      <FullCalendar
        className="scheduler-header"
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        // datesSet={handleDatesSet}
        // dayCellContent={renderDayCell}
        headerToolbar={{
          left: "prev next",
          center: "title",
          right: "today dayGridMonth",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
        height="auto"
        dayMaxEvents={true}
      />
      <Attendance
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Calender;
