import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, email, topic, message, company } = req.body || {};

  if (company) {
    // Honeypot field — bots fill it in, real visitors never see it.
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, error: "Please fill in your name, a valid email, and a message." });
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
      replyTo: email,
      subject: `New contact form submission: ${topic || "General"}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic || "Not specified"}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email", err);
    res.status(502).json({ ok: false, error: "Could not send your message right now. Please try again shortly." });
  }
}
