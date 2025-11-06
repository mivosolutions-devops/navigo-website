import * as nodemailer from "nodemailer";

type AttachmentType = {
  filename: string;
  content: Buffer;
};

type MailParameters = {
  email: string;
  subject: string;
  body: string;
  attachments?: AttachmentType[];
};

export class MailService {
  async sendEmail({
    email,
    subject,
    body,
    attachments
  }: MailParameters): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const mailOptions = {
      from: {
        name: "NaviGO",
        address: process.env.SMTP_USER || ""
      },
      to: email,
      subject,
      html: body,
      attachments: attachments || []
    };

    const sendMailAsync = (options: nodemailer.SendMailOptions) =>
      new Promise<void>((resolve, reject) => {
        transporter.sendMail(
          options,
          (error: any, info: { response: string }) => {
            if (error) {
              reject(error);
            } else {
              console.log("Email sent: " + info.response);
              resolve();
            }
          }
        );
      });

    try {
      await sendMailAsync(mailOptions);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
