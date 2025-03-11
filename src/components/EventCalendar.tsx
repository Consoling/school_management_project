"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
  {
    id: 1,
    title: "Math Exam",
    time: "09:00 - 11:00",
    description:
      "Final exam for the math course, covering all topics from the semester.",
  },
  {
    id: 2,
    title: "School Assembly",
    time: "10:30 - 11:30",
    description:
      "An assembly to discuss school updates and celebrate achievements.",
  },
  {
    id: 3,
    title: "Science Fair",
    time: "13:00 - 15:00",
    description:
      "Annual science fair where students present their science projects and experiments.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="font-semibold my-4 text-xl">Events</h1>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 border-gray-100 border-t-4 rounded-md odd:border-t-azsh-sky even:border-t-azsh-purple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
