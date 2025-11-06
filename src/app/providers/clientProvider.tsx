"use client";
import { HeroUIProvider } from "@heroui/react";
import * as React from "react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = "en";

  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default ClientProvider;
