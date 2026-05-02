// Single source of truth for messenger handles. Update once before launch.
// Phone is the WhatsApp number in international format without "+".
// Telegram handle is the @-username (without @).

export const CONTACT = {
  whatsappPhone: "380000000000",
  telegramHandle: "drscherbakov",
  instagramHandle: "drscherbakov",
} as const;

export const whatsappUrl = `https://wa.me/${CONTACT.whatsappPhone}`;
export const telegramUrl = `https://t.me/${CONTACT.telegramHandle}`;
export const instagramUrl = `https://instagram.com/${CONTACT.instagramHandle}`;
