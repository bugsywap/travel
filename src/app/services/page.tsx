import Link from "next/link";
import { Plane, Map, Briefcase, MessagesSquare } from "lucide-react";
import "./page.css";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Our Services",
  description: "Explore our comprehensive travel services including tour packages, custom itineraries, visa assistance, and consultations.",
};

export default function Services() {
  return (
    <div className="services">
      <section className="page-hero">
        <div className="container relative z-10 text-center text-white h-full flex flex-col justify-center">
          <h1 className="text-white mb-sm">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Comprehensive solutions for all your travel needs.</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="section py-xxl bg-[#121212]" id="tours">
        <FadeIn className="container grid md:grid-cols-2 gap-xl items-center">
          <div className="service-image rounded-lg shadow-md order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800" alt="Tour Packages" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="icon-wrap bg-secondary text-accent p-sm rounded inline-block mb-md">
              <Plane size={32} />
            </div>
            <h2 className="mb-md">Curated Tour Packages</h2>
            <p className="text-muted mb-md">
              Join our fully-guided, small group tour packages to the world's most breathtaking destinations. These inclusive packages cover flights, accommodations, guided tours, and select meals so you have nothing to worry about.
            </p>
            <ul className="text-muted mb-lg flex flex-col gap-xs">
              <li>✓ Hand-picked luxury and boutique hotels</li>
              <li>✓ Expert local guides in every city</li>
              <li>✓ VIP access to popular attractions</li>
            </ul>
            <Link href="/booking?service=tours" className="btn btn-primary rounded">Book a Package</Link>
          </div>
        </FadeIn>
      </section>

      <section className="section py-xxl bg-[#0a0a0a]" id="custom">
        <FadeIn className="container grid md:grid-cols-2 gap-xl items-center">
          <div>
            <div className="icon-wrap bg-white text-accent p-sm rounded inline-block mb-md shadow-sm">
              <Map size={32} />
            </div>
            <h2 className="mb-md">Custom Itineraries</h2>
            <p className="text-muted mb-md">
              Prefer to travel your own way? Let us craft a bespoke itinerary tailored precisely to your schedule, interests, and budget. From honeymoon romantic escapes to thrilling adventure treks, we design trips that are entirely uniquely yours.
            </p>
            <ul className="text-muted mb-lg flex flex-col gap-xs">
              <li>✓ 100% personalized travel plans</li>
              <li>✓ Flexible scheduling and pacing</li>
              <li>✓ Special requests accommodated easily</li>
            </ul>
            <Link href="/booking?service=custom" className="btn btn-primary rounded">Start Custom Planning</Link>
          </div>
          <div className="service-image rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" alt="Custom Itineraries" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </section>

      <section className="section py-xxl bg-[#121212]" id="visa">
        <FadeIn className="container grid md:grid-cols-2 gap-xl items-center">
          <div className="service-image rounded-lg shadow-md order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" alt="Visa Assistance" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <div className="icon-wrap bg-secondary text-accent p-sm rounded inline-block mb-md">
              <Briefcase size={32} />
            </div>
            <h2 className="mb-md">Visa & Document Assistance</h2>
            <p className="text-muted mb-md">
              Navigating international travel requirements can be tedious. Our team provides expert guidance on passport renewals, travel visas, and necessary documentation to ensure a hassle-free trip.
            </p>
            <Link href="/contact" className="btn btn-primary rounded">Inquire Now</Link>
          </div>
        </FadeIn>
      </section>

      <section className="section py-xxl bg-[#0a0a0a]" id="consult">
        <FadeIn className="container grid md:grid-cols-2 gap-xl items-center">
          <div>
            <div className="icon-wrap bg-white text-accent p-sm rounded inline-block mb-md shadow-sm">
              <MessagesSquare size={32} />
            </div>
            <h2 className="mb-md">Travel Consultation</h2>
            <p className="text-muted mb-md">
              Not sure where to go? Need advice on travel insurance, packing, or currency? Schedule a 1-on-1 consultation with our senior travel advisors. We'll answer all your questions and provide expert recommendations.
            </p>
            <Link href="/booking?service=consultation" className="btn btn-primary rounded">Book Consultation</Link>
          </div>
          <div className="service-image rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Travel Consultation" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
