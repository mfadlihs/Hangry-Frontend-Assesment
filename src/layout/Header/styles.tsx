import styled from "@emotion/styled";

export const HeaderContainer = styled.div<{ visible: boolean }>`
  backdrop-filter: blur(60px);
  position: fixed;
  top: ${({ visible }) => (visible ? "0px" : "-150px")};
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff90;
  z-index: 10;
`;
