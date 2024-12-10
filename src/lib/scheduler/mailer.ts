export interface EmailOptions {
  recipients: string[];
  subject: string;
  body: string;
}

// 简单的模拟邮件发送功能
export async function sendReportEmail(options: EmailOptions): Promise<void> {
  console.log('Email would be sent:', {
    to: options.recipients,
    subject: options.subject,
    body: options.body
  });
} 