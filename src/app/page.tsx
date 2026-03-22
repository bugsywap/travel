import { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: "Cerebro Workforce Solutions | Bridging Business and Professionals",
  description: "Connect with top-tier professional talent in Tech, Healthcare, Finance, and Engineering. Cerebro Workforce Solutions is your partner for elite recruitment and strategic staffing.",
  openGraph: {
    title: "Cerebro Workforce Solutions | Elite Recruitment Agency",
    description: "Bridging the gap between visionary companies and top-tier professionals. Voted #1 recruitment agency 2026.",
    url: "https://cerebroworkforce.com",
  },
};

export default function Home() {
  return <HomeContent />;
}
