"use client";
import { HeroUIProvider } from "@heroui/react";
import { NextIntlClientProvider } from "next-intl";
import * as React from "react";

const ClientProvider = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: Record<string, string>;
}) => {
  const locale = "en";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextIntlClientProvider>
  );
};

export default ClientProvider;
