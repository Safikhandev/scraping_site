// "use server";

// import { Resend } from "resend";

// // Initialize Resend with your API key
// const resend = new Resend("re_JdDcMY7m_94xakqbjZ9TRjc2tQMBwUmmN");

// export const sendEmailHandler = async (formData: { email: string }) => {
//   const { email } = formData;
//   debugger;
//   console.log(`formData ${formData}`);
//   // Validate required fields
//   if (!email) {
//     throw new Error("Required fields are missing");
//   }

//   const emailContent = `
//     <div>

//       <p><strong>Email:</strong> ${email}</p>

//     </div>
//   `;

//   let data;
//   try {
//     data = await resend.emails.send({
//       from: "Contact form <onboarding@resend.dev>", // Update with your name and email
//       to: ["sheikhzain260@gmail.com"], // Update with your recipient email
//       subject: `New Quotation Request from`,
//       html: emailContent,
//     });

//     if (!data) {
//       throw new Error("Failed to send email");
//     }
//     console.log(data);
//     return { message: "Email sent successfully", data };
//   } catch (error: unknown) {
//     console.error("Error in sending email:", error);
//   }
//   console.log(data);
// };
