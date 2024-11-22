import {
  Button,
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

export function FiltersDrawer() {
  const arrayOfFilters = [
    { id: 0, name: "price range" },
    { id: 1, name: "amenities" },
    { id: 2, name: "room amenities" },
    { id: 3, name: "neighbourhoods" },
    { id: 4, name: "handicap accessibility" },
  ];
  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <StyledDrawerToolbar>
          <HiddenElement>
            <Typography>reset</Typography>
          </HiddenElement>

          <Typography variant="filterTitle">filters</Typography>

          <Button>
            <Typography variant="sortButton">reset</Typography>
          </Button>
        </StyledDrawerToolbar>
      </StyledDrawerToolbarBackground>

      <MenuList>
        {arrayOfFilters.map((filter) => (
          <MenuItem key={filter.id}>
            <ListItemText>{filter.name}</ListItemText>
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
          </MenuItem>
        ))}
      </MenuList>
    </StyledFiltersContainer>
  );
}
