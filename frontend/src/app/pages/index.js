"use client";
import BookingForm from "../Components/BookingForm";
import Calendar from "./calendar";
import BookingSummary from "../Components/BookingSummary";

export default function Index() {
 

  return (
    <div className="flex justify-center items-center w-full flex-col gap-6">
      <div className="text-4xl font-semibold mt-2 mb-10">
        <h1>Restaurant Table Booking</h1>
      </div>
      <div className=" flex justify-center items-start w-11/12 gap-4 max-md:flex-col">
     
     <BookingForm />
        <hr className="border-1 border-black w-full hidden max-md:block"/>
        <Calendar/>
      </div>
      <hr className="border-1 border-black w-full hidden max-md:block"/>

       <BookingSummary/>

    </div>
  );
}
