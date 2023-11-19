'use client'
import React from 'react';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin';
import {
  ThirdwebProvider,
  privateWallet,
  smartWallet,
  localWallet,
  walletConnect,
} from "@thirdweb-dev/react";
export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x07A2C46436F6fc96848E9ee32DAdA491B5CE2aEd",
  gasless: true,
  paymasterURL: "https://paymaster.base.org",
});

const walletConnectConfig = walletConnect({});

export default function RootLayout({ children }) {
  return (
    <ThirdwebProvider
      clientId="7f039f7b089046deee9b146c01afb0ef"
      supportedWallets={[smartWalletConfig]}

      activeChain="goerli"
      secretKey="B3dM8cPj5j7TD3tMIy1DUsEql4tHPIv2LfZRKFfmqe57"

      // supportedWallets={[walletConnectConfig]}
      // clientId="b6d69f62bb523c66af37f2c74b2e47c6"
    >
      <html lang="en">
        <ThemeProvider theme={lightTheme}>
          <ThorinGlobalStyles />
          <body className={`max-w-xl mx-auto px-4 mb-12`}>
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ThirdwebProvider>
  );
}

