import React, { useState } from "react";

const EventDetails = ({ handleNextStep, eventData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventSize, setEventSize] = useState("1-10");
  const [interests, setInterests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDetails = {
      name,
      email,
      eventSize,
      interests,
    };
    handleNextStep({ ...eventData, ...eventDetails });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for name, email, event size, and interests */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </form>
  );
};

export default EventDetails;
