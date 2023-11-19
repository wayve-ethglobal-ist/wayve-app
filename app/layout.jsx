'use client'
import React from 'react';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin';
import {
  ThirdwebProvider,
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
    <html lang="en">
      <ThirdwebProvider
        clientId="e072fbaa1dd5c09a9b8d147784576cbf"
        activeChain="base-goerli"
        supportedWallets={[smartWalletConfig]}
      >
        <ThemeProvider theme={lightTheme}>
          <ThorinGlobalStyles />
          <body className={`max-w-xl mx-auto px-4 bg-white h-screen`}>
            {children}
          </body>
        </ThemeProvider>
      </ThirdwebProvider>
    </html>
  );
}

