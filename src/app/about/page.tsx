import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import "./page.css";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About Us",
  description: "Learn more about Horizon Travel, our mission, and why we are your trusted travel partner.",
};

export default function About() {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="container relative z-10 text-center text-white h-full flex flex-col justify-center">
          <h1 className="text-white mb-sm">About Horizon Travel</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Your journey begins with us. Discover who we are and what drives our passion for travel.</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="section py-xxl bg-[#121212]">
        <div className="container grid md:grid-cols-2 gap-xl items-center">
          <FadeIn>
            <h2 className="section-title">Our Story</h2>
            <p className="text-muted mb-md">
              Founded in 2010, Horizon Travel started with a simple vision: to make the world accessible to everyone. We believe that traveling is more than just visiting new places; it's about experiencing different cultures, meeting new people, and stepping out of your comfort zone.
            </p>
            <p className="text-muted mb-lg">
              Over the past decade, we have grown from a small local agency into a globally recognized travel partner, helping thousands of clients curate their dream vacations, honeymoons, and corporate retreats.
            </p>
            <div className="stats grid grid-cols-2 gap-md">
              <div className="stat-card bg-secondary p-md rounded text-center">
                <h3 className="text-accent text-4xl mb-xs">10k+</h3>
                <p className="font-bold">Happy Travelers</p>
              </div>
              <div className="stat-card bg-secondary p-md rounded text-center">
                <h3 className="text-accent text-4xl mb-xs">50+</h3>
                <p className="font-bold">Countries</p>
              </div>
            </div>
          </FadeIn>
          <div className="about-image-wrap rounded-lg shadow-md">
            <img src="https://images.unsplash.com/photo-1522083165195-344cbdf9a452?auto=format&fit=crop&q=80&w=800" alt="Our Team" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section className="section py-xxl bg-[#0a0a0a]">
        <FadeIn className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-muted max-w-2xl mx-auto">We are committed to providing the best travel experience from the moment you contact us until you return home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-lg">
            <div className="trust-factor flex flex-col items-center text-center p-md">
              <CheckCircle2 size={48} className="text-accent mb-md" />
              <h3 className="mb-sm">Expert Knowledge</h3>
              <p className="text-muted">Our travel advisors have firsthand experience in the destinations we offer.</p>
            </div>
            <div className="trust-factor flex flex-col items-center text-center p-md">
              <CheckCircle2 size={48} className="text-accent mb-md" />
              <h3 className="mb-sm">Personalized Approach</h3>
              <p className="text-muted">We don't do cookie-cutter. Every itinerary is customized to your exact physical and budgetary requirements.</p>
            </div>
            <div className="trust-factor flex flex-col items-center text-center p-md">
              <CheckCircle2 size={48} className="text-accent mb-md" />
              <h3 className="mb-sm">Global Network</h3>
              <p className="text-muted">We have partnerships with top hotels, airlines, and local guides worldwide to give you exclusive perks.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="cta-banner text-center text-white">
        <div className="container relative z-10 py-xxl flex flex-col items-center justify-center h-full">
          <h2 className="mb-md text-white">Let's Create Your Next Memory</h2>
          <Link href="/contact" className="btn bg-white text-accent rounded-lg hover:bg-secondary font-bold" style={{ padding: '1rem 2rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
