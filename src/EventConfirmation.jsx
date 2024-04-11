import React from "react";

const EventConfirmation = ({ eventData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">You are scheduled</h2>
      <p>A calendar invitation has been sent to your email address.</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Event Details</h3>
        <p>Date: {eventData.selectedDate.toLocaleString()}</p>
        <p>Name: {eventData.name}</p>
        <p>Email: {eventData.email}</p>
        <p>Event Size: {eventData.eventSize}</p>
        <p>Interests: {eventData.interests.join(", ")}</p>
      </div>
    </div>
  );
};

export default EventConfirmation;
