import type { CaseRecord } from "./types";

export const cases: CaseRecord[] = [
  {
    slug: "full-arch",
    order: 1,
    tag: {
      ua: "01 — ПОВНА РЕАБІЛІТАЦІЯ ЩЕЛЕПИ",
      en: "01 — FULL ARCH · IMPLANT BRIDGE",
    },
    title: {
      ua: "Нижня щелепа, дванадцять років прогресуючої атрофії кістки.",
      en: "Maxillary rehabilitation on four implants.",
    },
    patient: {
      ua: "58 років. Чотири невдалі мостоподібні протези від попередніх лікарів. Значна атрофія в дистальних відділах.",
      en: "Male, 58. Terminal periodontitis. Distal bone loss, mobile anteriors. Functional decline over six years.",
    },
    decision: {
      ua: "All-on-6 із зигоматичною опорою зліва. Від All-on-4 відмовилися — недостатньо кістки в дистальних відділах.",
      en: "Extraction of all upper teeth, four implants with immediate protocol, provisional bridge within 24 hours.",
    },
    outcome: {
      ua: "Тимчасова конструкція через 24 години. Постійна цирконієва — через 4 місяці. Спостереження 2 роки: атрофії кістки немає.",
      en: "Zirconia bridge at five months. Bite stable, articulation fully restored. Six-month controls scheduled.",
    },
    heroImage: "/images/cases/full-arch/hero.jpg",
    heroImageAlt: {
      ua: "Цирконієвий міст на нейтральному фоні",
      en: "Zirconia bridge on neutral surface",
    },
    gallery: [
      { src: "/images/cases/full-arch/01-ct.jpg", alt: { ua: "КТ — вихідний стан", en: "CT — initial state" } },
      { src: "/images/cases/full-arch/02-plan.jpg", alt: { ua: "Цифрове планування", en: "Digital plan" } },
      { src: "/images/cases/full-arch/03-surgery.jpg", alt: { ua: "Хірургічний етап", en: "Surgical stage" } },
      { src: "/images/cases/full-arch/04-final.jpg", alt: { ua: "Фінальний результат", en: "Final result" } },
    ],
  },
  {
    slug: "anterior-implant",
    order: 2,
    tag: {
      ua: "02 — ОДИНОЧНИЙ ІМПЛАНТ · ESTHETIC ZONE",
      en: "02 — SINGLE IMPLANT · ESTHETIC ZONE",
    },
    title: {
      ua: "Імплант у фронтальній зоні після травми.",
      en: "Anterior implant after traumatic loss.",
    },
    patient: {
      ua: "Жінка 34 роки. Втрата центрального різця внаслідок спортивної травми, тонкий біотип ясен.",
      en: "Female, 34. Loss of central incisor following sports trauma. Thin gingival biotype, papilla preservation critical.",
    },
    decision: {
      ua: "Кістковий блок із ramus, імплант через чотири місяці, формування ясен індивідуальним абатментом.",
      en: "Ramus block graft, implant placed at four months, soft-tissue shaping with custom abutment.",
    },
    outcome: {
      ua: "Цілісний контур ясен, симетричний папіл. Керамічна коронка інтегрована візуально та функціонально.",
      en: "Continuous gingival contour, symmetrical papilla. Ceramic crown integrated visually and functionally.",
    },
    heroImage: "/images/cases/anterior-implant/hero.jpg",
    heroImageAlt: {
      ua: "Цифровий план імпланта в естетичній зоні",
      en: "Digital plan — implant in aesthetic zone",
    },
    gallery: [
      { src: "/images/cases/anterior-implant/01-ct.jpg", alt: { ua: "КТ — оцінка кістки", en: "CT — bone assessment" } },
      { src: "/images/cases/anterior-implant/02-plan.jpg", alt: { ua: "Планування позиції", en: "Position planning" } },
      { src: "/images/cases/anterior-implant/03-surgery.jpg", alt: { ua: "Етап хірургії", en: "Surgical stage" } },
      { src: "/images/cases/anterior-implant/04-final.jpg", alt: { ua: "Керамічна коронка", en: "Ceramic crown" } },
    ],
  },
  {
    slug: "full-rehab",
    order: 3,
    tag: {
      ua: "03 — ВСЯ ПОРОЖНИНА · FULL REHABILITATION",
      en: "03 — FULL MOUTH · NON-SURGICAL REHAB",
    },
    title: {
      ua: "Повна оклюзійна реабілітація без хірургії.",
      en: "Full occlusal rehabilitation without surgery.",
    },
    patient: {
      ua: "Жінка 47 років. Стертість емалі, зниження висоти прикусу, біль у скронево-нижньощелепному суглобі.",
      en: "Female, 47. Enamel attrition, reduced vertical dimension, recurring TMJ pain on the right side.",
    },
    decision: {
      ua: "Підняття висоти прикусу через тимчасову конструкцію, шість місяців адаптації, керамічні коронки на всі зуби.",
      en: "Vertical dimension raised on provisionals, six-month adaptation, ceramic crowns on all teeth in two phases.",
    },
    outcome: {
      ua: "Симптоматика СНЩС зникла на третьому тижні. Повна керамічна реабілітація, контроль артикулятора щорічно.",
      en: "TMJ symptoms resolved by week three. Full ceramic rehab, articulator review scheduled annually.",
    },
    heroImage: "/images/cases/full-rehab/hero.jpg",
    heroImageAlt: {
      ua: "Керамічна реабілітація на артикуляторі",
      en: "Ceramic set on articulator",
    },
    gallery: [
      { src: "/images/cases/full-rehab/01-ct.jpg", alt: { ua: "Аналіз прикусу", en: "Occlusal analysis" } },
      { src: "/images/cases/full-rehab/02-plan.jpg", alt: { ua: "Цифровий план", en: "Digital plan" } },
      { src: "/images/cases/full-rehab/03-surgery.jpg", alt: { ua: "Тимчасова конструкція", en: "Provisional stage" } },
      { src: "/images/cases/full-rehab/04-final.jpg", alt: { ua: "Постійна реабілітація", en: "Final rehab" } },
    ],
  },
  {
    slug: "veneers",
    order: 4,
    tag: {
      ua: "04 — ВЕНІРИ · MINIMAL PREP",
      en: "04 — VENEERS · MINIMAL PREP",
    },
    title: {
      ua: "Естетична корекція фронтальної групи.",
      en: "Aesthetic correction of the anterior segment.",
    },
    patient: {
      ua: "Чоловік 41 рік. Скол на одному з різців, легка дисхромія, побажання — мінімальна препарація.",
      en: "Male, 41. Single chipped incisor, mild dyschromia, request — minimum preparation.",
    },
    decision: {
      ua: "Шість тонких керамічних вінірів, цифровий mock-up на двох сесіях, узгодження з пацієнтом до препарації.",
      en: "Six thin ceramic veneers, two-session digital mock-up, patient sign-off before any preparation.",
    },
    outcome: {
      ua: "Препарація в межах емалі. Кольорова інтеграція природня, без ефекту «нових зубів».",
      en: "Preparation kept within enamel. Colour integrates naturally — no 'new teeth' effect at conversational distance.",
    },
    heroImage: "/images/cases/veneers/hero.jpg",
    heroImageAlt: {
      ua: "Етап mock-up для вінірів",
      en: "Veneers — mock-up stage",
    },
    gallery: [
      { src: "/images/cases/veneers/01-ct.jpg", alt: { ua: "Початкова фотопротокол", en: "Initial photo protocol" } },
      { src: "/images/cases/veneers/02-plan.jpg", alt: { ua: "Цифровий mock-up", en: "Digital mock-up" } },
      { src: "/images/cases/veneers/03-surgery.jpg", alt: { ua: "Препарація", en: "Preparation" } },
      { src: "/images/cases/veneers/04-final.jpg", alt: { ua: "Фінальний результат", en: "Final result" } },
    ],
  },
];

export const casesBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
