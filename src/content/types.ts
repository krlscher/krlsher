export type Lang = "ua" | "en";

export type NavLink = { id: string; label: string };

export type ApproachItem = { n: string; title: string; desc: string };

export type Stat = { num: string; label: string };

export type ProcessStep = { n: string; title: string; desc: string; time: string };

export type PracticalBlock = { label: string; text: string };

export type Copy = {
  nav: { brandSub: string; links: NavLink[]; cta: string };
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    cta: string;
    caption: string;
    footerLine: string;
    portraitAlt: string;
  };
  approach: {
    eyebrow: string;
    h2: string;
    mediaCaption: string;
    mediaAlt: string;
    items: ApproachItem[];
  };
  stats: Stat[];
  cases: {
    eyebrow: string;
    h2: string;
    all: string;
    viewFull: string;
    blockLabels: { patient: string; decision: string; outcome: string };
  };
  process: { eyebrow: string; h2: string; steps: ProcessStep[] };
  faq: { eyebrow: string; h2: string };
  practical: {
    eyebrow: string;
    h2: string;
    blocks: PracticalBlock[];
    contactLabel: string;
    formLabel: string;
    mediaCaption: string;
    mediaAlt: string;
    form: {
      name: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  cta: { eyebrow: string; h2: string; btn: string; caption: string };
  footer: {
    brand: string;
    brandSub: string;
    address: string;
    linksLabel: string;
    contactLabel: string;
    bottomLeft: string;
    bottomRight: string;
  };
};

export type LocalizedString = { ua: string; en: string };

export type FaqItem = {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
};

export type CaseRecord = {
  slug: string;
  order: number;
  tag: LocalizedString;
  title: LocalizedString;
  patient: LocalizedString;
  decision: LocalizedString;
  outcome: LocalizedString;
  heroImage: string;
  heroImageAlt: LocalizedString;
};
