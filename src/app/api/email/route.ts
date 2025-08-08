import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/send-email";
import { createContactEmailTemplate } from "@/utils/email-template";

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message } = await request.json();
    if (!name || !email || !company || !phone || !message) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // Create email template
    const emailTemplate = createContactEmailTemplate({
      name,
      email,
      company,
      phone,
      message,
    });

    // Send email
    await sendEmail({
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    console.log("Contact form submitted successfully:", { name, email, company, phone });

    return NextResponse.json({ 
      message: "تم إرسال الرسالة بنجاح" 
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء إرسال الرسالة" },
      { status: 500 }
    );
  }
}