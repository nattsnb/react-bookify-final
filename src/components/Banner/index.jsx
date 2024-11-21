import {
  StyledBanner,
  StyledInputContainer,
  StyledSearchBarContainer,
} from "./Banner.styled.js";

export function Banner() {
  return (
    <StyledBanner>
      <StyledSearchBarContainer>
        <StyledInputContainer>1</StyledInputContainer>
        <StyledInputContainer>2</StyledInputContainer>
        <StyledInputContainer>3</StyledInputContainer>
        <StyledInputContainer>4</StyledInputContainer>
        <StyledInputContainer>5</StyledInputContainer>
      </StyledSearchBarContainer>
    </StyledBanner>
  );
}
