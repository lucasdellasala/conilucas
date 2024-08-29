import { Template, Title, Subtitle, Paragraph } from "../components/";

import { titleFont, focusFont } from "../config";

export function Hero() {
  return (
    <Template backgroundImage="url('/background.png')">
      <div className="pt-20 -rotate-12 text-center">
        <Subtitle
          className={`${titleFont.className}`}
        >
          Coni &amp; Lucas&apos;s
        </Subtitle>
        <Title
          className={`${titleFont.className}`}
        >
          Wedding
        </Title>
      </div>
      <div
        className={`${focusFont.className} py-10`}
      >
        <Paragraph>28 DE DICIEMBRE DE 2024</Paragraph>
      </div>
    </Template>
  );
}
