export function GenericSection({
  children,
  backgroundImage,
  backgroundColor,
  className,
}: {
  readonly children: React.ReactNode;
  readonly backgroundImage?: string;
  readonly backgroundColor?: string;
  readonly className?: string;
}) {
  return (
    <section
      className={`bg-cover bg-center h-screen ${className}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div className="flex items-center justify-center h-full flex-col">
        {children}
      </div>
    </section>
  );
}
