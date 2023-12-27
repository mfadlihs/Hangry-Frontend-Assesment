import Icon from "@/components/Icon";
import styled from "@emotion/styled";

export const Hamburger = styled(Icon)<{ active: boolean }>`
  cursor: pointer;
  transform: rotate(${({ active }) => (active ? "135deg" : "0")});
  color: ${({ active }) => (active ? "white" : "black")};
`;

export const NavContainer = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: ${({ active }) => (active ? "0vh" : "-100vh")};
  background-color: #a30926;
  opacity: 0.85;
`;
