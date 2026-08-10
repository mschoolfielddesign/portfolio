const EMAIL_KEY = 17;
const ENCODED_EMAIL = [
  124, 98, 114, 121, 126, 126, 125, 119, 120, 116, 125, 117, 63, 117, 116, 98, 120, 118, 127, 81,
  118, 124, 112, 120, 125, 63, 114, 126, 124,
];
const ALLOWED_DOMAINS = ["gmail.com"] as const;

function decodeEmail(): string {
  return ENCODED_EMAIL.map((byte) => String.fromCharCode(byte ^ EMAIL_KEY)).join("");
}

function isSafeContactEmail(email: string): boolean {
  const match = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!match) return false;

  const domain = email.split("@")[1]?.toLowerCase();
  return ALLOWED_DOMAINS.includes(domain as (typeof ALLOWED_DOMAINS)[number]);
}

export function openContactEmail(subject = "Portfolio inquiry"): void {
  const email = decodeEmail();
  if (!isSafeContactEmail(email)) return;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
}
