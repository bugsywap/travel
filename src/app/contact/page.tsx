import { Metadata } from 'next';
import ContactContent from './ContactContent';

const title = 'Contact Us | Connect with Recruitment Experts | Cerebro Workforce Solutions';
const description = 'Reach out to Cerebro Workforce Solutions. Have questions or want to discuss your hiring strategies? Our recruitment experts are ready to provide tailored answers and insights for your workforce needs.';
const url = 'https://cerebroworkforcesolution.com/contact';
const schemaUrl = `${url}/#webpage`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
  },
  twitter: {
    title,
    description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': schemaUrl,
  url,
  name: title,
  description,
  isPartOf: {
    '@id': 'https://cerebroworkforcesolution.com/#website'
  },
  publisher: {
    '@id': 'https://cerebroworkforcesolution.com/#organization'
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
