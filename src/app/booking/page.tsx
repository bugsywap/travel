import { Metadata } from 'next';
import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: "Book Consultation | Appointment Scheduling",
  description: "Schedule a strategic consultation with Cerebro Workforce Solutions. Our recruitment experts provide tailored strategies for your career or business.",
  openGraph: {
    title: "Book an Appointment | Recruitment Strategy Session",
    description: "Plan your next move with Cerebro. Expert-led consultations for talent and organizations.",
    url: "https://cerebroworkforce.com/booking",
  },
};

export default function BookingPage() {
  return <BookingContent />;
}
