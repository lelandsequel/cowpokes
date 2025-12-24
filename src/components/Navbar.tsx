import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link to="/" className="text-xl font-black tracking-tighter uppercase">
          Cowpokes
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/info" className="hover:text-primary transition-colors">Info</Link>
          <Link to="/booking" className="hover:text-primary transition-colors">Booking</Link>
        </div>
        <Button size="sm" className="rounded-none uppercase tracking-widest font-bold" asChild>
          <Link to="/booking">Book Now</Link>
        </Button>
      </div>
    </nav>
  );
}
