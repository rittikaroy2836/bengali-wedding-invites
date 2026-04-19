import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_EMAIL = "rittikaroy2836@gmail.com"; // 👈 your email

serve(async (req) => {
  const { name, email, phone, guests, attending, message } = await req.json();

  const attendingText = attending === "yes" ? "✅ YES — will attend" : "❌ NO — cannot attend";

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: auto; padding: 32px; background: #fdf6ee; border: 1px solid #c9a96e; border-radius: 12px;">
      <h1 style="color: #7b1f3a; font-size: 28px; text-align: center;">🌺 New RSVP Received</h1>
      <h2 style="color: #7b1f3a; text-align: center; font-style: italic;">Ria & Subhojit's Wedding</h2>
      <hr style="border-color: #c9a96e; margin: 20px 0;" />
      <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #3b1f0f;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Name</td><td>${name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td>${email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td>${phone || "—"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Guests</td><td>${guests}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Attending</td><td>${attendingText}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Message</td><td>${message || "—"}</td></tr>
      </table>
      <hr style="border-color: #c9a96e; margin: 20px 0;" />
      <p style="text-align: center; color: #7b1f3a;">🐚 শুভমস্তু 🐚</p>
      <p style="text-align: center; color: #999; font-size: 12px;">December 5, 2026 • Janakalyan Club, Baguiati, Kolkata</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Wedding RSVP <onboarding@resend.dev>",
      to: [NOTIFY_EMAIL],
      subject: `💌 RSVP from ${name} — Ria & Subhojit's Wedding`,
      html,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
