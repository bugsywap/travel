import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Header } from "@/components/ui/header-2";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Travel Agency",
    default: "Travel Agency | Plan Your Dream Getaway",
  },
  description: "Book your dream vacation with our premium travel agency. We offer custom itineraries, tour packages, and seamless travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Horizon Travel",
    "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000",
    "@id": "https://horizontravel.com",
    "url": "https://horizontravel.com",
    "telephone": "+15551234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Wanderlust Ave, Suite 456",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: { accent: '#10b981', 'accent-hover': '#059669' },
                fontFamily: {
                  sans: ['var(--font-inter)', 'sans-serif'],
                  heading: ['var(--font-montserrat)', 'sans-serif'],
                }
              }
            }
          }
        `}} />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-blue-500/30 selection:text-blue-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  );
}
