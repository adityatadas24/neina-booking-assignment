"use client";
import React, { useState } from "react";
import CalendarView from "../Components/CalenderView";
import AvailabilityCheck from "../Components/AvailabilityCheck";

export default function Calendar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-center items-center w-full flex-col gap-6">
      {!toggle ? <AvailabilityCheck /> : <CalendarView />}

      <button
        className={toggle ? "bg-black " : "bg-white text-black"}
        onClick={() => setToggle(!toggle)}
      >
        {!toggle ? "View Calender" : "Check Available Slot"}
      </button>
    </div>
  );
}
