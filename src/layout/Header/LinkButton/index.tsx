import { ReactNode } from "react";
import { LinkButtonContainer } from "./styles";

export interface LinkButtonProps {
  children: ReactNode;
  className?: string;
}

export default function LinkButton({ children, className }: LinkButtonProps) {
  return (
    <LinkButtonContainer className={className} active>
      {children}
    </LinkButtonContainer>
  );
}
