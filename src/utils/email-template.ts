


interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export const createContactEmailTemplate = (data: ContactFormData) => {
  const { name, email, company, phone, message } = data;

  const html = `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>رسالة جديدة من نموذج التواصل - FlowX</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          direction: rtl;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #138870, #0f6b56);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        .header p {
          margin: 10px 0 0 0;
          opacity: 0.9;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #138870;
        }
        .field-label {
          font-weight: bold;
          color: #138870;
          margin-bottom: 5px;
          font-size: 14px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-field {
          background: #f0f9f7;
          border-left-color: #138870;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          color: #666;
          font-size: 14px;
          border-top: 1px solid #eee;
        }
        .timestamp {
          color: #999;
          font-size: 12px;
          margin-top: 10px;
        }
        .logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 10px auto;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #138870;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">FX</div>
          <h1>رسالة جديدة من نموذج التواصل</h1>
          <p>تم استلام رسالة جديدة من موقع FlowX</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">الاسم:</div>
            <div class="field-value">${name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">البريد الإلكتروني:</div>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <div class="field-label">اسم المؤسسة:</div>
            <div class="field-value">${company}</div>
          </div>
          
          <div class="field">
            <div class="field-label">رقم الهاتف:</div>
            <div class="field-value">${phone}</div>
          </div>
          
          <div class="field message-field">
            <div class="field-label">الرسالة:</div>
            <div class="field-value">${message}</div>
          </div>
          
          <div class="timestamp">
            تاريخ الاستلام: ${new Date().toLocaleString('ar-SA', {
    timeZone: 'Asia/Riyadh',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}
          </div>
        </div>
        
        <div class="footer">
          <p>هذه رسالة تلقائية من نظام FlowX</p>
          <p>يرجى الرد على العميل في أقرب وقت ممكن</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
رسالة جديدة من نموذج التواصل - FlowX

الاسم: ${name}
البريد الإلكتروني: ${email}
اسم المؤسسة: ${company}
رقم الهاتف: ${phone}

الرسالة:
${message}

تاريخ الاستلام: ${new Date().toLocaleString('ar-SA', {
    timeZone: 'Asia/Riyadh'
  })}

---
هذه رسالة تلقائية من نظام FlowX
يرجى الرد على العميل في أقرب وقت ممكن
  `;

  return {
    html,
    text,
    subject: `رسالة جديدة من ${name} - ${company}`
  };
};