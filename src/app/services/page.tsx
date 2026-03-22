import { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: "Recruitment Services | Executive Search & Staffing Solutions",
  description: "Explore our comprehensive workforce solutions including Executive Search, Direct Hire, Contract Staffing, and HR Consulting. Tailored strategies for your organization.",
  openGraph: {
    title: "Services | Specialized Recruitment Strategies",
    description: "From C-suite leaders to agile contract teams. Discover Cerebro's world-class staffing solutions.",
    url: "https://cerebroworkforce.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
