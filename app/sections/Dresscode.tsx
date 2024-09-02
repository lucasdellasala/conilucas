import { Paragraph, Template, Subtitle, Span } from "../components/";

export function Dresscode() {
  return (
    <Template backgroundColor="#76A4AA">
      <Subtitle className="pb-8">Dresscode</Subtitle>
      <Paragraph className="!text-left pt-4 lg:pt-0">
        El código de vestimenta para esta celebración será{" "}
        <Span>elegante.</Span>
      </Paragraph>
      <div className="grid grid-cols-1 pt-8 lg:pt-16 w-full md:w-3/5 lg:w-4/5">
        <Paragraph className="text-4xl md:text-5xl lg:text-6xl text-center">Sí</Paragraph>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 col-span-7 place-items-center pt-4 lg:pt-8">
          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#bdbdbd]"
            title="Gris"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#FFA500]"
            title="Naranja"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#FFFF00]"
            title="Amarillo"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#008000]"
            title="Verde"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#0000FF]"
            title="Azul"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#4B0082]"
            title="Índigo"
          ></div>

          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#EE82EE]"
            title="Violeta"
          ></div>
          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#000000]"
            title="Negro"
          ></div>
        </div>
      </div>

      <div className="flex flex-col pt-8 lg:pt-16 w-full lg:w-1/5 justify-center align-middle items-center">
        <Paragraph className="text-4xl md:text-5xl lg:text-6xl text-center">No</Paragraph>
        <div className="grid grid-cols-2 gap-0 lg:gap-4 w-1/3 lg:w-full col-span-7 place-items-center pt-4 lg:pt-8">
          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#800020]"
            title="Rojo"
          ></div>
          <div
            className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[#FFFFF0]"
            title="Marfil"
          ></div>
        </div>
      </div>
    </Template>
  );
}
