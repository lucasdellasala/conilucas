import Link from "next/link";
import { Template, Paragraph, Subtitle } from "../components/";
import { focusFont, titleFont } from "../config";

export function Response() {
  const calendarLink = "https://calendar.app.google/ja1PCZXQeNLev1w18";
  return (
    <>
      <Template backgroundColor="#AAA476">
        <div className="grid grid-rows-2 gap-8 place-items-center">
          <Subtitle className={`${titleFont.className} text-center`}>
            Agendá el evento en tu calendario
          </Subtitle>
          <Link href={calendarLink} target="_blank" rel="noopener noreferrer">
            <button className="animate-bounce border-4 p-2 rounded-lg hover:bg-[rgba(0,0,0,0.1)]">
              <Paragraph className={focusFont.className}>
                Agregar al calendario📅
              </Paragraph>
            </button>
          </Link>
        </div>
      </Template>
      <Template
        backgroundColor="#804463"
        noHScreen={true}
        className="h-[1500px] md:h-[1300px]"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUK3Nh_TuKmpt-fpQroYksKMEeQMk5TyqSpGwLZVSYNRaASg/viewform?embedded=true"
          className="w-[350px] h-[1450px] md:w-[700px] md:h-[1160px] lg:w-[640px] lg:h-[1180px]"
          title="Respuesta"
        >
          Cargando…
        </iframe>
      </Template>
    </>
  );
}
