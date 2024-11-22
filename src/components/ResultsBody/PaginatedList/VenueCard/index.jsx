import Typography from "@mui/material/Typography";
import {
  VenueCardWrapper,
  PictureFrame,
  HeartBox,
  NameBox,
  ArrowIcon,
  PictureBottomInfoBox,
  Localization,
  UnderCardInfoBox,
  UnderCardInfoBoxHalfContainer,
  StyledMiddlePartBox,
} from "./VenueCard.styled.jsx";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleIcon from "@mui/icons-material/People";

export function VenueCard({ venue, backgroundurl }) {
  return (
    <VenueCardWrapper>
      {/*<PictureFrame backgroundurl={backgroundurl}>*/}
      {/*  <HorizontalContainerTop>*/}
      {/*    <HeartBox>*/}
      {/*      <Typography variant="boldOnCard">*/}
      {/*        <FavoriteBorderIcon />*/}
      {/*      </Typography>*/}
      {/*    </HeartBox>*/}
      {/*    <NameBox>*/}
      {/*      <Typography variant="boldOnCard">{venue.name}</Typography>*/}
      {/*    </NameBox>*/}
      {/*  </HorizontalContainerTop>*/}
      {/*  <HorizontalContainerCenter>*/}
      {/*    <ArrowIcon>*/}
      {/*      <i className={"fas fa-angle-left"}></i>*/}
      {/*    </ArrowIcon>*/}
      {/*    <ArrowIcon>*/}
      {/*      <i className={"fas fa-angle-right"}></i>*/}
      {/*    </ArrowIcon>*/}
      {/*  </HorizontalContainerCenter>*/}
      {/*  <HorizontalContainerTop>*/}
      {/*    <PictureBottomInfoBox>*/}
      {/*      <div>*/}
      {/*        <Typography variant="boldOnCard">666 zł / doba</Typography>*/}
      {/*      </div>*/}
      {/*      <Localization>*/}
      {/*        <div>*/}
      {/*          <Typography variant="thinOnCard">*/}
      {/*            <i className={"fas fa-map-marker-alt"}></i>*/}
      {/*          </Typography>*/}
      {/*          <Typography variant="cardCityName">*/}
      {/*            {venue.location.city}*/}
      {/*          </Typography>*/}
      {/*        </div>*/}
      {/*      </Localization>*/}
      {/*    </PictureBottomInfoBox>*/}
      {/*    <Box></Box>*/}
      {/*  </HorizontalContainerTop>*/}
      {/*</PictureFrame>*/}
      {/*<UnderCardInfoBox>*/}
      {/*  <UnderCardInfoBoxHalfContainer>*/}
      {/*    <GradeIcon />*/}
      {/*    <StyledMiddlePartBox>rating </StyledMiddlePartBox>*/}
      {/*    <Box>{venue.rating}</Box>*/}
      {/*  </UnderCardInfoBoxHalfContainer>*/}
      {/*  <UnderCardInfoBoxHalfContainer>*/}
      {/*    <PeopleIcon />*/}
      {/*    <StyledMiddlePartBox>capacity </StyledMiddlePartBox>*/}
      {/*    <Box>{venue.capacity}</Box>*/}
      {/*  </UnderCardInfoBoxHalfContainer>*/}
      {/*</UnderCardInfoBox>*/}
    </VenueCardWrapper>
  );
}
