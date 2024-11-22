import React from "react";
import { useForm } from "react-hook-form";
import { Search } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { InputAdornment } from "@mui/material";
import {
  StyledSearchBarContainer,
  StyledSearchBarTextField,
} from "./SearchBar.styled.js";

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

export const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchBarContainer>
        {textFieldsDataArray.map((dataEntry) => (
          <StyledSearchBarTextField
            variant="outlined"
            placeholder={dataEntry.placeholder}
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
      </StyledSearchBarContainer>
    </form>
  );
};
