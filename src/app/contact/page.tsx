"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./page.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container relative z-10 text-center text-white h-full flex flex-col justify-center">
          <h1 className="text-white mb-sm">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">We're here to help you plan your next adventure.</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="section py-xxl bg-white">
        <div className="container grid lg:grid-cols-2 gap-xl">
          {/* Contact Information */}
          <div>
            <h2 className="section-title mb-md">Get in Touch</h2>
            <p className="text-muted mb-lg">Have a question about our services or ready to book? Reach out to our team of travel experts using the contact details below or send us a message.</p>
            
            <div className="flex flex-col gap-md mb-xl">
              <div className="flex items-start gap-sm">
                <div className="icon-wrap bg-secondary text-accent p-sm rounded"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold">Head Office</h4>
                  <p className="text-muted">123 Wanderlust Ave, Suite 456<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <div className="icon-wrap bg-secondary text-accent p-sm rounded"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <p className="text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <div className="icon-wrap bg-secondary text-accent p-sm rounded"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="text-muted">info@horizontravel.com</p>
                </div>
              </div>
              <div className="flex items-start gap-sm">
                <div className="icon-wrap bg-secondary text-accent p-sm rounded"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold">Business Hours</h4>
                  <p className="text-muted">Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap bg-secondary p-lg rounded-lg shadow-sm border border-border">
            <h3 className="mb-md">Send Us a Message</h3>
            
            {status === "success" && (
              <div className="form-alert success mb-md p-sm rounded text-center font-bold">
                Thank you! Your message has been sent successfully. We'll be in touch soon.
              </div>
            )}
            
            {status === "error" && (
              <div className="form-alert error mb-md p-sm rounded text-center font-bold">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-sm">
              <div className="form-group flex flex-col gap-xs">
                <label htmlFor="name" className="font-bold text-muted">Full Name <span className="text-accent">*</span></label>
                <input type="text" id="name" name="name" className="form-control rounded" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid md:grid-cols-2 gap-sm">
                <div className="form-group flex flex-col gap-xs">
                  <label htmlFor="email" className="font-bold text-muted">Email Address <span className="text-accent">*</span></label>
                  <input type="email" id="email" name="email" className="form-control rounded" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group flex flex-col gap-xs">
                  <label htmlFor="phone" className="font-bold text-muted">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control rounded" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group flex flex-col gap-xs">
                <label htmlFor="message" className="font-bold text-muted">Your Message <span className="text-accent">*</span></label>
                <textarea id="message" name="message" rows={5} className="form-control rounded" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary rounded mt-sm w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section h-96 bg-secondary">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </section>
    </div>
  );
}
