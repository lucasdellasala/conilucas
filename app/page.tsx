import { sections } from "./sections/";

export default function Home() {
  //const calendarLink = "https://calendar.app.google/QLrnZCHPgn8C27xV7"; // Reemplaza con tu enlace
  // I want to display the array of sections here in the main component in nextjs server component

  return (
    <main>
      {/*       <h1 className={`${satisfy.className} text-8xl`}>Coni & Lucas</h1>
      <Link href={calendarLink} target="_blank" rel="noopener noreferrer">
        <button>Agregar al calendario</button>
      </Link> */}
      <div>
        {sections.map(({ component: Component, key }) => (
          <div key={key}>
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
}
