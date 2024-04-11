import React from "react";

const Header = () => {
  return <div>
     <form className="space-y-4">
      <div>
        <label htmlFor="meetingTitle" className="block font-semibold">Meeting Title</label>
        <input type="text" id="meetingTitle" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="meetingDate" className="block font-semibold">Date</label>
        <input type="date" id="meetingDate" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="meetingTime" className="block font-semibold">Time</label>
        <input type="time" id="meetingTime" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="meetingAgenda" className="block font-semibold">Agenda</label>
        <textarea id="meetingAgenda" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Schedule Meeting</button>
    </form>
  </div>;
};

export default Header;
