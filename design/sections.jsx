// dr.Scherbakov — section components
// All sections are split into small components rendered by App.

const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ----------------------------------------------------------------------------
   Small primitives
---------------------------------------------------------------------------- */

const Arrow = ({ size = 16 }) => (
  <svg className="btn__arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
  </svg>
);

const EyebrowRule = ({ children, centered }) => (
  <>
    <div className="t-eyebrow" style={centered ? { textAlign: "center" } : null}>{children}</div>
    <hr className="eyebrow-rule" style={centered ? { marginLeft: "auto", marginRight: "auto" } : null} />
  </>
);

const MediaPlaceholder = ({ caption, dark, mono, children, corners }) => (
  <div className={"media-placeholder" + (dark ? " media-placeholder--dark" : "")}>
    {mono && <div className="media-placeholder__mono"></div>}
    {children}
    {corners && (
      <>
        <div className="media-placeholder__corner media-placeholder__corner--tl">{corners.tl}</div>
        <div className="media-placeholder__corner media-placeholder__corner--bl">{corners.bl}</div>
        <div className="media-placeholder__corner media-placeholder__corner--br">{corners.br}</div>
      </>
    )}
    {caption && <div className="media-placeholder__caption">{caption}</div>}
  </div>
);

/* CBCT-style abstract render — concentric ovals on near-black, monospace labels */
const CBCTRender = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
    <ellipse cx="200" cy="250" rx="160" ry="200" fill="none" stroke="rgba(220,220,200,0.18)" strokeWidth="0.8"/>
    <ellipse cx="200" cy="250" rx="120" ry="155" fill="none" stroke="rgba(220,220,200,0.22)" strokeWidth="0.8"/>
    <ellipse cx="200" cy="250" rx="78" ry="100" fill="none" stroke="rgba(220,220,200,0.28)" strokeWidth="0.8"/>
    {/* tooth/implant pillars row */}
    {[0,1,2,3,4,5,6,7].map(i => {
      const x = 168 + i * 8.5;
      const y = 240;
      return <rect key={i} x={x} y={y} width="5.2" height={i % 2 === 0 ? 24 : 20} fill="rgba(200,200,180,0.55)"/>;
    })}
  </svg>
);

/* Hero portrait abstraction — arch + face glyph + dark/navy color blocking like mockup */
const HeroAbstract = () => (
  <svg viewBox="0 0 600 750" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
    <rect width="600" height="750" fill="#2a2a26"/>
    {/* navy band lower portion */}
    <rect x="0" y="560" width="600" height="190" fill="#1F2A3D"/>
    {/* arch / head silhouette */}
    <path d="M 220 750 L 220 460 Q 220 320 300 320 Q 380 320 380 460 L 380 750 Z" fill="#a8a89a" opacity="0.85"/>
    {/* simple face glyph */}
    <circle cx="285" cy="430" r="3" fill="#2a2a26"/>
    <circle cx="315" cy="430" r="3" fill="#2a2a26"/>
    <line x1="300" y1="455" x2="300" y2="478" stroke="#2a2a26" strokeWidth="1.6" strokeLinecap="round"/>
    {/* navy block crossing arch lower */}
    <rect x="220" y="610" width="160" height="140" fill="#1F2A3D"/>
  </svg>
);

/* Cases image — dark with stylized prosthetic strip render */
const CaseRender = ({ variant = 0 }) => (
  <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
    <rect width="800" height="600" fill="#1d1d1a"/>
    <rect x="240" y="240" width="320" height="160" fill="#a09a8a" opacity="0.92"/>
    {/* tooth columns */}
    {Array.from({ length: 10 }).map((_, i) => {
      const x = 260 + i * 30;
      const h = 110 + ((i + variant) % 3) * 12;
      return <rect key={i} x={x} y={400 - h} width="18" height={h} fill="#f1ece0" rx="2"/>;
    })}
  </svg>
);

/* Practical / studio image — soft warm bands evocative of window light */
const StudioRender = () => (
  <svg viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
    <defs>
      <linearGradient id="studio-g" x1="0" y1="0" x2="1" y2="0.4">
        <stop offset="0%" stopColor="#3a352b"/>
        <stop offset="35%" stopColor="#7e7460"/>
        <stop offset="55%" stopColor="#c8bfa6"/>
        <stop offset="80%" stopColor="#857a64"/>
        <stop offset="100%" stopColor="#4a4438"/>
      </linearGradient>
    </defs>
    <rect width="800" height="640" fill="url(#studio-g)"/>
    {/* horizontal rules — picture rail / shelf */}
    <line x1="380" y1="380" x2="640" y2="380" stroke="rgba(255,255,250,0.25)" strokeWidth="1"/>
    <line x1="360" y1="420" x2="610" y2="420" stroke="rgba(0,0,0,0.18)" strokeWidth="1"/>
  </svg>
);

/* Reveal-on-scroll wrapper */
const Reveal = ({ children, as: Tag = "div", className = "", style, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { rootMargin: "-10% 0px -5% 0px", threshold: 0.05 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
};

/* ----------------------------------------------------------------------------
   Nav
---------------------------------------------------------------------------- */

function Nav({ content, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("is-menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <>
      <nav className={"nav" + (scrolled ? " is-scrolled" : "")}>
        <div className="container container--wide nav__inner">
          <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
            <span className="nav__brand-name">dr.Scherbakov</span>
            <span className="nav__brand-sub">{content.nav.brandSub}</span>
          </a>
          <ul className="nav__links">
            {content.nav.links.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
          <div className="nav__right">
            <div className="nav__lang" aria-label="Language">
              <button className={lang === "ua" ? "is-active" : ""} onClick={() => setLang("ua")}>UA</button>
              <span>·</span>
              <button className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
            <button className="nav__hamburger" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
              <span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-drawer">
        {content.nav.links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}

/* ----------------------------------------------------------------------------
   Hero
---------------------------------------------------------------------------- */

function Hero({ content }) {
  const h = content.hero;
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__text">
          <div className="hero__text-inner">
            <div className="hero-stagger s1"><div className="t-eyebrow hero__eyebrow">{h.eyebrow}</div></div>
            <div className="hero-stagger s1"><hr className="eyebrow-rule"/></div>
            <h1 className="t-h1 hero__headline hero-stagger s2" style={{ whiteSpace: "pre-line" }}>{h.headline}</h1>
            <p className="t-lead hero__lead hero-stagger s3">{h.lead}</p>
            <div className="hero__cta hero-stagger s4">
              <a href="#contact" className="btn btn--primary">
                {h.cta}<Arrow/>
              </a>
              <div className="t-caption hero__cta-caption">{h.caption}</div>
            </div>
            <div className="t-eyebrow hero__footer-line hero-stagger s5" style={{ color: "var(--text-soft)" }}>
              {h.footerLine}
            </div>
          </div>
        </div>
        <div className="hero__media hero-image-fade">
          <div className="media-placeholder media-placeholder--dark hero__portrait">
            <HeroAbstract/>
            <div className="media-placeholder__corner media-placeholder__corner--tr">ПОРТРЕТ · 4:5 · ДЕСАТУРАЦІЯ</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Approach
---------------------------------------------------------------------------- */

function Approach({ content }) {
  const a = content.approach;
  return (
    <section className="section section--alt section--approach" id="approach">
      <div className="container">
        <div className="approach__grid">
          <Reveal className="approach__media">
            <div className="media-placeholder media-placeholder--dark approach__cbct">
              <CBCTRender/>
              <div className="media-placeholder__corner media-placeholder__corner--tl">{a.mediaCaption}</div>
              <div className="media-placeholder__corner media-placeholder__corner--bl">2.0mm · L1</div>
              <div className="media-placeholder__corner media-placeholder__corner--br">0.4mGy</div>
            </div>
          </Reveal>
          <div>
            <Reveal><EyebrowRule>{a.eyebrow}</EyebrowRule></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: "var(--space-5)", maxWidth: 520, whiteSpace: "pre-line" }}>{a.h2}</h2></Reveal>
            <div className="approach__items">
              {a.items.map((it, i) => (
                <Reveal key={it.n} className="approach__item" delay={120 + i * 80}>
                  <div className="approach__num">{it.n}</div>
                  <div>
                    <h3 className="approach__item-title">{it.title}</h3>
                    <p className="approach__item-desc">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Stats
---------------------------------------------------------------------------- */

function Stats({ content }) {
  return (
    <section className="section section--bordered section--stats" style={{ paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)" }}>
      <div className="container">
        <div className="section__inner">
          <div className="stats__grid">
            {content.stats.map((s, i) => (
              <Reveal key={i} className="stat" delay={i * 80}>
                <span className="t-stat-num stat__num">{s.num}</span>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Cases
---------------------------------------------------------------------------- */

function CaseCard({ item, reversed, index, stages }) {
  return (
    <Reveal className={"case-card" + (reversed ? " case-card--reversed" : "")}>
      <div className="case-card__media-col">
        <div className="case-card__media">
          <div className="case-card__media-inner">
            <div className="media-placeholder media-placeholder--dark" style={{ position: "relative" }}>
              <CaseRender variant={index}/>
              <div className="media-placeholder__corner media-placeholder__corner--bl">{item.mediaCaption}</div>
            </div>
          </div>
        </div>
        <div className="case-card__stages">
          {stages.map((s, i) => (
            <div key={i} className={"case-card__stage case-card__stage--" + i}>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="case-card__body">
        <div className="t-eyebrow case-card__tag">{item.tag}</div>
        <h3 className="t-h3 case-card__title">{item.title}</h3>
        <div className="case-card__blocks">
          <div>
            <div className="case-card__block-label">Пацієнт</div>
            <p className="case-card__block-text">{item.patient}</p>
          </div>
          <div>
            <div className="case-card__block-label">Рішення</div>
            <p className="case-card__block-text">{item.decision}</p>
          </div>
          <div>
            <div className="case-card__block-label">Результат</div>
            <p className="case-card__block-text">{item.outcome}</p>
          </div>
        </div>
        <a href="#" className="btn btn--link">Дивитись повний кейс <Arrow/></a>
      </div>
    </Reveal>
  );
}

function Cases({ content }) {
  const c = content.cases;
  return (
    <section className="section section--cases" id="cases">
      <div className="container">
        <Reveal className="section__header">
          <EyebrowRule>{c.eyebrow}</EyebrowRule>
          <h2 className="t-h2">{c.h2}</h2>
        </Reveal>
        {c.items.map((item, i) => (
          <CaseCard key={i} item={item} reversed={i % 2 === 1} index={i} stages={c.stages} />
        ))}
        <div className="cases__all-link">
          <a href="#" className="btn btn--link">{c.all} <Arrow/></a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Process Timeline
---------------------------------------------------------------------------- */

function Process({ content }) {
  const p = content.process;
  return (
    <section className="section section--process" id="process">
      <div className="container">
        <Reveal className="section__header">
          <EyebrowRule>{p.eyebrow}</EyebrowRule>
          <h2 className="t-h2">{p.h2}</h2>
        </Reveal>
        <div className="timeline">
          <div className="timeline__line" aria-hidden="true"></div>
          <div className="timeline__steps">
            {p.steps.map((s, i) => (
              <Reveal key={s.n} className="timeline-step" delay={i * 60}>
                <span className="timeline-step__dot"></span>
                <div className="timeline-step__num">{s.n}</div>
                <h4 className="timeline-step__title">{s.title}</h4>
                <p className="timeline-step__desc">{s.desc}</p>
                <div className="timeline-step__time">{s.time}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   FAQ
---------------------------------------------------------------------------- */

function AccordionItem({ q, a, isOpen, onToggle }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.scrollHeight);
  }, [a]);
  return (
    <div className={"accordion__item" + (isOpen ? " is-open" : "")}>
      <button className="accordion__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className="accordion__icon" aria-hidden="true"></span>
      </button>
      <div className="accordion__content" style={{ height: isOpen ? height : 0 }}>
        <div ref={ref}>
          <p className="accordion__answer">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ({ content }) {
  const f = content.faq;
  const [open, setOpen] = useState(0);
  return (
    <section className="section section--faq" id="faq">
      <div className="container container--narrow">
        <Reveal className="section__header">
          <EyebrowRule>{f.eyebrow}</EyebrowRule>
          <h2 className="t-h2" style={{ maxWidth: 600 }}>{f.h2}</h2>
        </Reveal>
        <div className="accordion">
          {f.items.map((it, i) => (
            <AccordionItem key={i} q={it.q} a={it.a} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Practical
---------------------------------------------------------------------------- */

function Practical({ content }) {
  const p = content.practical;
  return (
    <section className="section section--practical" id="contact">
      <div className="container">
        <div className="practical__grid">
          <div>
            <Reveal><EyebrowRule>{p.eyebrow}</EyebrowRule></Reveal>
            <Reveal delay={60}><h2 className="t-h2" style={{ marginTop: "var(--space-5)" }}>{p.h2}</h2></Reveal>
            <div className="practical__items">
              {p.blocks.map((b, i) => (
                <Reveal key={i} className="practical__item" delay={120 + i * 60}>
                  <div className="practical__item-label">{b.label}</div>
                  <p style={{ whiteSpace: "pre-line" }}>{b.text}</p>
                </Reveal>
              ))}
              <Reveal className="practical__item" delay={300}>
                <div className="practical__item-label">{p.contactLabel}</div>
                <div className="practical__links">
                  <a href="https://wa.me/" className="btn btn--link">WhatsApp <Arrow/></a>
                  <a href="https://t.me/" className="btn btn--link">Telegram <Arrow/></a>
                  <a href="#" className="btn btn--link">Instagram <Arrow/></a>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal className="practical__media">
            <div className="media-placeholder" style={{ position: "relative", border: 0 }}>
              <StudioRender/>
              <div className="media-placeholder__corner media-placeholder__corner--bl" style={{ color: "rgba(255,255,250,0.6)" }}>{p.mediaCaption}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Final CTA
---------------------------------------------------------------------------- */

function FinalCTA({ content }) {
  const c = content.cta;
  return (
    <section className="section section--cta section--alt">
      <div className="container container--wide">
        <div className="section__inner">
          <Reveal className="cta-stack">
            <div className="t-eyebrow">{c.eyebrow}</div>
            <hr className="eyebrow-rule" style={{ margin: 0 }}/>
            <h2 className="t-h2">{c.h2}</h2>
            <a href="#" className="btn btn--primary btn--lg">{c.btn}<Arrow/></a>
            <div className="t-caption">{c.caption}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Footer
---------------------------------------------------------------------------- */

function Footer({ content }) {
  const f = content.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">{f.brand}</div>
            <div className="footer__brand-sub">{f.brandSub}</div>
            <div className="footer__address" style={{ whiteSpace: "pre-line" }}>{f.address}</div>
          </div>
          <div className="footer__col footer__col--center">
            <ul>
              {f.links.items.map(it => <li key={it}><a href="#">{it}</a></li>)}
            </ul>
          </div>
          <div className="footer__col footer__col--right">
            <ul>
              {f.contact.items.map(it => <li key={it}><a href="#">{it}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{f.bottomLeft}</span>
          <span>{f.bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Approach, Stats, Cases, Process, FAQ, Practical, FinalCTA, Footer });
