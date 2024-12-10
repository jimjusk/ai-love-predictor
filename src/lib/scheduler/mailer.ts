import nodemailer from 'nodemailer';
import { formatBytes } from '../utils/format';

interface EmailOptions {
  to: string;
  subject: string;
  report: Blob;
  format: 'pdf' | 'csv' | 'json';
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendReportEmail(options: EmailOptions) {
  const buffer = await options.report.arrayBuffer();
  const filename = `report-${new Date().toISOString()}.${options.format}`;
  
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: options.to,
    subject: options.subject,
    html: generateEmailTemplate({
      title: options.subject,
      format: options.format,
      size: formatBytes(buffer.byteLength),
    }),
    attachments: [
      {
        filename,
        content: Buffer.from(buffer),
        contentType: getContentType(options.format),
      },
    ],
  });

  return info;
}

function getContentType(format: string): string {
  switch (format) {
    case 'pdf': return 'application/pdf';
    case 'csv': return 'text/csv';
    case 'json': return 'application/json';
    default: return 'application/octet-stream';
  }
}

function generateEmailTemplate(data: {
  title: string;
  format: string;
  size: string;
}) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">${data.title}</h2>
      <p>您好，</p>
      <p>附件是您订阅的监控报告。</p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 0;"><strong>格式：</strong>${data.format.toUpperCase()}</p>
        <p style="margin: 10px 0 0;"><strong>大小：</strong>${data.size}</p>
      </div>
      <p style="color: #666; font-size: 14px;">
        如果您有任何问题，请随时联系我们的支持团队。
      </p>
    </div>
  `;
} 