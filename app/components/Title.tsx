export const Title = ({
  children,
  className,
}: Readonly<{
  children: string;
  className?: string;
}>) => {
  return (
    <h1
      className={`${className ?? ""} text-8xl lg:text-8xl drop-shadow-2xl`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></h1>
  );
};
