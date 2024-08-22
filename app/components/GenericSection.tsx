export function GenericSection({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="flex items-center justify-center h-full flex-col">
        {children}
      </div>
    </div>
  );
}

