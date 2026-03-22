import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: "Contact Us | Connect with Recruitment Experts",
  description: "Reach out to Cerebro Workforce Solutions. Have questions about our recruitment services or career opportunities? Our experts are here to help.",
  openGraph: {
    title: "Contact | Let's Talk Talent & Strategy",
    description: "Get in touch with Cerebro's specialized recruitment desk. We're ready to help you build your elite workforce.",
    url: "https://cerebroworkforce.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
