import { JSX, ReactNode } from "react";

type TContainer = {
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  children: ReactNode;
};

export const ContainerMaxW1366 = ({
  component: Component = "div",
  className = "",
  children,
  id,
}: TContainer) => (
  <div className="relative m-10 h-full">
    <Component
      className={`container relative m-auto flex max-w-[1366px] ${className}`}
      id={id}
    >
      {children}
    </Component>
  </div>
);
