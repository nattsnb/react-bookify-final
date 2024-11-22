import { styled } from "@mui/material";

export const VenueCardWrapper = styled("div")`
  min-width: 282px;
  min-height: 228px;
  box-shadow: 0 0 0.4vw var(--secondary-light);
  background-color: red;
`;

export const PictureFrame = styled("div")`
  height: 80%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.backgroundurl})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`;

export const UnderCardInfoBox = styled("div")`
  background-color: var(--background-gray);
  min-height: 28px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const HeartBox = styled("div")`
  width: 40px;
  height: 40px;
  background-color: black;
  opacity: 0.63;
  border-radius: 0 0 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 5px;
`;

export const NameBox = styled("div")`
  height: 40px;
  width: fit-content;
  background-color: black;
  opacity: 0.63;
  border-radius: 0 0 0 20px;
  padding: 6px 6px 3px 23px;
  text-transform: capitalize;
`;

export const PictureBottomInfoBox = styled("div")`
  height: 70px;
  width: 140px;
  background-color: black;
  opacity: 0.63;
  border-radius: 0 20px 0 0;
  padding-left: 13px;
  padding-top: 10px;
`;

export const ArrowIcon = styled("div")`
  color: var(--background-gray);
  text-shadow: 3px 3px 15px black;
`;

export const Localization = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const UnderCardInfoBoxHalfContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  color: var(--secondary-main);
`;

export const StyledMiddlePartBox = styled("div")`
  padding-left: 7px;
  padding-right: 7px;
`;
