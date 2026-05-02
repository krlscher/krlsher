import Link from "next/link";
import { Nav } from "@/components/Nav";
import { HtmlLang } from "@/components/HtmlLang";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Політика конфіденційності",
  description: "Як ми обробляємо персональні дані відвідувачів сайту.",
};

export default function PrivacyPage() {
  return (
    <>
      <HtmlLang lang="uk" />
      <Nav lang="ua" />
      <main className="section">
        <div className="container container--narrow">
          <div className="t-eyebrow">КОНФІДЕНЦІЙНІСТЬ</div>
          <hr className="eyebrow-rule" />
          <h1 className="t-h1" style={{ marginTop: "var(--space-5)" }}>
            Політика конфіденційності
          </h1>
          <div style={{ marginTop: "var(--space-7)", maxWidth: 640, color: "var(--text-muted)", fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.65 }}>
            <p>
              Сайт dr.Scherbakov збирає мінімум персональних даних, необхідних для зв&apos;язку з пацієнтом.
              Якщо ви заповнюєте форму на сторінці, ім&apos;я, телефон і повідомлення передаються лише
              лікарю — на пошту й у захищений канал Telegram. Ці дані не передаються третім сторонам,
              не використовуються для розсилки реклами і зберігаються лише до моменту відповіді
              та подальшої комунікації.
            </p>
            <p>
              Сайт використовує аналітику без cookies (Plausible) для оцінки трафіку. IP-адреси
              знеособлені, особисті профілі не створюються.
            </p>
            <p>
              Якщо ви хочете запросити видалення своїх даних, напишіть у WhatsApp або Telegram.
            </p>
          </div>
          <p style={{ marginTop: "var(--space-7)" }}>
            <Link href="/" className="btn btn--link">← На головну</Link>
          </p>
        </div>
      </main>
      <Footer lang="ua" />
    </>
  );
}
