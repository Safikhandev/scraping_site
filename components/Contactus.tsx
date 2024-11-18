"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormInput = {
  yourName: string;

  mobileNumber: string;
  email: string;

  service: string;
  message: string;
};

const Contactusform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInput>();

  async function onSubmit(formData: FormInput) {
    await fetch("/api/send-popup", {
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

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-xl font-semibold bg-transparent py-3 px-5 lg:px-9 navbutton rounded-full hover:bg-navyblue hover:text-white"
            onClick={openModal}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className=" px-4 mx-auto max-w-screen-md">
                    {/* <div className="flex flex-shrink-0 items-center justify-center">
                      <Link
                        href="/"
                        className="text-2xl sm:text-4xl font-semibold text-black"
                      >
                        Desgy Solutions
                      </Link>
                    </div> */}
                    <p className="mb-8 lg:mb-8 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      Contact us now? Want to send us a feedback?
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="text"
                          {...register("yourName", { required: true })}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Phone Number
                        </label>
                        <input
                          id="text"
                          {...register("yourName", { required: true })}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter phone number"
                          {...register("mobileNumber", {
                            required: true,
                            minLength: 10,
                            maxLength: 15,
                          })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Your email
                        </label>
                        <input
                          id="email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          type="email"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="xyz@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Services
                        </label>
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
                          <option value="web data scraping">
                            Web Data Scraping
                          </option>
                          <option value="web automation">Web Automation</option>
                          {/* <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="support">Support</option> */}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          {...register("message", { required: true })}
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// "use client";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";

// type FormInput = {
//   yourName: string;

//   mobileNumber: string;
//   email: string;

//   service: string;
//   message: string;
// };

// const Contactusform = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormInput>();

//   async function onSubmit(formData: FormInput) {
//     await fetch("/api/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         yourName: formData.yourName,

//         email: formData.email,
//         message: formData.message,
//       }),
//     }).then(() => {
//       toast.success("Your Message has been sent successfully");
//     });

//     reset();
//   }

//   // ------------------------------------------

//   let [isOpen, setIsOpen] = useState(false);

//   const [inputValues, setInputValues] = useState({
//     input1: "",
//     input2: "",
//     input3: "",
//   });

//   const handleChange = (e: { target: { name: string; value: string } }) => {
//     const { name, value } = e.target;
//     setInputValues((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleClick = () => {
//     alert(
//       `Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`
//     );
//     setIsOpen(false);
//   };

//   // FORM SUBMIT
//   // const handleSubmit = (event: { preventDefault: () => void }) => {
//   //   event.preventDefault();
//   //   // handle form submission
//   // };

//   const isDisabled = Object.values(inputValues).some((value) => value === "");

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
//         {/* <div className='lg:hidden'>
//                     <button type="button" className='bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded' onClick={openModal}>
//                         Contact Us
//                     </button>
//                 </div> */}
//         <div className="hidden lg:block">
//           <button
//             type="button"
//             className="justify-end text-xl font-semibold bg-transparent py-3 px-5 lg:px-9 navbutton rounded-full hover:bg-navyblue hover:text-white"
//             onClick={openModal}
//           >
//             Get a Quote
//           </button>
//         </div>
//       </div>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
//                     <div className="flex flex-shrink-0 items-center justify-center">
//                       <Link
//                         href="/"
//                         className="text-2xl sm:text-4xl font-semibold text-black"
//                       >
//                         Desgy Solutions
//                       </Link>
//                     </div>
//                     <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//                       Contact us now? Want to send us a feedback?
//                     </p>
//                     <form
//                       action="#"
//                       className="space-y-8"
//                       // onSubmit={handleSubmit}
//                       onSubmit={handleSubmit(onSubmit)}
//                     >
//                       <div>
//                         <label
//                           htmlFor="text"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           Your Name
//                         </label>
//                         <input
//                           id="text"
//                           // name="input1"
//                           // value={inputValues.input1}
//                           // onChange={handleChange}
//                           {...register("yourName", { required: true })}
//                           type="text"
//                           autoComplete="current-password"
//                           required
//                           className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                           placeholder="Name..."
//                         />
//                       </div>
//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                         >
//                           Your email
//                         </label>
//                         <input
//                           id="email"
//                           // name="input2"
//                           // value={inputValues.input2}
//                           // onChange={handleChange}
//                           {...register("email", {
//                             required: true,
//                             pattern: /^\S+@\S+$/i,
//                           })}
//                           type="email"
//                           autoComplete="current-password"
//                           required
//                           className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                           placeholder="xyz@email.com"
//                         />
//                       </div>
//                       <div className="sm:col-span-2">
//                         <label
//                           htmlFor="message"
//                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//                         >
//                           Your message
//                         </label>
//                         <textarea
//                           id="message"
//                           // name="input3"
//                           // value={inputValues.input3}
//                           // onChange={handleChange}
//                           {...register("message", {
//                             required: true,
//                           })}
//                           className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                           placeholder="Leave a comment..."
//                         ></textarea>
//                       </div>
//                       <button
//                         type="submit"
//                         onClick={handleClick}
//                         disabled={isDisabled}
//                         className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                       >
//                         Send message
//                       </button>
//                     </form>
//                   </div>

//                   {/* <div className='flex justify-end'>
//                                         <button type="button"
//                                             onClick={closeModal}
//                                             className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
//                                     </div> */}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };

// export default Contactusform;
