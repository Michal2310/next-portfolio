import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const mailData = {
      from: data.email,
      to: process.env.MAIL_TO,
      subject: `Contact Form | Message From ${data.email}`,
      text: data.message + " | Sent from: " + data.email,
      html: `<div>${data.message}</div>`,
    };
    await transporter.sendMail(mailData);
    return new Response("success");
  } catch (error) {
    console.log(error);
  }
}
