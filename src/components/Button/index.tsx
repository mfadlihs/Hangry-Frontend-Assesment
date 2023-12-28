import { ReactNode } from "react";

export default function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`${className} text-white bg-primary/95 hover:bg-primary focus:ring-4 focus:ring-primary/50 font-medium rounded-lg text-sm lg:text-xl md:text-lg sm:text-base xl:text-2xl px-8 md:py-4 py-3 lg:py-5 focus:outline-none`}
    >
      {children}
    </button>
  );
}
