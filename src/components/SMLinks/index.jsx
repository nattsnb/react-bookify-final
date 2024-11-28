import { SMContainer, StyledSMLinks } from "./SMLinks.styled.jsx";
export function SMLinks({ links }) {
  return (
    <SMContainer>
      {links.map((link) => {
        const { id, path, Icon } = link;
        return (
          <StyledSMLinks href={path} key={id}>
            <Icon />
          </StyledSMLinks>
        );
      })}
    </SMContainer>
  );
}
