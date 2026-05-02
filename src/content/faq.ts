import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
  {
    id: "pricing",
    question: {
      ua: "Чому на сайті немає цін?",
      en: "Why aren't prices listed on the site?",
    },
    answer: {
      ua: "Ціна формується після діагностики, не до неї. Однакова процедура для двох пацієнтів може коштувати по-різному — через стан кістки, кількість етапів, складність протезування. Орієнтовний бюджет ви отримаєте на консультації, фінальний — після плану.",
      en: "Pricing is set after diagnostics, not before. The same procedure for two patients can cost differently — bone condition, number of stages, prosthetic complexity. You'll get an indicative budget at consultation, the final figure after the plan.",
    },
  },
  {
    id: "all-on-6-timeline",
    question: {
      ua: "Скільки часу займає All-on-6 від початку до кінця?",
      en: "How long does All-on-6 take from start to finish?",
    },
    answer: {
      ua: "Від першої консультації до постійної конструкції — як правило, чотири–шість місяців. Тимчасові зуби встановлюються протягом 24–72 годин після операції. Постійна цирконієва конструкція — після повного приживлення і підтвердження стабільності.",
      en: "From first consultation to permanent prosthesis — typically four to six months. Temporary teeth are placed within 24–72 hours after surgery. Permanent zirconia construction follows full integration and confirmed stability.",
    },
  },
  {
    id: "remote-patients",
    question: {
      ua: "Чи приймаєте пацієнтів з інших міст або з-за кордону?",
      en: "Do you accept patients from other cities or abroad?",
    },
    answer: {
      ua: "Так. Перша консультація може бути дистанційною — з аналізом наявного КТ, плануванням і узгодженням бюджету письмово. Очна частина — стискається в один-два візити.",
      en: "Yes. The first consultation can be remote — analysis of existing CT, planning and budget agreed in writing. The in-person phase compresses to one or two visits.",
    },
  },
  {
    id: "second-opinion",
    question: {
      ua: "Що робити, якщо в мене вже є невдалі імплантати від іншого лікаря?",
      en: "What if I already have failed implants from another doctor?",
    },
    answer: {
      ua: "Прийом другої думки — це окремий формат. Я не критикую попередніх лікарів і не обіцяю «переробити дешевше». Дивимось, що зроблено, що можна зберегти, що потрібно змінити, з якими ризиками й у який строк.",
      en: "A second-opinion appointment is its own format. I don't critique previous doctors and don't promise to 'redo it cheaper'. We look at what's been done, what can be kept, what needs changing — with which risks and on what timeline.",
    },
  },
  {
    id: "longevity",
    question: {
      ua: "Як ви забезпечуєте довговічність роботи?",
      en: "How do you ensure the work lasts?",
    },
    answer: {
      ua: "П'ять років на імпланти, два роки на протезні роботи — за умови дотримання гігієни та контрольних оглядів. Гарантія перевіряється кожен візит, не тільки на папері.",
      en: "Five years on implants, two years on prosthetics — conditional on hygiene and scheduled follow-ups. The guarantee is verified at every visit, not only on paper.",
    },
  },
];
