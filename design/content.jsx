// Bilingual copy for dr.Scherbakov landing page.
// Spec § 2 — Locale: Ukrainian (UA), English (EN)

const CONTENT = {
  ua: {
    nav: {
      brandSub: "IMPLANT & AESTHETIC DENTIST",
      links: [
        { id: "approach", label: "Підхід" },
        { id: "cases", label: "Кейси" },
        { id: "process", label: "Етапи" },
        { id: "faq", label: "FAQ" },
        { id: "contact", label: "Контакти" },
      ],
      cta: "Консультація",
    },
    hero: {
      eyebrow: "ІМПЛАНТОЛОГІЯ · ОРТОПЕДІЯ",
      headline: "Стоматологія —\nце система, а не окремий зуб.",
      lead: "Я планую лікування на десять–двадцять років уперед. Через діагностику, не імпровізацію.",
      cta: "Записатись на консультацію",
      caption: "WhatsApp · Telegram · Відповідь протягом 24 год",
      footerLine: "ДНІПРО · ЗА ПОПЕРЕДНІМ ЗАПИСОМ",
    },
    approach: {
      eyebrow: "ПІДХІД",
      h2: "Лікування починається не у кріслі.\nВоно починається з діагностики.",
      mediaCaption: "CBCT · AXIAL",
      items: [
        {
          n: "01",
          title: "Діагностика",
          desc: "90% складних випадків вирішуються до першого розрізу. КТ, сканування, аналіз прикусу, фотопротокол.",
        },
        {
          n: "02",
          title: "Планування",
          desc: "Кожна позиція імплантату спочатку прораховується у програмі. Хірургія йде за планом, не навпаки.",
        },
        {
          n: "03",
          title: "Довгий горизонт",
          desc: "Рішення оцінюється не за тиждень після, а за десять років. Прогноз, ризики й альтернативи — частина первинної консультації.",
        },
      ],
    },
    stats: [
      { num: "200+", label: "Спланованих кейсів" },
      { num: "8", label: "Років у стоматології" },
      { num: "4", label: "Країни навчання" },
      { num: "24h", label: "Час відповіді" },
    ],
    cases: {
      eyebrow: "КЛІНІЧНІ КЕЙСИ",
      h2: "Обрані роботи. Зі структурою.",
      all: "Всі кейси",
      stages: ["КТ", "ПЛАН", "ОПЕР", "ФІНАЛ"],
      items: [
        {
          tag: "01 — ПОВНА РЕАБІЛІТАЦІЯ ЩЕЛЕПИ",
          title: "Нижня щелепа, дванадцять років прогресуючої атрофії кістки.",
          patient: "58 років. Чотири невдалі мостоподібні протези від попередніх лікарів. Значна атрофія в дистальних відділах.",
          decision: "All-on-6 із зигоматичною опорою зліва. Від All-on-4 відмовилися — недостатньо кістки в дистальних відділах.",
          outcome: "Тимчасова конструкція через 24 години. Постійна цирконієва — через 4 місяці. Спостереження 2 роки: атрофії кістки немає.",
          mediaCaption: "ЦИРКОНІЄВИЙ МІСТ · НИЖНЯ ЩЕЛЕПА",
        },
        {
          tag: "02 — ОДИНОЧНИЙ ІМПЛАНТ · ESTHETIC ZONE",
          title: "Імплант у фронтальній зоні після травми.",
          patient: "Жінка 34 роки. Втрата центрального різця внаслідок спортивної травми, тонкий біотип ясен.",
          decision: "Кістковий блок із ramus, імплант через чотири місяці, формування ясен індивідуальним абатментом.",
          outcome: "Цілісний контур ясен, симетричний папіл. Керамічна коронка інтегрована візуально та функціонально.",
          mediaCaption: "DIGITAL PLAN · IMPLANT IN AESTHETIC ZONE",
        },
        {
          tag: "03 — ВСЯ ПОРОЖНИНА · FULL REHABILITATION",
          title: "Повна оклюзійна реабілітація без хірургії.",
          patient: "Жінка 47 років. Стертість емалі, зниження висоти прикусу, біль у скронево-нижньощелепному суглобі.",
          decision: "Підняття висоти прикусу через тимчасову конструкцію, шість місяців адаптації, керамічні коронки на всі зуби.",
          outcome: "Симптоматика СНЩС зникла на третьому тижні. Повна керамічна реабілітація, контроль артикулятора щорічно.",
          mediaCaption: "CERAMIC SET · ARTICULATOR PHOTOGRAPH",
        },
        {
          tag: "04 — ВЕНІРИ · MINIMAL PREP",
          title: "Естетична корекція фронтальної групи.",
          patient: "Чоловік 41 рік. Скол на одному з різців, легка дисхромія, побажання — мінімальна препарація.",
          decision: "Шість тонких керамічних вінірів, цифровий mock-up на двох сесіях, узгодження з пацієнтом до препарації.",
          outcome: "Препарація в межах емалі. Кольорова інтеграція природня, без ефекту «нових зубів».",
          mediaCaption: "VENEERS — MOCK-UP STAGE",
        },
      ],
    },
    process: {
      eyebrow: "ЕТАПИ ЛІКУВАННЯ",
      h2: "Від першого повідомлення до тривалого спостереження.",
      steps: [
        { n: "01", title: "Перше звернення", desc: "WhatsApp або Telegram. Короткий опис ситуації.", time: "У той же день" },
        { n: "02", title: "Діагностика", desc: "КТ, сканування, фотопротокол, аналіз прикусу.", time: "90 хв" },
        { n: "03", title: "Презентація плану", desc: "План лікування з повним обґрунтуванням і альтернативами.", time: "3–7 днів" },
        { n: "04", title: "Підготовка", desc: "Робота з кісткою, ясною, синусом. Хірургічний шаблон.", time: "Індив." },
        { n: "05", title: "Лікування", desc: "Імплантати, протезування, налаштування прикусу.", time: "2–6 міс" },
        { n: "06", title: "Спостереження", desc: "Щорічний контроль, фотопротокол, моніторинг.", time: "Щороку" },
      ],
    },
    faq: {
      eyebrow: "ЗАПИТАННЯ",
      h2: "Що зазвичай питають перед рішенням.",
      items: [
        {
          q: "Чому на сайті немає цін?",
          a: "Ціна формується після діагностики, не до неї. Однакова процедура для двох пацієнтів може коштувати по-різному — через стан кістки, кількість етапів, складність протезування. Орієнтовний бюджет ви отримаєте на консультації, фінальний — після плану.",
        },
        {
          q: "Скільки часу займає All-on-6 від початку до кінця?",
          a: "Від першої консультації до постійної конструкції — як правило, чотири–шість місяців. Тимчасові зуби встановлюються протягом 24–72 годин після операції. Постійна цирконієва конструкція — після повного приживлення і підтвердження стабільності.",
        },
        {
          q: "Чи приймаєте пацієнтів з інших міст або з-за кордону?",
          a: "Так. Перша консультація може бути дистанційною — з аналізом наявного КТ, плануванням і узгодженням бюджету письмово. Очна частина — стискається в один-два візити.",
        },
        {
          q: "Що робити, якщо в мене вже є невдалі імплантати від іншого лікаря?",
          a: "Прийом другої думки — це окремий формат. Я не критикую попередніх лікарів і не обіцяю «переробити дешевше». Дивимось, що зроблено, що можна зберегти, що потрібно змінити, з якими ризиками й у який строк.",
        },
        {
          q: "Як ви забезпечуєте довговічність роботи?",
          a: "П'ять років на імпланти, два роки на протезні роботи — за умови дотримання гігієни та контрольних оглядів. Гарантія перевіряється кожен візит, не тільки на папері.",
        },
      ],
    },
    practical: {
      eyebrow: "КОНТАКТИ",
      h2: "Практична інформація.",
      blocks: [
        {
          label: "КОНСУЛЬТАЦІЯ",
          text: "Очно — Дніпро\nОнлайн — відеозв'язок, 30 хв\nЗа попереднім записом",
        },
        {
          label: "МОВИ",
          text: "Українська · Англійська",
        },
      ],
      contactLabel: "ПРЯМИЙ ЗВ'ЯЗОК",
      mediaCaption: "КАБІНЕТ · СВІТЛО З ВІКНА · 5:4",
    },
    cta: {
      eyebrow: "ПОЧАТИ",
      h2: "Якщо ви розглядаєте складне лікування — почніть з розмови.",
      btn: "Записатись на консультацію",
      caption: "Відповідь протягом 24 годин · WhatsApp · Telegram",
    },
    footer: {
      brand: "dr.Scherbakov",
      brandSub: "IMPLANT & AESTHETIC DENTIST",
      address: "Дніпро, Україна\nЗа попереднім записом",
      links: { title: "", items: ["Підхід", "Кейси", "Етапи", "FAQ"] },
      contact: { title: "", items: ["WhatsApp", "Telegram", "Instagram"] },
      bottomLeft: "© 2026 — Ліцензія №XXXXX",
      bottomRight: "UA · EN",
    },
  },
  en: {
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
    },
    approach: {
      eyebrow: "APPROACH",
      h2: "Treatment doesn't begin in the chair.\nIt begins with diagnostics.",
      mediaCaption: "CBCT · AXIAL",
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
      { num: "200+", label: "Cases planned" },
      { num: "8", label: "Years in dentistry" },
      { num: "4", label: "Countries trained in" },
      { num: "24h", label: "Response time" },
    ],
    cases: {
      eyebrow: "CLINICAL CASES",
      h2: "Selected work, structured.",
      all: "All cases",
      stages: ["CT", "PLAN", "OP", "FINAL"],
      items: [
        {
          tag: "01 — FULL ARCH · IMPLANT BRIDGE",
          title: "Maxillary rehabilitation on four implants.",
          patient: "Male, 58. Terminal periodontitis. Distal bone loss, mobile anteriors. Functional decline over six years.",
          decision: "Extraction of all upper teeth, four implants with immediate protocol, provisional bridge within 24 hours.",
          outcome: "Zirconia bridge at five months. Bite stable, articulation fully restored. Six-month controls scheduled.",
          mediaCaption: "ZIRCONIA BRIDGE · NEUTRAL TRAY · 2400×1800",
        },
        {
          tag: "02 — SINGLE IMPLANT · ESTHETIC ZONE",
          title: "Anterior implant after traumatic loss.",
          patient: "Female, 34. Loss of central incisor following sports trauma. Thin gingival biotype, papilla preservation critical.",
          decision: "Ramus block graft, implant placed at four months, soft-tissue shaping with custom abutment.",
          outcome: "Continuous gingival contour, symmetrical papilla. Ceramic crown integrated visually and functionally.",
          mediaCaption: "DIGITAL PLAN · IMPLANT IN AESTHETIC ZONE",
        },
        {
          tag: "03 — FULL MOUTH · NON-SURGICAL REHAB",
          title: "Full occlusal rehabilitation without surgery.",
          patient: "Female, 47. Enamel attrition, reduced vertical dimension, recurring TMJ pain on the right side.",
          decision: "Vertical dimension raised on provisionals, six-month adaptation, ceramic crowns on all teeth in two phases.",
          outcome: "TMJ symptoms resolved by week three. Full ceramic rehab, articulator review scheduled annually.",
          mediaCaption: "CERAMIC SET · ARTICULATOR PHOTOGRAPH",
        },
        {
          tag: "04 — VENEERS · MINIMAL PREP",
          title: "Aesthetic correction of the anterior segment.",
          patient: "Male, 41. Single chipped incisor, mild dyschromia, request — minimum preparation.",
          decision: "Six thin ceramic veneers, two-session digital mock-up, patient sign-off before any preparation.",
          outcome: "Preparation kept within enamel. Colour integrates naturally — no 'new teeth' effect at conversational distance.",
          mediaCaption: "VENEERS — MOCK-UP STAGE",
        },
      ],
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
      items: [
        {
          q: "Why aren't prices listed on the site?",
          a: "Pricing is set after diagnostics, not before. The same procedure for two patients can cost differently — bone condition, number of stages, prosthetic complexity. You'll get an indicative budget at consultation, the final figure after the plan.",
        },
        {
          q: "How long does All-on-6 take from start to finish?",
          a: "From first consultation to permanent prosthesis — typically four to six months. Temporary teeth are placed within 24–72 hours after surgery. Permanent zirconia construction follows full integration and confirmed stability.",
        },
        {
          q: "Do you accept patients from other cities or abroad?",
          a: "Yes. The first consultation can be remote — analysis of existing CT, planning and budget agreed in writing. The in-person phase compresses to one or two visits.",
        },
        {
          q: "What if I already have failed implants from another doctor?",
          a: "A second-opinion appointment is its own format. I don't critique previous doctors and don't promise to 'redo it cheaper'. We look at what's been done, what can be kept, what needs changing — with which risks and on what timeline.",
        },
        {
          q: "How do you ensure the work lasts?",
          a: "Five years on implants, two years on prosthetics — conditional on hygiene and scheduled follow-ups. The guarantee is verified at every visit, not only on paper.",
        },
      ],
    },
    practical: {
      eyebrow: "CONTACT",
      h2: "Practical information.",
      blocks: [
        {
          label: "CONSULTATION",
          text: "In person — Dnipro\nOnline — video call, 30 min\nBy appointment",
        },
        {
          label: "LANGUAGES",
          text: "Ukrainian · English",
        },
      ],
      contactLabel: "DIRECT CONTACT",
      mediaCaption: "STUDIO · WINDOW LIGHT · 5:4",
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
      links: { title: "", items: ["Approach", "Cases", "Process", "FAQ"] },
      contact: { title: "", items: ["WhatsApp", "Telegram", "Instagram"] },
      bottomLeft: "© 2026 — License №XXXXX",
      bottomRight: "UA · EN",
    },
  },
};

window.CONTENT = CONTENT;
