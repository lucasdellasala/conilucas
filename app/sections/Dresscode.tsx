import { Paragraph, Template, Subtitle } from "../components/";
import { backgroundColors } from "../config";

export function Dresscode() {
  return (
    <Template backgroundColor={backgroundColors[5]}>
      <Subtitle className="pb-8">Dresscode: Etiqueta</Subtitle>
      <Paragraph className="!text-left pt-4 lg:pt-0">
        En este día tan importante nos gustaría que cada uno de ustedes brille
        con elegancia y estilo.
      </Paragraph>
    </Template>
  );
}
