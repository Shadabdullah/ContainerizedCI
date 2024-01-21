"use client";
import { Scope_One } from "next/font/google";
import { useState, useEffect } from "react";

export default function Home() {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [breaks, setBreaks] = useState<number>(5);
  const [timeInMin, setTimeInMin] = useState<number>(0);

  

  function convertMinutesToTime(minutes: number): {
    hours: number;
    minute: number;
    seconds: number;
  } {
    let hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let seconds = 0;
    let minute = Math.floor(remainingMinutes);
    if (minute >= 1) {
      seconds = 60;
      minute -= 1;
    } else if (minute == 0 && hours >= 1) {
      hours -= 1;
      minute = 59;
      seconds = 60;
    }

    return {
      hours,
      minute,
      seconds,
    };
  }

  const timeHandler = () => {
    const { hours, minute, seconds } = convertMinutesToTime(timeInMin);
    setHour(hours);
    setMinutes(minute);
    setSeconds(seconds);
  };

  const timeSetter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setTimeInMin(isNaN(newValue) ? 0 : newValue);
  };

  const breakHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreaks(
      isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)
    );
  };

  const timerHandler = () => {
    function updateTime(){
      if(seconds>0){
         setSeconds((prevSec)=>prevSec-1)
      }else{
         setSeconds(60)
         setMinutes((preMin)=>preMin-1)
      }
      

    }
   
    const timeOutClear = timeInMin*60 * 1000
    const intervalId = setInterval(updateTime , 1000 )

    setTimeout(()=>{
      clearInterval(intervalId)
    },timeOutClear)

  }; 

  return (
    <div className="flex justify-center items-center h-screen font-mono text-lg">
      <div className="  border bg-black flex-col w-1/2 h-1/2 rounded-sm shadow-sm flex  items-center justify-evenly">
        <p>Ok now its seems working
        </p>
        <h2>Enter Duration time and break time </h2>
        <div className="flex justify-center items-center p-4 border-white ">
          <input
            id="mint"
            className=" text-center text-black rounded-sm border border-red-500 mr-2"
            placeholder="Minutes"
            type="number"
            onChange={timeSetter}   
          />
          <input
            id="break"
            className=" text-center text-black rounded-sm mr-2"
            placeholder="Break"
            type="number"
            onChange={breakHandler}
          />
          <button
            className="bg-sky-700 h-7 w-24 rounded-sm"
            onClick={timeHandler}
          >
            OK
          </button>
          <button
            className=" h-7 w-24 rounded-sm  ml-4 bg-red-700"
            onClick={timerHandler}
          >
            Starts
          </button>
        </div>
        <div className="flex-col justify-center  items-center flex space-y-4 border  w-1/2 h-52  border-red-100 text-4xl">
          <div className=" flex justify-between p-4 w-60">
            {" "}
            <span className="text-red-500 ml-3">H</span>
            <span className=" text-blue-700 ml-4">M</span>
            <span className=" text-blue-700 ml-4">S</span>
            <span className=" text-yellow-300 ml-6">B</span>
          </div>

          <div className=" flex justify-between p-4 w-60">
            <span className="text-red-500">{hour}:</span>
            <span className="text-blue-700">{minute}:</span>
            <span className=" text-blue-700">{seconds}</span>
            <span className="text-yellow-300 ml-6">{breaks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
