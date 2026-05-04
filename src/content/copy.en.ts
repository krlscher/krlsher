import type { Copy } from "./types";

export const copyEN: Copy = {
  nav: {
    brandSub: "IMPLANT & AESTHETIC DENTIST",
    links: [
      { id: "approach", label: "Approach" },
      { id: "cases", label: "Cases" },
      { id: "process", label: "Process" },
      { id: "faq", label: "FAQ" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Consultation",
  },
  hero: {
    eyebrow: "IMPLANTOLOGY · PROSTHODONTICS",
    headline: "Dentistry —\nis a system, not a single tooth.",
    lead: "I plan treatment ten to twenty years ahead. Through diagnostics, not improvisation.",
    cta: "Book consultation",
    caption: "WhatsApp · Telegram · 24h response",
    footerLine: "DNIPRO · BY APPOINTMENT",
    portraitAlt: "Portrait of dr. Scherbakov",
  },
  approach: {
    eyebrow: "APPROACH",
    h2: "Treatment doesn't begin in the chair.\nIt begins with diagnostics.",
    mediaCaption: "CBCT · AXIAL",
    mediaAlt: "CBCT scan of the jaw",
    items: [
      {
        n: "01",
        title: "Diagnostics",
        desc: "CBCT, intraoral scan, photo protocol. Before touching a tooth, we map the whole system — bone, occlusion, soft tissue, articulation.",
      },
      {
        n: "02",
        title: "Planning",
        desc: "Digital wax-up and surgical guide. Every implant, every millimetre — agreed before treatment begins, never during it.",
      },
      {
        n: "03",
        title: "Long horizon",
        desc: "A decision is judged not a week later, but ten years on. Prognosis, risk, and alternatives are part of the first consultation.",
      },
    ],
  },
  stats: [
    { num: "90+", label: "Full rehabilitations completed" },
    { num: "800+", label: "Implants placed" },
    { num: "2400+", label: "Digitally planned cases" },
    { num: "76%", label: "Patients by referral" },
  ],
  cases: {
    eyebrow: "CLINICAL CASES",
    h2: "Selected work, structured.",
    all: "More on Instagram",
    viewFull: "More on Instagram",
    disclaimer:
      "Cases are published without faces. Patients have consented to publication. Materials may be replaced on request.",
    blockLabels: {
      patient: "The patient",
      decision: "The decision",
      outcome: "Outcome",
    },
  },
  process: {
    eyebrow: "TREATMENT STAGES",
    h2: "From first message to long-term follow-up.",
    steps: [
      { n: "01", title: "First contact", desc: "WhatsApp or Telegram. A short description of the situation.", time: "Same day" },
      { n: "02", title: "Diagnostics", desc: "CT, scan, photo protocol, occlusal analysis.", time: "90 min" },
      { n: "03", title: "Plan presentation", desc: "Treatment plan with full reasoning and alternatives.", time: "3–7 days" },
      { n: "04", title: "Preparation", desc: "Bone, soft tissue, sinus work. Surgical guide.", time: "Indiv." },
      { n: "05", title: "Treatment", desc: "Implants, prosthetics, occlusion adjustment.", time: "2–6 mo" },
      { n: "06", title: "Follow-up", desc: "Annual control, photo protocol, monitoring.", time: "Yearly" },
    ],
  },
  faq: {
    eyebrow: "QUESTIONS",
    h2: "What people typically ask before deciding.",
  },
  practical: {
    eyebrow: "CONTACT",
    h2: "Practical information.",
    blocks: [
      { label: "CONSULTATION", text: "In person — Dnipro\nOnline — video call, 30 min\nBy appointment" },
      { label: "LANGUAGES", text: "Ukrainian · English" },
    ],
    contactLabel: "DIRECT CONTACT",
    formLabel: "OR WRITE",
    mediaCaption: "STUDIO · WINDOW LIGHT · 5:4",
    mediaAlt: "Studio — window light",
    form: {
      name: "Name",
      phone: "Phone",
      message: "Briefly about the situation",
      submit: "Send",
      success: "Thank you — I'll respond within 24 hours.",
      error: "Could not send. Please try again or message on WhatsApp.",
    },
  },
  cta: {
    eyebrow: "BEGIN",
    h2: "If you are considering complex treatment, start with a conversation.",
    btn: "Book consultation",
    caption: "Response within 24 hours · WhatsApp · Telegram",
  },
  footer: {
    brand: "dr.Scherbakov",
    brandSub: "IMPLANT & AESTHETIC DENTIST",
    address: "Dnipro, Ukraine\nBy appointment",
    linksLabel: "NAVIGATION",
    contactLabel: "CONTACT",
    bottomLeft: "© 2026",
    bottomRight: "UA · EN",
  },
};
