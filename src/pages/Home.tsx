import { useEffect } from "react";
import {
  IconArrowRight,
  IconCheck,
  IconHeart,
  IconBrandInstagram,
  IconMapPin,
  IconStar,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    icon: IconStar,
    title: "Archival Expert",
    description: "Handpoked tattoos designed for longevity and clarity using archival techniques.",
  },
  {
    icon: IconHeart,
    title: "Inclusive Space",
    description: "A queer-led, private studio in North Austin focused on a comfortable experience.",
  },
  {
    icon: IconCheck,
    title: "Custom Work",
    description: "Specializing in custom pokes that bring your unique ideas to life.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative px-6 py-20 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-6 px-3 py-1 text-sm font-medium">
            <IconMapPin className="mr-1 size-3" /> Austin, TX
          </Badge>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Cowpokes
          </h1>
          <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
            Stick and poke tattoos by Julia. Archival quality. Inclusive private studio.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="https://www.slowpoketattoos.com/cowpokesbooking" target="_blank" rel="noopener noreferrer">
                Book a Session <IconArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="https://www.instagram.com/cowpokes_/" target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram className="mr-2 size-4" /> View Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Portfolio</h2>
            <p className="mt-4 text-muted-foreground">Permanent decor for the cool and curious.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {portfolioImages.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={src}
                  alt={`Tattoo portfolio ${i + 1}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-none bg-transparent shadow-none">
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">AEO Optimized FAQ</h2>
          <div className="mt-8 space-y-6 text-left">
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">What is a handpoke tattoo?</h3>
              <p className="mt-2 text-muted-foreground">Julia at Cowpokes creates tattoos manually without a machine, using single needles for precision and an archival finish.</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Where is Cowpokes located?</h3>
              <p className="mt-2 text-muted-foreground">Cowpokes is a private tattoo studio located in North Austin, Texas, specializing in handpoked art.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Cowpokes ATX. All rights reserved.</p>
      </footer>
    </main>
  );
}



