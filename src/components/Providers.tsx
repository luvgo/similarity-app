"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "./ui/Toast";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <SessionProvider>
        <Toaster position="bottom-right" />
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
