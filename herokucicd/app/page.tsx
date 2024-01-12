"use client";
import { useState } from "react";

export default function Home() {
  const [hour, setHour] = useState<number | string>("00");
  const [minute, setMinutes] = useState<number | string>("00");
  const [seconds, setSeconds] = useState<number | string>("00");
  const [breaks, setBreaks] = useState<number>(5);

  const timeHandler = () => {};

  return (
    <div className="flex justify-center items-center h-screen font-mono text-lg">
      <div className="  border bg-black flex-col w-1/2 h-1/2 rounded-sm shadow-sm flex  items-center justify-evenly">
        <h2>Enter Duration time and break time </h2>
        <div className="flex justify-center items-center p-4 border-white ">
          <input
            id="mint"
            className=" text-center text-black rounded-sm border border-red-500 mr-2"
            placeholder="Minutes"
            type="number"
          />
          <input
            id="break"
            className=" text-center text-black rounded-sm mr-2"
            placeholder="Break"
            type="number"
          />
          <button
            className="bg-sky-700 h-7 w-24 rounded-sm"
            onClick={timeHandler}
          >
            OK
          </button>
        </div>
        <div className="flex-col justify-center  items-center flex space-y-4 border  w-1/2 h-52  border-red-100 text-4xl">
          <div className=" flex justify-between p-4 w-60">
            {" "}
            <span>H</span>
            <span>M</span>
            <span>S</span>
            <span>B</span>
          </div>

          <div className=" flex justify-between p-4 w-60">
            <span>{hour}:</span>
            <span>{minute}:</span>
            <span>{seconds}:</span>
            <span>{breaks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
