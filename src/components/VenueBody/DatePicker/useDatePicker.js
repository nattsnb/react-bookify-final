import { useEffect, useState } from "react";

export const useDatePicker = () => {
  const [whichCalendarIsActive, setWhichCalendarIsActive] = useState("start");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCalendarError, setIsCalendarError] = useState(false);
  const [daysBetween, setDaysBetween] = useState(0);

  useEffect(() => {
    const calculateDaysBetween = () => {
      if (startDate && endDate) {
        const diff = endDate.diff(startDate, "day");
        setDaysBetween(diff);
      } else {
        setDaysBetween(0);
      }
    };
    calculateDaysBetween();
  }, [startDate, endDate]);

  const handleStartsAtClick = () => {
    setWhichCalendarIsActive("start");
  };
  const handleEndsAtClick = () => {
    setWhichCalendarIsActive("end");
  };
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    if (!isChecked) {
      setWhichCalendarIsActive("none");
    } else {
      handleStartsAtClick();
    }
  };
  const handleStartDateChange = (newDate) => {
    if (isChecked) {
      setEndDate(newDate);
    }
    setStartDate(newDate);
  };

  const handleEndDateChange = (newDate) => {
    if (startDate && newDate.isBefore(startDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }
    setEndDate(newDate);
  };

  return {
    whichCalendarIsActive,
    startDate,
    endDate,
    isChecked,
    isCalendarError,
    daysBetween,
    handleStartsAtClick,
    handleEndsAtClick,
    handleCheckboxChange,
    handleStartDateChange,
    handleEndDateChange,
  };
};
