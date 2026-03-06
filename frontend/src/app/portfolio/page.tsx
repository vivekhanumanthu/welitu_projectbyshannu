import Image from "next/image";

const projects = [
  {
    title: "Hyderabad Royal Wedding",
    location: "Taj Falaknuma",
    guests: 450,
    theme: "Royal Gold",
    image: "/images/wedding-1.png"
  },
  {
    title: "Destination Palace Wedding",
    location: "Udaipur",
    guests: 380,
    theme: "Champagne Majesty",
    image: "/images/wedding-2.png"
  },
  {
    title: "Luxury Indoor Reception",
    location: "Hyderabad",
    guests: 300,
    theme: "Ivory Crystal",
    image: "/images/wedding-3.png"
  },
  {
    title: "Beach Wedding Weekend",
    location: "Goa",
    guests: 230,
    theme: "Sunset Sand",
    image: "/images/wedding-2.png"
  }
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Portfolio</p>
      <h1 className="mt-3 font-serif text-6xl">Wedding Showcase</h1>
      <p className="mt-4 max-w-3xl text-sm text-night/75">
        A portfolio-first view of curated weddings across destination, traditional, and luxury indoor celebrations.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-champagne/35 bg-white">
            <Image src={project.image} alt={project.title} width={1200} height={800} className="h-72 w-full object-cover" />
            <div className="p-6">
              <h2 className="font-serif text-4xl">{project.title}</h2>
              <p className="mt-3 text-sm text-night/70">Location: {project.location}</p>
              <p className="text-sm text-night/70">Guests: {project.guests}</p>
              <p className="text-sm text-night/70">Theme: {project.theme}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
