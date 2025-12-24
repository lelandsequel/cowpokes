import { Navbar } from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IconMapPin, IconClock, IconMail } from "@tabler/icons-react";

export default function Info() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <h1 className="text-4xl font-black uppercase mb-12 tracking-tighter">Information</h1>
        
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase mb-6 border-b pb-2">Location & Hours</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <IconMapPin className="mt-1 size-5 shrink-0" />
              <div>
                <p className="font-bold">Private Studio</p>
                <p className="text-muted-foreground">North Austin, TX 78758</p>
                <p className="text-xs text-muted-foreground mt-1">*Exact address sent upon booking confirmation</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconClock className="mt-1 size-5 shrink-0" />
              <div>
                <p className="font-bold">By Appointment Only</p>
                <p className="text-muted-foreground">Mon - Fri: 10am - 6pm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase mb-6 border-b pb-2">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="uppercase font-bold text-sm">Do handpoked tattoos hurt?</AccordionTrigger>
              <AccordionContent>
                Generally, handpoked tattoos are less painful than machine tattoos. The process is slower and gentler on the skin, often described as a repetitive pinching sensation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="uppercase font-bold text-sm">How long do they take to heal?</AccordionTrigger>
              <AccordionContent>
                Handpoked tattoos typically heal faster than machine tattoos, usually within 2 weeks, as there is less trauma to the skin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="uppercase font-bold text-sm">Is it sanitary?</AccordionTrigger>
              <AccordionContent>
                Absolutely. I use single-use, sterile needles and high-quality ink. All equipment is barrier-protected, and I maintain hospital-grade sanitation standards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
}
