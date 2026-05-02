import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <div className="t-eyebrow">404</div>
        <hr className="eyebrow-rule" style={{ marginLeft: "auto", marginRight: "auto" }} />
        <h1 className="t-h1" style={{ marginTop: "var(--space-5)" }}>
          Сторінку не знайдено / Page not found
        </h1>
        <p className="t-lead" style={{ color: "var(--text-muted)", marginTop: "var(--space-4)" }}>
          <Link href="/" className="btn btn--link">Повернутись на головну</Link>
          {" · "}
          <Link href="/en" className="btn btn--link">Back to home</Link>
        </p>
      </div>
    </main>
  );
}
