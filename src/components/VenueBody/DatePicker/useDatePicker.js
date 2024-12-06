import { useEffect, useState } from "react";

export const useDatePicker = () => {
  const [whichCalendarIsActive, setWhichCalendarIsActive] = useState("start");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCalendarError, setIsCalendarError] = useState(false);
  const [daysBetween, setDaysBetween] = useState(0);

  useEffect(() => {
      if (!startDate || !endDate) {
        setDaysBetween(0);
      } else if (startDate === endDate) {
        setDaysBetween(1);
      } else {
        const diff = Math.ceil(
          (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24),
        );
        setDaysBetween(diff);
      }
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

    if (endDate && newDate > endDate && !isChecked) {
      setCalendarToZero();
      setIsCalendarError(true);
      return;
    }

    setStartDate(newDate);
  };

  const handleEndDateChange = (newDate) => {
    setIsCalendarError(false);
    if (startDate && newDate < startDate) {
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
