import { getCopy, langPath } from "@/lib/i18n";
import { whatsappUrl, telegramUrl, instagramUrl } from "@/lib/contact";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { MessengerIcon } from "./MessengerIcon";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const copy = getCopy(lang);
  const home = langPath(lang);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">{copy.footer.brand}</div>
            <div className="footer__brand-sub">{copy.footer.brandSub}</div>
            <div className="footer__address" style={{ whiteSpace: "pre-line" }}>
              {copy.footer.address}
            </div>
          </div>
          <div className="footer__col footer__col--center">
            <h4>{copy.footer.linksLabel}</h4>
            <ul>
              {copy.nav.links.map((l) => (
                <li key={l.id}>
                  <a href={`${home}#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__col footer__col--right">
            <h4>{copy.footer.contactLabel}</h4>
            <ul>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  <MessengerIcon name="whatsapp" size={16} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  <MessengerIcon name="telegram" size={16} />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-link"
                >
                  <MessengerIcon name="instagram" size={16} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{copy.footer.bottomLeft}</span>
          <div className="footer__bottom-controls">
            <ThemeToggle lang={lang} />
            <LangSwitch lang={lang} className="footer__lang" />
          </div>
        </div>
      </div>
    </footer>
  );
}
