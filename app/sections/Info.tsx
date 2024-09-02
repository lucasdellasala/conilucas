import { Image, Paragraph, Template, Title } from "../components/";
import { titleFont, focusFont } from "../config";

export function Info() {
  return (
    <>
      <Template backgroundColor="#BF95AB">
        <Title className={`${titleFont.className} py-4 text-center`}>
          Había una vez
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-0 sm:pt-8">
            <Image
              src="/carousel/08.jpg"
              alt="kiss"
              className="w-full h-auto border-4 rounded-lg"
            />
          <Paragraph
            className={`${focusFont.className} !text-left pt-0 sm:pt-4 lg:pt-16 xl:pt-24`}
          >
            &quot;Corría el año 2022, la selección Argentina acababa de vencer a
            Honduras 3 a 0 en un amistoso, con dos goles de Messi. Mientras
            revisaba historias en mi celular, apareció @conischka. Armándome de
            valor, respondí a su historia y la invité a salir (...)&quot;
          </Paragraph>
        </div>
      </Template>
      <Template backgroundColor="#76A4AA">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
            <Image
              src="/carousel/09.jpg"
              alt="kiss"
              className="w-full h-auto border-4 rounded-lg"
            />
          <Paragraph
            className={`${focusFont.className} !text-left pt-4 lg:pt-16 xl:pt-24`}
          >
            &quot;(...) No sabía que en ese instante mi vida cambiaría para
            siempre. Había conocido a una de esas personas especiales, de esas
            que piensan diferente al resto, que a su corta edad ya atesoraban
            más sabiduría que muchos ancianos (...)&quot;
          </Paragraph>
        </div>
      </Template>
      <Template backgroundColor="#AAA476">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Image
              src="/carousel/07.jpg"
              alt="kiss"
              className="w-full h-auto border-4 rounded-lg"
            />
          <Paragraph
            className={`${focusFont.className} !text-left pt-4 lg:pt-16 xl:pt-24`}
          >
            &quot;(...) Ella amaba con una intensidad que consumía todo a su
            paso, como un fuego que se expande por un bosque. Mi voluntad y mi
            deseo, desde entonces, le pertenecen a ella...&quot;
          </Paragraph>
        </div>
      </Template>
      <Template backgroundColor="#804463">
        <Paragraph
          className={`${focusFont.className} text-center pt-4 lg:pt-0`}
        >
          Queremos invitarte a ser parte de esta historia y que participes de
          nuestra boda 💖
        </Paragraph>
      </Template>
    </>
  );
}
