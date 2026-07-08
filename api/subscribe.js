import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { email, company } = req.body || {};

  if (company) {
    // Honeypot field — bots fill it in, real visitors never see it.
    res.status(200).json({ ok: true });
    return;
  }

  if (!email || !EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "Please enter a valid email address." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    res.status(500).json({ ok: false, error: "Email is not configured yet." });
    return;
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "change_maven@outlook.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Change Maven Website <${fromEmail}>`,
      to: toEmail,
      subject: "New newsletter signup",
      text: `New newsletter signup: ${email}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send subscribe notification", err);
    res.status(502).json({ ok: false, error: "Could not subscribe right now. Please try again shortly." });
  }
}
