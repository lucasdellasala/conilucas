import { GenericSection } from "./GenericSection";

export function Template({
  children,
  backgroundImage,
  backgroundColor,
}: Readonly<{
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}>) {
  return (
    <GenericSection
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
    >
      <div className="h-screen w-full container px-8">
        <div className="flex items-center justify-center h-full flex-col">
          {children}
        </div>
      </div>
    </GenericSection>
  );
}
