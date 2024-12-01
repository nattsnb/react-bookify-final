import { SMContainer, StyledSMLinks } from "./SMLinks.styled.jsx";
export function SMLinks({ links }) {
  return (
    <SMContainer>
      {links.map(({ id, path, Icon }) => (
        <StyledSMLinks href={`https://${path}`} key={id}>
          `
          <Icon />
        </StyledSMLinks>
      ))}
    </SMContainer>
  );
}
