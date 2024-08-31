import { Subtitle, Paragraph, Template, Span } from "../components/";

export function Gift() {
  return (
    <Template backgroundColor="#BF95AB">
      <Subtitle className={`py-4 text-center`}>
        Si querés hacernos un regalo
      </Subtitle>
      <Paragraph className={`!text-left pt-0 sm:pt-4 lg:pt-16 xl:pt-24`}>
        Para celebrar nuestro enlace y empezar esta nueva etapa, hemos decidido
        hacer un viaje y disfrutar de nuevas experiencias juntos. En lugar de
        regalos tradicionales, hemos optado por una pequeña colecta para apoyar
        nuestros planes.
      </Paragraph>
      <Paragraph className={`!text-left`}>
        Si deseas contribuir, nos encantaría que lo hicieras, pero lo más
        importante para nosotros es compartir este momento especial con cada uno
        de ustedes. ¡Gracias por su amor y apoyo!
      </Paragraph>
      <Paragraph>
        <Span>CVU: conischramm</Span>
      </Paragraph>
    </Template>
  );
}
