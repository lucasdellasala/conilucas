import { Subtitle, Paragraph, Template, Span } from "../components/";
import { backgroundColors } from "../config";

export function Gift() {
  return (
    <Template backgroundColor={backgroundColors[8]}>
      <Subtitle className={`py-4 text-center`}>
        Si querés hacernos un regalo
      </Subtitle>
      <Paragraph className={`!text-left pt-0 sm:pt-4 lg:pt-16 xl:pt-24 w-full`}>
        Para celebrar nuestro enlace y empezar esta nueva etapa, hemos decidido
        hacer un gran viaje por el mundo y disfrutar de nuevas experiencias juntos. En lugar
        de regalos tradicionales, hemos optado por una colecta para apoyar
        nuestros planes.
      </Paragraph>
      <Paragraph className={`!text-left w-full`}>
        ¡Gracias por su amor y apoyo !
      </Paragraph>
      <Paragraph className="pb-0">
        <Span>ALIAS:</Span>
      </Paragraph>
      <Paragraph className="pt-0">
        <Span>dellasalalucasbbva</Span>
      </Paragraph>
    </Template>
  );
}
