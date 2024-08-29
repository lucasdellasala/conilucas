import { Image, Paragraph, Template, Title } from "../components/";
import { titleFont, focusFont } from "../config";

export function Info() {
  return (
    <Template backgroundColor="#BF95AB">
      <Title className={`${titleFont.className} py-4`}>Había una vez</Title>
      <div className="grid grid-cols-2">
        <Paragraph className={`${focusFont.className} !text-left`}>
          &quot;Corría el año 2022, la selección Argentina acababa de vencer a
          Honduras 3 a 0 en un amistoso, con dos goles de Messi. Mientras
          revisaba historias en mi celular, apareció @conischka. Armándome de
          valor, respondí a su historia y la invité a salir. No sabía que en ese
          instante mi vida cambiaría para siempre. Había conocido a una de esas
          personas especiales, de esas que piensan diferente al resto, que a su
          corta edad ya atesoraban más sabiduría que muchos ancianos. Ella amaba
          con una intensidad que consumía todo a su paso, como un fuego que se
          expande por un bosque. Mi voluntad y mi deseo, desde entonces, le
          pertenecen a ella...&quot;
        </Paragraph>
        <div className="border-4 rounded-lg overflow-hidden h-2/3 w-2/3">
          <Image src="/carousel/07.jpg" alt="kiss" className="object-cover h-96 object-center w-full"/>
        </div>
      </div>
    </Template>
  );
}
