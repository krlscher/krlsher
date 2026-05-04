// Public messenger handles. Configurable via env vars in Netlify so the doctor
// can update them without a code change. Fallbacks keep local dev working.
//
// Phone is the WhatsApp number in international format, digits only ("+" stripped).
// Telegram and Instagram are usernames without "@".

export const CONTACT = {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "380000000000",
  telegramHandle: process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || "drscherbakov",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "drscherbakov",
} as const;

export const whatsappUrl = `https://wa.me/${CONTACT.whatsappPhone}`;
export const telegramUrl = `https://t.me/${CONTACT.telegramHandle}`;
export const instagramUrl = `https://instagram.com/${CONTACT.instagramHandle}`;
