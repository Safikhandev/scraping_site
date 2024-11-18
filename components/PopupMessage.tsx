import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

type MessageEmailProp = {
  yourName: string;
  mobileNumber: string;
  email: string;
  service: string[] | string; // Allowing service to be either a string or an array of strings
  message: string;
};

const EmailMessage = ({
  yourName,
  mobileNumber,
  email,
  service,
  message,
}: MessageEmailProp) => {
  const PreviewText = "New Service";
  const fullName = `${yourName}`;

  // Ensure service is always an array before calling .join()
  const servicesFormatted = Array.isArray(service)
    ? service.join(", ")
    : service;

  return (
    <Html>
      <Head />
      <Preview>{PreviewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-10 font-sans">
          <Container className="bg-white my-auto mx-auto p-[30px] max-w-3xl rounded-lg shadow-md">
            <Heading className="text-white bg-blue-600 text-[24px] font-bold p-4 rounded-t-lg text-center">
              New Contact Form Submission
            </Heading>
            <Hr className="my-[16px] mx-0 w-full" />
            <Text className="text-gray-700 text-[16px] leading-[28px]">
              <b>Full Name:</b> {fullName}
            </Text>

            <Text className="text-gray-700 text-[16px] leading-[28px] mt-2">
              <b>Services:</b> {servicesFormatted}
            </Text>
            <Text className="text-gray-700 text-[16px] leading-[28px] mt-2">
              <b>Mobile Number:</b> {mobileNumber}
            </Text>
            <Text className="text-gray-700 text-[16px] leading-[28px] mt-2">
              <b>Email:</b> {email}
            </Text>
            <Text className="text-gray-700 text-[16px] leading-[28px] mt-2">
              <b>Message:</b> {message}
            </Text>
            <Hr className="my-[24px] mx-0 w-full border-gray-300" />
            <Text className="text-gray-600 text-center text-[12px]">
              Thank you for choosing our services. We will get back to you
              shortly.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailMessage;
