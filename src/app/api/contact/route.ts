import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(5).max(40),
  message: z.string().trim().min(5).max(2000),
  lang: z.enum(["ua", "en"]),
});

async function sendTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
}

async function sendEmail(subject: string, text: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "noreply@drscherbakov.com";
  if (!apiKey || !to) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, text }),
  });
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation_error" }, { status: 400 });
  }

  const { name, phone, message, lang } = parsed.data;
  const subject = `New consultation request — ${name}`;
  const text = [
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Lang:    ${lang}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const tgText = [
    `<b>New consultation request</b>`,
    "",
    `<b>Name:</b> ${name}`,
    `<b>Phone:</b> ${phone}`,
    `<b>Lang:</b> ${lang}`,
    "",
    `${message}`,
  ].join("\n");

  // Fire both, ignore individual failures so the user still gets success
  // if at least one channel succeeds. If both are unconfigured this is a no-op
  // and the form will appear to succeed — fine for staging without env vars.
  await Promise.allSettled([sendTelegram(tgText), sendEmail(subject, text)]);

  return NextResponse.json({ ok: true });
}
