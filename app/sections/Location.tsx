import { Paragraph, Template } from "../components/";

export function Location() {
  return (
    <Template backgroundColor="#76A4AA">
      <Paragraph className="pb-4">La cita es el 28 de diciembre de 2024 a las 18hs en Jano's Puerto Madero Boutique, <a className="text-yellow-200" href="https://maps.app.goo.gl/gJCJngfTjWRXjnVHA">Av. Dr. Tristán Achával Rodríguez 1353, CABA.</a></Paragraph>
      <div className="relative w-full h-96">
        <iframe
          title="Jano's Puerto Madero Boutique"
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13134.3360070616!2d-58.3580145!3d-34.6146794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3351e5de8984b%3A0x34adf23c89de2b3f!2sJano&#39;s%20Puerto%20Madero%20Boutique!5e0!3m2!1ses!2sar!4v1725053681986!5m2!1ses!2sar"
          allowFullScreen={false}
          aria-hidden="false"
        ></iframe>
      </div>
    </Template>
  );
}
