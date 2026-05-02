"use client";

import { useState } from "react";
import { Arrow } from "./Arrow";
import type { Lang } from "@/content/types";
import { getCopy } from "@/lib/i18n";

type Props = { lang: Lang };

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ lang }: Props) {
  const f = getCopy(lang).practical.form;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          message: String(fd.get("message") ?? ""),
          lang,
        }),
      });
      if (!res.ok) throw new Error("Bad response");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="contact-form__notice">{f.success}</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label className="contact-form__field">
        <span className="contact-form__label">{f.name}</span>
        <input name="name" type="text" required minLength={2} maxLength={120} autoComplete="name" />
      </label>
      <label className="contact-form__field">
        <span className="contact-form__label">{f.phone}</span>
        <input name="phone" type="tel" required minLength={5} maxLength={40} autoComplete="tel" inputMode="tel" />
      </label>
      <label className="contact-form__field">
        <span className="contact-form__label">{f.message}</span>
        <textarea name="message" required minLength={5} maxLength={2000} rows={3} />
      </label>
      <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
        {f.submit}
        <Arrow />
      </button>
      {status === "error" && <p className="contact-form__notice contact-form__notice--error">{f.error}</p>}
    </form>
  );
}
