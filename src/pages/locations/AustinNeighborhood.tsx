import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconMapPin, IconArrowRight } from "@tabler/icons-react";

export default function AustinNeighborhood() {
  const { neighborhood } = useParams();
  const name = neighborhood?.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") || "Austin";

  return (
    <main className="min-h-screen bg-background px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <Badge variant="outline" className="mb-6">
          <IconMapPin className="mr-1 size-3" /> {name}, Austin, TX
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          Handpoke Tattoos in {name}
        </h1>
        <p className="mb-10 text-xl text-muted-foreground">
          Looking for a stick and poke tattoo in {name}? Cowpokes is a private, inclusive studio serving the {name} area with archival quality handpoked art.
        </p>
        <Button size="lg" className="rounded-full px-8" asChild>
          <a href="https://www.slowpoketattoos.com/cowpokesbooking" target="_blank" rel="noopener noreferrer">
            Book in {name} <IconArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </main>
  );
}
