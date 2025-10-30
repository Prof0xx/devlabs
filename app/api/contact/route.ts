import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json();

    if (!name || !contact || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?[0-9]{7,15}|\(\d{3}\)\s?\d{3}-?\d{4}|\d{3}-?\d{3}-?\d{4})$/;
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      return new Response(JSON.stringify({ error: "Invalid contact" }), {
        status: 400,
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("[contact] Email not configured. Logging message instead.");
      console.log({ name, contact, message });
      return new Response(JSON.stringify({ ok: true, mocked: true }));
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const toRecipient = "gemzfarnsworth@gmail.com"; // kept server-side only

    await transporter.sendMail({
      from: process.env.MAIL_FROM || "no-reply@devlabs.local",
      to: toRecipient,
      subject: `New inquiry from ${name}`,
      text: `Contact: ${contact}\n\nMessage:\n${message}`,
      html: `<p><strong>Contact:</strong> ${contact}</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}


