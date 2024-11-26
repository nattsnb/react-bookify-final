import { InputAdornment } from "@mui/material";
import {
  StyledInputsContainer,
  StyledSearchBarTextField,
} from "./SearchBar.styled.js";
import React from "react";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const textFieldsDataArray = [
  {
    id: 0,
    placeholder: "localization",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: <></>,
  },
  {
    id: 1,
    placeholder: "occasion",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: <></>,
  },
  {
    id: 2,
    placeholder: "date",
    startAdornmentIcon: <CalendarMonthIcon />,
    endAdornmentIcon: <></>,
  },
  {
    id: 3,
    placeholder: "guests",
    startAdornmentIcon: <RemoveIcon />,
    endAdornmentIcon: <AddIcon />,
  },
  {
    id: 4,
    placeholder: "venue type",
    startAdornmentIcon: <Search />,
    endAdornmentIcon: <></>,
  },
];

export const InputsContainer = ({ register, isCollapsed }) => {
  return (
    <StyledInputsContainer>
      {textFieldsDataArray.map((dataEntry) => (
        <StyledSearchBarTextField
          key={dataEntry.id}
          variant="outlined"
          placeholder={dataEntry.placeholder}
          isCollapsed={isCollapsed}
          {...register(dataEntry.placeholder, { required: true })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {dataEntry.startAdornmentIcon}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {dataEntry.endAdornmentIcon}
              </InputAdornment>
            ),
          }}
        />
      ))}
    </StyledInputsContainer>
  );
};
