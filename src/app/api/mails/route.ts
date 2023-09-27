import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

const getTemplate = (message: string, phone: string, email: string) => {
  return `
  <p>${message ? message : "The user sending email doesn't drop a message"}</p>
  <br>
  <p>User CP :</p>
  <p>${phone} - ${email}</p>
  `;
};

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_FROM_ADDRESS,
  MAIL_FROM_NAME,
  MAIL_TO_PROD: MAIL_TO_COACHES,
  MAIL_TO_DEV,
  NODE_ENV,
} = process.env;

const isProduction = NODE_ENV === 'production';

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const verifyCaptchaResp = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${body.captchaToken}`,
      {
        method: 'POST',
      },
    );

    const verifyCaptchaData = await verifyCaptchaResp.json();

    if (!verifyCaptchaData.success || verifyCaptchaData.score < 0.6)
      return NextResponse.json(
        {message: "Sorry, Your action's detected as a bot"},
        {status: 400},
      );

    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME} " <${MAIL_FROM_ADDRESS}>`,
      to: isProduction ? MAIL_TO_COACHES : MAIL_TO_DEV,
      subject: body.subject,
      html: getTemplate(body.message, body.phone, body.email),
    });

    return NextResponse.json({body}, {status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
  }
}
