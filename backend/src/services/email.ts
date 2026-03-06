import nodemailer from "nodemailer";
import { env } from "../config/env";

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: false,
  auth: env.smtp.user && env.smtp.pass ? { user: env.smtp.user, pass: env.smtp.pass } : undefined
});

export async function sendBookingConfirmation(email: string, name: string) {
  if (!env.smtp.host || !env.smtp.user) return;

  await transporter.sendMail({
    from: env.smtp.from,
    to: email,
    subject: "We Lit You Consultation Request Received",
    text: `Hi ${name}, we received your wedding consultation request. Our concierge team will contact you shortly.`
  });
}
