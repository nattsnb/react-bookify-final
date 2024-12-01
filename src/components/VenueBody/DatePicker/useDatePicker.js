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
      if (!startDate || !endDate) {
        setDaysBetween(0);
      } else if (startDate === endDate) {
        setDaysBetween(1);
      } else {
        const diff = endDate.diff(startDate, "day");
        setDaysBetween(diff);
      }
    };
    calculateDaysBetween();
  }, [startDate, endDate]);

  const handleStartsAtClick = () => {
    setIsCalendarError(false);
    setWhichCalendarIsActive("start");
    setIsChecked(false);
  };
  const handleEndsAtClick = () => {
    setIsCalendarError(false);
    setWhichCalendarIsActive("end");
    setIsChecked(false);
  };
  const handleCheckboxChange = () => {
    setIsCalendarError(false);
    if (isChecked) {
      setIsChecked(false);
      setWhichCalendarIsActive("start");
    } else {
      setIsChecked(true);
      setWhichCalendarIsActive("start");
      setEndDate(startDate);
    }
  };
  const handleStartDateChange = (newDate) => {
    setIsCalendarError(false);
    if (isChecked) {
      setEndDate(newDate);
    }

    if (endDate && newDate.isAfter(endDate)) {
      setCalendarToZero();
      setIsCalendarError(true);
      return;
    }

    setStartDate(newDate);
  };

  const handleEndDateChange = (newDate) => {
    setIsCalendarError(false);
    if (startDate && newDate.isBefore(startDate)) {
      setCalendarToZero();
      setIsCalendarError(true);
      return;
    }
    setEndDate(newDate);
  };

  const setCalendarToZero = () => {
    setEndDate(null);
    setStartDate(null);
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