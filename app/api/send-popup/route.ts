import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import PopupMessage from "@/components/PopupMessage";

const resend = new Resend("re_JdDcMY7m_94xakqbjZ9TRjc2tQMBwUmmN");

export async function POST(req: NextRequest) {
  const { yourName, mobileNumber, email, service, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", //your verified domain
      to: "sheikhzain260@gmail.com", //the email address you want to send a message
      subject: "New Contact Form Submission | Contact | LetsFixx", //email subject
      react: PopupMessage({
        yourName,
        mobileNumber,
        email,
        service,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
