import { Navbar } from "@/components/Navbar";

const portfolioImages = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
];

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-black uppercase mb-12 tracking-tighter">The Archive</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {portfolioImages.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-muted">
              <img
                src={src}
                alt={`Portfolio piece ${i + 1}`}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
