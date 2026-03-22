import { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Transparency",
  description: "Read the Cerebro Workforce Solutions Privacy Policy. We are committed to protecting your personal data and ensuring transparency in how we handle information.",
  openGraph: {
    title: "Privacy Policy | Cerebro's Commitment to Data Security",
    description: "Transparency and security are core to our values. Learn how we handle and protect your data.",
    url: "https://cerebroworkforce.com/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
