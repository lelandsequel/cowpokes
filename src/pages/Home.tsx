import {
  Skull,
  Scissors,
  Cross,
  Bookmark,
  MapPin,
  Instagram,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const portfolioImages = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
];

const features = [
  {
    icon: Skull,
    title: "Archival Expert",
    description: "Handpoked tattoos designed for longevity and clarity using archival techniques.",
  },
  {
    icon: Scissors,
    title: "Stick & Poke",
    description: "Traditional manual method. No machines, just precision and patience.",
  },
  {
    icon: ShieldCheck,
    title: "Private Studio",
    description: "North Austin based, queer and inclusive space for all bodies.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Editorial Header */}
      <nav className="border-b px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase">
        <div className="font-bold">Cowpokes / ATX</div>
        <div className="flex gap-8">
          <a href="#portfolio" className="hover:underline">Work</a>
          <a href="https://www.slowpoketattoos.com/cowpokesbooking" className="hover:underline">Booking</a>
        </div>
      </nav>

      {/* Hero: Asymmetric Editorial */}
      <section className="px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-end border-b">
        <div>
          <Badge variant="outline" className="mb-8 rounded-none border-foreground/20 text-[10px] uppercase tracking-[0.2em]">
            Archival Handpoke Studio
          </Badge>
          <h1 className="text-6xl lg:text-9xl font-black leading-[0.8] tracking-tighter mb-12">
            PERMANENT<br />DECOR.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground mb-12 border-l-2 border-primary pl-6">
            Julia is an archival tattoo expert based in North Austin. Specializing in high-contrast handpoked art designed to age gracefully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none h-16 px-10 text-lg uppercase font-bold" asChild>
              <a href="https://www.slowpoketattoos.com/cowpokesbooking" target="_blank" rel="noopener noreferrer">
                Secure a Session <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none h-16 px-10 text-lg uppercase font-bold border-foreground" asChild>
              <a href="https://www.instagram.com/cowpokes_/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 size-5" /> Instagram
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative aspect-[4/5] bg-muted overflow-hidden">
          <img 
            src="/portfolio/3.jpg" 
            alt="Handpoke detail" 
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest vertical-text opacity-50">
            North Austin Private Studio
          </div>
        </div>
      </section>

      {/* Technicals Section */}
      <section className="px-6 py-24 border-b">
        <div className="grid lg:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <feature.icon className="size-8 stroke-1" />
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio: Editorial Grid */}
      <section id="portfolio" className="px-6 py-24 border-b bg-primary text-primary-foreground">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">THE<br />ARCHIVE.</h2>
          <div className="text-right text-xs uppercase tracking-widest max-w-[200px] opacity-70">
            Handpoked and healed. Designed for longevity.
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2 lg:col-span-2 aspect-square overflow-hidden bg-black/20">
            <img src="/portfolio/1.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
          </div>
          <div className="aspect-square overflow-hidden bg-black/20">
            <img src="/portfolio/2.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
          </div>
          <div className="aspect-square overflow-hidden bg-black/20">
            <img src="/portfolio/4.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
          </div>
          <div className="aspect-square overflow-hidden bg-black/20">
            <img src="/portfolio/5.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
          </div>
          <div className="col-span-2 aspect-[16/9] lg:aspect-auto lg:col-span-3 overflow-hidden bg-black/20">
            <img src="/portfolio/6.jpg" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* AEO: Semantic Content */}
      <section className="px-6 py-24 border-b grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-8 italic">FREQUENTLY<br />ASKED.</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-bold uppercase text-sm mb-2">What is handpoke?</h3>
              <p className="text-muted-foreground">Handpoke (stick and poke) is a manual tattoo method where the artist applies ink without a machine. It's quieter, less traumatic to the skin, and has a distinct aesthetic.</p>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm mb-2">How long does it take to heal?</h3>
              <p className="text-muted-foreground">Julia's archival method ensures efficient healing, typically taking 2-3 weeks. Detailed aftercare instructions are provided with every session.</p>
            </div>
          </div>
        </div>
        <div className="bg-muted p-12 flex flex-col justify-center">
          <div className="mb-8">
            <MapPin className="size-10 mb-6" />
            <h3 className="text-3xl font-black tracking-tight mb-2 uppercase">Austin, Texas</h3>
            <p className="text-muted-foreground">Located in a private studio in North Austin. Exact location shared upon booking confirmation.</p>
          </div>
          <Button variant="link" className="p-0 h-auto text-foreground font-bold uppercase tracking-widest text-xs" asChild>
            <a href="https://www.slowpoketattoos.com/cowpokesbooking">Book Now →</a>
          </Button>
        </div>
      </section>

      <footer className="px-6 py-12 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] opacity-50">
        <div>© {new Date().getFullYear()} Cowpokes ATX</div>
        <div>North Austin Private Studio</div>
      </footer>
    </main>
  );
}




