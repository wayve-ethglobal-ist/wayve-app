'use client'
import React from 'react';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import { ThorinGlobalStyles, lightTheme } from '@ensdomains/thorin';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={lightTheme}>
        <ThorinGlobalStyles />
        <body className={`max-w-xl mx-auto px-4 bg-white`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

