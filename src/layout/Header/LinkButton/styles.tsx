import styled from "@emotion/styled";

export const LinkButtonContainer = styled.div<{
  active: boolean;
}>`
  position: relative;
  cursor: pointer;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    border-radius: 5px;
    opacity: 0;
    height: 4px;
    background-color: var(--primary);
    bottom: -8px;
    left: 8px;
    margin: auto;
    right: 8px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    opacity: 1;
    bottom: -4px;
  }
`;
