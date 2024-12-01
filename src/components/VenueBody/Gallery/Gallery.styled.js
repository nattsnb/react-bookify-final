import { styled } from "@mui/material";

export const StyledGalleryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(14)};
  }
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
    min-width: 224px;
    min-height: 172px;
    margin: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    min-width: 280px;
    min-height: 215px;
    margin: ${({ theme }) => theme.spacing(4)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-width: 224px;
    min-height: 172px;
    margin: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 162px;
    min-height: 118px;
    margin: ${({ theme }) => theme.spacing(2)};
  }
`;
