export function GenericSection({
  children,
  backgroundImage,
  backgroundColor,
}: {
  readonly children: React.ReactNode;
  readonly backgroundImage?: string;
  readonly backgroundColor?: string;
}) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div className="flex items-center justify-center h-full flex-col">
        {children}
      </div>
    </div>
  );
}
