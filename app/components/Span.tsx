import { ReactNode } from 'react';

export const Span = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className="font-bold text-black italic">
      {children}
    </span>
  );
};
