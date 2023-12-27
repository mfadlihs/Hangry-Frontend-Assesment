import { ReactNode } from "react";
import { Container } from "./styles";

export default function Button({
  children,
  width,
  className,
  onClick,
}: {
  children: ReactNode;
  width?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Container
      width={width}
      className={`h5 font-semibold text-white ${className} `}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
