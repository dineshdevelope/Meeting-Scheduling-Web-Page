import React, { useState } from "react";

const DateTimePicker = ({ handleNextStep }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeZone, setTimeZone] = useState("UTC");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderDays = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`px-2 py-1 cursor-pointer ${
            i === selectedDate.getDate() ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
            )
          }
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNext = () => {
    handleNextStep({ selectedDate, timeZone });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <img
          src="https://cdn.tech.eu/uploads/2023/01/fib-865.png"
          alt="Fibery Logo"
          className="h-12 mr-2"
        />
        <h1 className="text-2xl font-bold">Fibery Demo</h1>
      </div>
      <p className="mb-4">
        Book a meeting with our Fibery team. Talk to a real person about how to
        get your processes up and running in 15 min.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <select
              value={selectedDate.getMonth()}
              className="px-4 py-2 border rounded"
              onChange={(e) =>
                setSelectedDate(
                  new Date(selectedDate.getFullYear(), e.target.value, 1)
                )
              }
            >
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <select
              value={timeZone}
              className="px-4 py-2 border rounded"
              onChange={(e) => setTimeZone(e.target.value)}
            >
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time (EST)</option>
              <option value="PST">Pacific Time (PST)</option>
            </select>
          </div>
          <span>Time zone</span>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default DateTimePicker;
