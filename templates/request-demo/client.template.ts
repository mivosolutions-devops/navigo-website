type RequestDemoClientMail = {
  firstName: string;
};

export const requestDemoClientMail = ({
  firstName
}: RequestDemoClientMail) => `<!DOCTYPE html>
<html>
<head>
    <title>NaviGO - Thank You for Your Inquiry</title>
</head>
<body style="font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto;">
        <h2 style="text-align: center;">Thank You for Your Inquiry - NaviGO</h2>
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to us. We have received your inquiry and are reviewing the details.</p>
        <p>Our team will get back to you soon.</p>
        <p>Best Regards</p>
        <i>Mivo Solutions</i>
    </div>
</body>
</html>`;
