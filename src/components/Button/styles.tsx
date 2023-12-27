import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ContainerProps {
  width?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  background-color: var(--primary);

  border-radius: 30px;

  &:hover {
    background-color: #a3092699;
  }

  &:active {
  }
`;
