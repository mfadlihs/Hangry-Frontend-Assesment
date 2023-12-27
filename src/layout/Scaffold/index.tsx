import { ScaffoldProps } from "./types";
import Header from "../Header";

export default function Scaffold({ children }: ScaffoldProps) {
  return (
    <div className="h-screen">
      <Header />
      {children}
    </div>
  );
}
