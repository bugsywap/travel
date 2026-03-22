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
    template: "%s | Cerebro Workforce Solutions",
    default: "Cerebro Workforce Solutions | Bridging Business and Professionals",
  },
  description: "Cerebro Workforce Solutions connects top-tier professional talent with world-class organizations. Specialized recruitment for Tech, Healthcare, Finance, and Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Cerebro Workforce Solutions",
    "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000",
    "@id": "https://cerebroworkforce.com",
    "url": "https://cerebroworkforce.com",
    "telephone": "+15551234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Professional Way, Suite 789",
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
                colors: { accent: '#2E6FA5', 'accent-hover': '#255178' },
                fontFamily: {
                  sans: ['var(--font-inter)', 'sans-serif'],
                  heading: ['var(--font-montserrat)', 'sans-serif'],
                }
              }
            }
          }
        `}} />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-blue-500/30 selection:text-blue-900 relative min-h-screen">
        {/* Global Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[150px]" />
        </div>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  );
}
