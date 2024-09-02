import { Paragraph, Template, Subtitle } from "../components/";

export function Dresscode() {
  const colors = {
    yes: [
      {
        hex: "#bdbdbd",
        title: "Gris",
      },
      {
        hex: "#FFA500",
        title: "Naranja",
      },
      {
        hex: "#FFFF00",
        title: "Amarillo",
      },
      {
        hex: "#008000",
        title: "Verde",
      },
      {
        hex: "#0000FF",
        title: "Azul",
      },
      {
        hex: "#4B0082",
        title: "Índigo",
      },
      {
        hex: "#EE82EE",
        title: "Violeta",
      },
      {
        hex: "#000000",
        title: "Negro",
      },
    ],
    no: [
      {
        hex: "#800020",
        title: "Rojo",
      },
      {
        hex: "#FFFFF0",
        title: "Blanco",
      },
    ],
  };

  const yesSwatches = colors.yes.map((color) => generateColorSwatch(color));
  const noSwatches = colors.no.map((color) => generateColorSwatch(color));


  return (
    <Template backgroundColor="#76A4AA">
      <Subtitle className="pb-8">Dresscode: elegante</Subtitle>
      <Paragraph className="!text-left pt-4 lg:pt-0">
        En este día tan importante, nos gustaría que cada uno de ustedes brille
        con elegancia y estilo.
      </Paragraph>
      <div className="grid grid-cols-1 pt-8 lg:pt-16 w-full md:w-3/5 lg:w-4/5">
        <Paragraph className="text-4xl md:text-5xl lg:text-6xl text-center">
          Sí
        </Paragraph>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 col-span-7 place-items-center pt-4 lg:pt-8">
          {yesSwatches}
        </div>
      </div>

      <div className="flex flex-col pt-8 lg:pt-16 w-full lg:w-1/5 justify-center align-middle items-center">
        <Paragraph className="text-4xl md:text-5xl lg:text-6xl text-center">
          No
        </Paragraph>
        <div className="grid grid-cols-2 gap-0 lg:gap-4 w-1/3 lg:w-full col-span-7 place-items-center pt-4 lg:pt-8">
          {noSwatches}
        </div>
      </div>
    </Template>
  );
}

function generateColorSwatch({ hex, title }: { hex: string; title: string }) {
  return (
    <div
      key={`swatch-${title}`}
      className={`w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 rounded-full bg-[${hex}]`}
      title={title}
    ></div>
  );
}
