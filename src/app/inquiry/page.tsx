import { Metadata } from 'next';
import InquiryContent from './InquiryContent';

export const metadata: Metadata = {
  title: "Inquiry | Business Solutions & Candidate Applications",
  description: "Start your recruitment inquiry with Cerebro. Specialized business consultations for employers and elite network applications for candidates.",
  openGraph: {
    title: "Inquiry | Recruitment and Career Solutions",
    description: "Connect with our experts. Whether hiring or seeking, start your journey with Cerebro Workforce Solutions.",
    url: "https://cerebroworkforce.com/inquiry",
  },
};

export default function InquiryPage() {
  return <InquiryContent />;
}
