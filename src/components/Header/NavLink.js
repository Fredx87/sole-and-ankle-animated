import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <MainText>{children}</MainText>
    <SubText aria-hidden="true">{children}</SubText>
  </Wrapper>
);

const Wrapper = styled.a`
  --slide-amount: 120%;
  --slide-duration: 300ms;
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MainText = styled.div`
  transition: transform var(--slide-duration);

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(calc(var(--slide-amount) * -1));
    }
  }
`;

const SubText = styled.div`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(var(--slide-amount));
  transition: transform var(--slide-duration);

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(0%);
    }
  }
`;

export default NavLink;
