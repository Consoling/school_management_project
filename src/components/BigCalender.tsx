"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          views={["work_week", "day"]}
          view={view}
          style={{ height: "98%" }}
          onView={handleOnChangeView}
          min={new Date(2025, 3, 10, 8, 0, 0)}
          max={new Date(2025, 3, 15, 17, 0, 0)}
        />
      </div>
    </>
  );
};
