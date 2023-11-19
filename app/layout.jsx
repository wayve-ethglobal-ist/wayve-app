"use client";

import "./globals.css";
import React from "react";
import ApplicationLogo from "./components/ApplicationLogo";
import {
  ThirdwebProvider,
  privateWallet,
  smartWallet,
  localWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";

export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x07A2C46436F6fc96848E9ee32DAdA491B5CE2aEd",
  gasless: true,
});

export default function RootLayout({ children }) {
  return (
    <ThirdwebProvider
      clientId="e072fbaa1dd5c09a9b8d147784576cbf"
      activeChain="base-goerli"
      supportedWallets={[smartWalletConfig]}
    >
      <html lang="en">
        <body className={`max-w-xl mx-auto px-4 mb-12`}>
          <ApplicationLogo />
          {children}
        </body>
      </html>
    </ThirdwebProvider>
  );
}
