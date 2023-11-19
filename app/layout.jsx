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
  paymasterURL: "https://paymaster.base.org",
});

export default function RootLayout({ children }) {
  return (
    <ThirdwebProvider
      clientId="7f039f7b089046deee9b146c01afb0ef"
      activeChain="goerli"
      secretKey="B3dM8cPj5j7TD3tMIy1DUsEql4tHPIv2LfZRKFfmqe57"
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
