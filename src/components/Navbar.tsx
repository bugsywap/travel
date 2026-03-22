"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container flex justify-between items-center navbar-container">
        <Link href="/" className="logo font-bold">
          Horizon<span className="text-accent">Travel</span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/booking" className="btn btn-primary rounded">Book Now</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="container flex flex-col gap-md py-md">
            <Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
            <Link href="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            <Link href="/booking" className="btn btn-primary rounded text-center" onClick={toggleMenu}>Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
