"use client";

// components/Faq.js
import { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is the purpose of this application?",
      answer:
        "This application provides users with answers to commonly asked questions regarding our services and features.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We prioritize data security by implementing best practices and encryption protocols to protect user information.",
    },
    // Add more FAQs here as needed
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-lightgrey rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.question}`}
    >
      <div className="flex justify-between bg-navyblue text-white items-center p-4 bg-gray-50 rounded-t-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
        <span
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 ease-in-out text-gray-500`}
        >
          &#x25BC;
        </span>
      </div>
      {isOpen && (
        <p
          className="p-4 text-gray-700 bg-white rounded-b-lg transition-opacity duration-300 ease-in-out"
          id={`faq-answer-${faq.question}`}
        >
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default Faq;
