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
      <div className=" border bg-black flex-col w-1/2 h-1/2 rounded-sm shadow-sm flex justify-center items-center">
        {" "}
        <div className="flex justify-center items-center">
          <input
            id="mint"
            className=" text-center text-black rounded-sm"
            placeholder="Minutes"
            type="number"
          />
          <input
            id="break"
            className=" text-center text-black rounded-sm"
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
        <div className="flex flex-col space-y-4 border  w-1/2 h-52 items-center border-red-100 text-4xl">
          <div className="flex ">
            <h3>
              {" "}
              {hour}:{minute}:{seconds}{" "}
            </h3>
            <h4>{breaks}</h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
