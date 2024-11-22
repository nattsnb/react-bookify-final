import {
  Button,
  Checkbox,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyledDrawerToolbar,
  StyledDrawerToolbarBackground,
  StyledFiltersContainer,
} from "./ResultsBody.styled.js";
import { HiddenElement } from "../../shared/styledComponents/hiddenElement.styled.js";

export function SortDrawer() {
  const arrayOfFilters = [
    { id: 0, name: "by the most expensive" },
    { id: 1, name: "by the cheapest" },
    { id: 2, name: "by top rated" },
  ];
  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <Typography variant="filterTitle">sort</Typography>
      </StyledDrawerToolbarBackground>

      <MenuList>
        {arrayOfFilters.map((filter) => (
          <MenuItem key={filter.id}>
            <Checkbox label={filter.id} />
            <ListItemText>{filter.name}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </StyledFiltersContainer>
  );
}
