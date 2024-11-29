import { styled } from "@mui/material";

export const StyledGalleryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const StyledImageContainer = styled("div")`
  background-image: url(${(props) => props.imageUrl});
  min-width: 280px;
  min-height: 215px;
  flex-wrap: wrap;
  background-size: cover;
  background-position: center;
  margin: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down("xl")} {
    min-width: 175px;
    min-height: 118px;
    margin: ${({ theme }) => theme.spacing(2)};
  }
`;
