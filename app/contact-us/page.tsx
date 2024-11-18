import React from "react";
import Index from "@/components/index";
import ClientProvider from "@/components/ClientProvider";

const page = () => {
  return (
    <>
      <ClientProvider />
      <Index />
    </>
  );
};

export default page;
