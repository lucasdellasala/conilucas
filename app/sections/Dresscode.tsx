import { Paragraph, Template, Subtitle, Span } from "../components/";

export function Dresscode() {
  return (
    <Template backgroundColor="#AAA476">
      <Subtitle className="pb-8">Dresscode</Subtitle>
      <Paragraph className="!text-left pt-4 lg:pt-0">
        El código de vestimenta para esta celebración será{" "}
        <Span>elegante.</Span>
      </Paragraph>
      <div className="grid grid-cols-1 pt-8 lg:pt-16 w-full lg:w-3/5">
        <Subtitle className="text-4xl lg:text-6xl text-center">Si</Subtitle>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 col-span-7 place-items-center pt-4 lg:pt-8">
          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#C3B1E1] "
            title="Lavanda Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#F7C6A3] "
            title="Durazno Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#A8E6CF] "
            title="Verde Menta Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#A7C7E7] "
            title="Celeste Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#FFFACD] "
            title="Amarillo Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#FDC5F5] "
            title="Rosa Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#F7B7A3] "
            title="Coral Pastel"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#DCC6E0] "
            title="Lila Pastel"
          ></div>
          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#003366] "
            title="Azul Marino"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#D3D3D3] "
            title="Gris Claro"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#6B8E23] "
            title="Verde Oliva"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#F5F5DC] "
            title="Beige"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#A9A9A9] "
            title="Gris Oscuro"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#87CEEB] "
            title="Azul Cielo"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#8B4513] "
            title="Marrón"
          ></div>

          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#9E9E9E]"
            title="Gris Pardo"
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 pt-8 lg:pt-16 w-full lg:w-1/5">
        <Subtitle className="text-4xl lg:text-6xl text-center">No</Subtitle>
        <div className="grid grid-cols-3 gap-4 col-span-7 place-items-center pt-4 lg:pt-8">
          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#800020]"
            title="Rojo"
          ></div>
          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#FFFFF0]"
            title="Marfil"
          ></div>
          <div
            className="w-8 lg:w-16 h-8 lg:h-16 rounded-full bg-[#000000] "
            title="Negro"
          ></div>
        </div>
      </div>
    </Template>
  );
}
