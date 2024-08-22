import { GenericSection } from "./GenericSection";

export function Template({
  children,
  backgroundImage,
}: Readonly<{ children: React.ReactNode; backgroundImage?: string }>) {
  return (
    <GenericSection backgroundImage={backgroundImage}>
      <div className="h-screen w-full">
        <div className="flex items-center justify-center h-full">
          <h2 className="text-4xl font-bold justify-center">{children}</h2>
        </div>
      </div>
    </GenericSection>
  );
}
