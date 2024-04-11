import React, { useState } from "react";
import Navbar from "./Navbar";
import DateTimePicker from "./DateTimePicker";
import EventDetails from "./EventDetails";
import EventConfirmation from "./EventConfirmation";

const App = () => {
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState({});

  const handleNextStep = (data) => {
    setEventData({ ...eventData, ...data });
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <DateTimePicker handleNextStep={handleNextStep} />;
      case 2:
        return (
          <EventDetails handleNextStep={handleNextStep} eventData={eventData} />
        );
      case 3:
        return <EventConfirmation eventData={eventData} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8">{renderStep()}</div>
    </div>
  );
};

export default App;
