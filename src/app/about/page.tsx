import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: "About Us | Cerebro Workforce Solutions",
  description: "Learn about Cerebro's philosophy, our story of human capital excellence, and how we bridge the gap between visionary companies and elite talent.",
  openGraph: {
    title: "About Cerebro | Visionary Recruitment & Talent Strategy",
    description: "Our philosophy is rooted in human capital excellence. Learn how Cerebro bridges the talent gap.",
    url: "https://cerebroworkforce.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
