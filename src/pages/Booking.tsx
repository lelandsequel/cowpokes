import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Booking() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-6 py-12 max-w-xl">
        <h1 className="text-4xl font-black uppercase mb-8 tracking-tighter">Booking Request</h1>
        <p className="text-muted-foreground mb-8">
          Please fill out the form below to request an appointment. 
          I will review your idea and get back to you via email.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your name" />
          </div>
          
          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="your@email.com" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="placement">Placement</Label>
            <Input type="text" id="placement" placeholder="e.g. Left inner forearm" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="size">Approximate Size</Label>
            <Input type="text" id="size" placeholder="e.g. 3x3 inches" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="description">Tattoo Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your idea. Feel free to link to reference images." 
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full rounded-none uppercase tracking-widest font-bold h-12">
            Submit Request
          </Button>
        </form>
      </div>
    </main>
  );
}
