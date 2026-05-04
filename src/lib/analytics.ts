type Fbq = (event: "track", name: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function trackLead(params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", params);
}
