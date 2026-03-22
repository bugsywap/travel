"use client";

import { useState } from "react";
import { CalendarCheck, Users, Info } from "lucide-react";
import "./page.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "tours",
    date: "",
    guests: "2",
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", serviceType: "tours", date: "", guests: "2", notes: ""
      });
      setTimeout(() => setStatus("idle"), 8000);
    }, 2000);
  };

  return (
    <div className="booking bg-secondary min-h-screen pt-xxl pb-xxl" style={{marginTop: '80px'}}>
      <div className="container max-w-4xl mx-auto">
        
        <div className="text-center mb-xl">
          <h1 className="mb-sm">Book Your Appointment</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">Take the first step towards your dream vacation. Fill out the form below to schedule a time to speak with our travel experts.</p>
        </div>

        <div className="booking-card bg-white p-xl rounded-lg shadow-md border border-border">
          
          {status === "success" ? (
            <div className="text-center py-xl flex flex-col items-center">
              <CalendarCheck size={64} className="text-accent mb-md" />
              <h2 className="mb-sm text-2xl font-bold">Booking Confirmed!</h2>
              <p className="text-muted text-lg max-w-md mx-auto mb-lg">Thank you for requesting an appointment! A confirmation email has been sent. Our team will contact you shortly.</p>
              <button className="btn btn-outline rounded" onClick={() => setStatus("idle")}>Book Another Appointment</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
              
              {/* Section 1: Personal Info */}
              <div>
                <h3 className="flex items-center gap-xs border-b border-border pb-sm mb-md text-xl">
                  <Users size={20} className="text-accent" /> Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-md">
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="firstName" className="font-bold text-muted text-sm">First Name <span className="text-accent">*</span></label>
                    <input type="text" id="firstName" name="firstName" className="form-control rounded" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="lastName" className="font-bold text-muted text-sm">Last Name <span className="text-accent">*</span></label>
                    <input type="text" id="lastName" name="lastName" className="form-control rounded" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="email" className="font-bold text-muted text-sm">Email Address <span className="text-accent">*</span></label>
                    <input type="email" id="email" name="email" className="form-control rounded" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="phone" className="font-bold text-muted text-sm">Phone Number <span className="text-accent">*</span></label>
                    <input type="tel" id="phone" name="phone" className="form-control rounded" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              {/* Section 2: Appointment Details */}
              <div>
                <h3 className="flex items-center gap-xs border-b border-border pb-sm mb-md text-xl mt-md">
                  <CalendarCheck size={20} className="text-accent" /> Appointment Details
                </h3>
                <div className="grid md:grid-cols-2 gap-md">
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="serviceType" className="font-bold text-muted text-sm">Service of Interest <span className="text-accent">*</span></label>
                    <select id="serviceType" name="serviceType" className="form-control rounded" value={formData.serviceType} onChange={handleChange} required>
                      <option value="tours">Tour Packages</option>
                      <option value="custom">Custom Itineraries</option>
                      <option value="visa">Visa Assistance</option>
                      <option value="consultation">General Travel Consultation</option>
                    </select>
                  </div>
                  <div className="form-group flex flex-col gap-xs">
                    <label htmlFor="guests" className="font-bold text-muted text-sm">Number of Travelers</label>
                    <input type="number" id="guests" name="guests" min="1" max="20" className="form-control rounded" value={formData.guests} onChange={handleChange} />
                  </div>
                  <div className="form-group flex flex-col gap-xs md:col-span-2">
                    <label htmlFor="date" className="font-bold text-muted text-sm">Preferred Appointment Date <span className="text-accent">*</span></label>
                    <input type="date" id="date" name="date" className="form-control rounded" value={formData.date} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              {/* Section 3: Additional Info */}
              <div>
                <h3 className="flex items-center gap-xs border-b border-border pb-sm mb-md text-xl mt-md">
                  <Info size={20} className="text-accent" /> Additional Information
                </h3>
                <div className="form-group flex flex-col gap-xs">
                  <label htmlFor="notes" className="font-bold text-muted text-sm">Any special requests or details we should know before we call?</label>
                  <textarea id="notes" name="notes" rows={4} className="form-control rounded" placeholder="E.g., planning a honeymoon, budget constraints, specific destinations..." value={formData.notes} onChange={handleChange}></textarea>
                </div>
              </div>

              <div className="pt-md border-t border-border mt-md">
                <button type="submit" className="btn btn-primary rounded text-lg py-sm w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "Processing..." : "Confirm Booking Appointment"}
                </button>
                <p className="text-center text-sm text-muted mt-sm">By submitting this form, you agree to our privacy policy and terms of service.</p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
