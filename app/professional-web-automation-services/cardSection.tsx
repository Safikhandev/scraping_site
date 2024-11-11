import React from "react";
import Link from "next/link";
const cardSection = () => {
  const reasons = [
    {
      id: 1,
      icon: "🛠️",
      title: "No-code (visual) interface to build a bot/scraper",
      description:
        "Automatio is made for non-technical people. Which means, creating a bot/scraper will require writing zero lines of code.",
      additional:
        "Simple, click and point interface will give you great user experience while you are creating your automated workflows.",
    },
    {
      id: 2,
      icon: "⌨️",
      title: "No need to hire another developer",
      description:
        "Finding a right developer for your next scraping project or bot is hard. It’s time consuming and often can result in a failed project.",
      additional:
        "Instead, you can take the work in your hands and build the tool you need to achieve your business goals.",
    },
    {
      id: 3,
      icon: "💲",
      title: "Save a lot of money on development cost",
      description:
        "Building a custom bot or scraper is expensive and hiring the right developer can be a painful process. It can cost hundreds or even thousands of dollars.",
      additional:
        "Yet, even if you develop it, someone will still need to maintain it, which will result in even more money spent.",
    },
    {
      id: 4,
      icon: "⏱️",
      title: "Make a bot in minutes, not in days or weeks",
      description:
        "While developers will need days or weeks to build a bot, you will have it done before they set up their coding environment.",
      additional:
        "Literally, you can build a complex bot/scraper in just a few minutes. You don’t believe it? Try it out!",
    },
  ];

  /////   ------------------ Content Section       -------------------------------------------
  const features = [
    {
      id: 1,
      text: "Data panel which gives you access to data you extracted from the web pages. Data is available in various formats like CSV, JSON, RSS, API.",
    },
    {
      id: 2,
      text: "Status & Metrics blocks gives you ability see if the instance is running, how much credits spent, number of data collected.",
    },
    {
      id: 3,
      text: "Edit Instance let you go back and edit the bot flow, without need to recreate anything from scratch.",
    },
    {
      id: 4,
      text: "Logs are a great way to know what is Automatio doing at every moment. It’s a handy feature that can help you to debug your bot.",
    },
    {
      id: 5,
      text: "Screenshots is powerful feature that gives you ability to see exactly what Automatio (your bot) see while he is running and automating web pages.",
    },
    {
      id: 6,
      text: "A lot of other features and options which help you create, run and manage your instances, bots, or scrapers like you never been able before.",
    },
  ];

  //   --------------------------------------------------
  //////           Images section
  //   --------------------------------------------------
  const products = [
    {
      id: 1,
      title: "MODULAR YARD AUTOMATION (MYA)",
      description:
        "The Modular Yard Automation system (MYA) provides a tailored-to-requirement scalable automated solution for increased safety, productivity, and efficiency in your rail yard operations.",
      image: "/images/yard-automation.jpg", // Replace with your image path
    },
    {
      id: 2,
      title: "FAS-PAS FOR SWITCH CONTROL IN DARK TERRITORY",
      description:
        "The patented FAS-PAS is a safe, cost-effective real-time microprocessor solution for Dark Territory. With FAS-PAS, the locomotive sends a request to open (or close) the switch function while on the approach.",
      image: "/images/switch-control.jpg", // Replace with your image path
    },
  ];

  return (
    <>
      <section className="bg-lightgrey mb-8 text-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            seven <span className="text-blue-500">good reasons</span> to use
            Automatio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="mb-4">{reason.description}</p>
                <p className="text-gray-400">{reason.additional}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* // ----------------------------------------------------------------------
      /// Content Section //
      ---------------------------------------------------------------------- */}
      <section className="bg-gray-900 text-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Manage Your <span className="text-blue-500">Bot Instances</span>{" "}
            With A Dashboard
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Since Automatio runs in the cloud, you can access and manage your
            bot / scraper instances within a dashboard. Below we listed just a
            some of main features like:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start">
                <span className="text-red-500 text-2xl mr-3">•</span>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}

      <div
        className="relative h-auto py-14 z-0 bg-cover bg-center mb-10"
        style={{ backgroundImage: `url("/images/banner/banner.webp")` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 text-white h-full flex items-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Left Column */}
            <div className="justify-start mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 text-left">
                Web Automation
              </h2>
              <p className="text-base sm:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt atque non recusandae laudantium quaerat corrupti
                dignissimos at culpa voluptate dicta? Ea, dolorem?
              </p>
            </div>

            {/* Right Column */}
            <div className="flex items-center justify-start md:justify-center">
              <Link href="/contact-us">
                <button className="text-sm md:text-lg font-semibold hover:shadow-xl bg-navyblue text-white py-5 px-8 md:py-3 md:px-7 rounded-full hover:bg-blue-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cardSection;
