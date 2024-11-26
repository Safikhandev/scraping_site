"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormInput = {
  yourName: string;

  mobileNumber: string;
  email: string;

  service: string;
  message: string;
};

const HomeContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();

  async function onSubmit(formData: FormInput) {
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        yourName: formData.yourName,

        mobileNumber: formData.mobileNumber,
        email: formData.email,

        service: formData.service,
        message: formData.message,
      }),
    }).then(() => {
      toast.success("Your Message has been sent successfully");
    });

    reset();
  }

  return (
    <>
      <div
        className="isolate px-6 py-11 lg:px-8"
        style={{ backgroundColor: "#f2f2ed" }}
      >
        <div className="border-spacing-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-4 max-w-xl sm:mt-5"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Your name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    // name="first-name"
                    placeholder="Enter your name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    {...register("yourName", { required: true })}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                  </div>
                  <input
                    type="tel"
                    // name="phone-number"
                    placeholder="Enter phone number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    {...register("mobileNumber", {
                      required: true,
                      minLength: 10,
                      maxLength: 15,
                    })}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    // name="email"
                    placeholder="Enter your email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="services"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Services
                </label>
                <div className="mt-2.5">
                  <select
                    id="services"
                    // name="services"
                    className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    {...register("service", {
                      required: true,
                    })}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web data scraping">Web Data Scraping</option>
                    <option value="web automation">Web Automation</option>
                    {/* <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="support">Support</option> */}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    // name="message"
                    id="message"
                    placeholder="Enter Message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-navyblue bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
      {/* ------------------------------------------------------ */}
    </>
  );
};

export default HomeContact;
