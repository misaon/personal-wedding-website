import * as nodemailer from "nodemailer";

const appSender = "kadlecovi2024@gmail.com";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: appSender,
      pass: process.env.GMAIL_PASS,
    },
  });

  const emailHtmlBody = `
<div>
    <h1>Svatební dotazník od ${body.fullName}</h1>

    <ul>
        <li><b>Jméno:</b> ${body.fullName}</li>
        <li><b>E-mail:</b> ${body.email}</li>
        <li><b>Přijdete na naší svatbu:</b> ${body.attend === "yes" ? "ano" : "ne"}</li>
        <li><b>Zůstanete přes noc:</b> ${body.sleep === "yes" ? "ano" : "ne"}</li>
        <li><b>Kolik Vás bude:</b> ${body.howMuchWillCome}</li>
        <li><b>Kolik z toho dětí:</b> ${body.howMuchChildCome || "-"}</li>
        <li><b>Věk dětí:</b> ${body.childAge?.join(", ") || "-"}</li>
        <li><b>Potravinové omezení:</b> ${body.foodRestrictions || "-"}</li>
    </li>
</div>`;

  console.log(body);

  try {
    await transporter.sendMail({
      from: appSender,
      to: "jury.jk@gmail.com",
      subject: "Svatební dotazník",
      html: emailHtmlBody,
    });

    return { isOk: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { isOk: false };
  }
});
