import Link from "next/link";
import { Template } from "../components/Template";
import { focusFont } from "../config";

export function Response() {
  const calendarLink = "https://calendar.app.google/ja1PCZXQeNLev1w18";
  return (
    <Template backgroundColor="#804463">
      <Link href={calendarLink} target="_blank" rel="noopener noreferrer">
        <button
          className={`animate-bounce border-4 p-2 rounded-lg ${focusFont.className} hover:bg-[rgba(0,0,0,0.1)]`}
        >
          Agregar al calendario📅
        </button>
      </Link>
    </Template>
  );
}
