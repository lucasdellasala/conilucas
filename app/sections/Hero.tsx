import { Template } from "../components/Template";

import { titleFont, focusFont } from "../config";

export function Hero() {
  return (
    <Template backgroundImage="url('/background.png')">
      <div className="pt-20 -rotate-12 text-center">
        <h1
          className={`${titleFont.className} text-5xl lg:text-8xl drop-shadow-2xl`}
        >
          Coni &amp; Lucas&apos;s
        </h1>
        <h1
          className={`${titleFont.className} text-8xl lg:text-8xl drop-shadow-2xl`}
        >
          Wedding
        </h1>
      </div>
      <div
        className={`${focusFont.className} py-10 text-xl lg:text-3xl text-center drop-shadow-2xl`}
      >
        <h2>28 DE DICIEMBRE DE 2024</h2>
      </div>
    </Template>
  );
}
