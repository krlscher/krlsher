import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy",
  description: "How we handle personal data of visitors to the site.",
};

export default function PrivacyPageEN() {
  return (
    <>
      <Nav lang="en" />
      <main className="section">
        <div className="container container--narrow">
          <div className="t-eyebrow">PRIVACY</div>
          <hr className="eyebrow-rule" />
          <h1 className="t-h1" style={{ marginTop: "var(--space-5)" }}>
            Privacy policy
          </h1>
          <div style={{ marginTop: "var(--space-7)", maxWidth: 640, color: "var(--text-muted)", fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.65 }}>
            <p>
              The dr.Scherbakov site collects the minimum personal data needed to contact a patient.
              If you fill in the contact form, your name, phone, and message are forwarded only to
              the doctor — by email and to a private Telegram channel. This data is not shared with
              third parties, is not used for marketing, and is retained only for the purpose of the
              follow-up conversation.
            </p>
            <p>
              The site uses cookieless analytics (Plausible) for traffic measurement. IP addresses
              are anonymised; personal profiles are not built.
            </p>
            <p>
              To request deletion of your data, message us on WhatsApp or Telegram.
            </p>
          </div>
          <p style={{ marginTop: "var(--space-7)" }}>
            <Link href="/en" className="btn btn--link">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
