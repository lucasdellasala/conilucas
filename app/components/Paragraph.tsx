export const Paragraph = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <p
      className={`py-2 text-xl lg:text-3xl text-center drop-shadow-2xl ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};
