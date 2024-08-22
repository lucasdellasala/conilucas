import { Template } from "../components/Template";

import { Satisfy, Concert_One } from "@next/font/google";
import { GenericSection } from "../components/GenericSection";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

const rubik = Concert_One({
  weight: "400",
  subsets: ["latin"],
});

export function Hero() {
  return (
    <Template backgroundImage="url('/background.png')">
        <div className="pt-20 -rotate-12 text-center animate-bounceOnce">
          <h1 className={`${satisfy.className} text-5xl lg:text-8xl drop-shadow-2xl`}>
            Coni &amp; Lucas&apos;s
          </h1>
          <h1 className={`${satisfy.className} text-8xl lg:text-8xl drop-shadow-2xl`}>
            Wedding
          </h1>
        </div>
        <div className={`${rubik.className} py-10 text-xl lg:text-3xl text-center drop-shadow-2xl`}>
          <h2>28 DE DICIEMBRE DE 2024</h2>
        </div>
    </Template>
  );
}

/* 

export function Hero() {
  return (
    <GenericSection backgroundImage="url('/background.png')">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="flex items-center justify-center h-full flex-col">
          <div className="pt-20 -rotate-12 text-center">
            <h1 className={`${satisfy.className} text-5xl lg:text-8xl`}>
              Coni &amp; Lucas&apos;s
            </h1>
            <h1 className={`${satisfy.className} text-8xl lg:text-8xl`}>
              Wedding
            </h1>
          </div>
          <div className={`${rubik.className} py-10 text-xl lg:text-3xl`}>
            <h2>28 DE DICIEMBRE DE 2024</h2>
          </div>
        </div>
      </div>
    </GenericSection>
  );
}
 */
