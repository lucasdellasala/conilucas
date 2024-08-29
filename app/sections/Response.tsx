import Link from "next/link";
import { Template, Paragraph, Subtitle } from "../components/";
import { focusFont, titleFont } from "../config";

export function Response() {
  const calendarLink = "https://calendar.app.google/ja1PCZXQeNLev1w18";
  return (
    <Template backgroundColor="#804463">
      <div className="grid grid-rows-2 gap-8 place-items-center">
        <Subtitle className={`${titleFont.className}`}>
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
  );
}
