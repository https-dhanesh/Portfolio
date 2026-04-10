"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function sendEmail(data: FormData) {
  try {
    const { firstName, lastName, email, message } = data;

    const response = await resend.emails.send({
      from: "Portfolio Contact <hello@dhanesh.in>",
      to: ["dhanesh2435@gmail.com"],
      replyTo: email,
      subject: `New Portfolio Message from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true, id: response.data?.id };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send message" };
  }
}