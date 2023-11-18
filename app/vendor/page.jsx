"use client";

import React, { useEffect, useState } from "react";
import { Web3AuthModalPack } from "@safe-global/auth-kit";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { WalletConnectV2Adapter } from "@web3auth/wallet-connect-v2-adapter";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";

export default function Home() {
  const [web3AuthModalPack, setWeb3AuthModalPack] = useState(null);
  const [user, setUser] = useState(null); // State to track user details

  useEffect(() => {
    async function initializeWeb3Auth() {
      const options = {
        clientId:
          "BMoTQqoc3XB8z_kNmSMgW9hMQgWphlovzBkyQa3tP9yNuKIKH7eIsBPI3xCHkASKVjGpLsDZOZVsXAAsfUX2p6Y",
        web3AuthNetwork: "testnet",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x66eee",
          rpcTarget: "https://sepolia-rollup.arbitrum.io/rpc",
        },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["google", "facebook"],
        },
      };

      const modalConfig = {
        [WALLET_ADAPTERS.TORUS_EVM]: {
          label: "torus",
          showOnModal: false,
        },
        [WALLET_ADAPTERS.METAMASK]: {
          label: "metamask",
          showOnDesktop: true,
          showOnMobile: false,
        },
      };

      // const openloginAdapter = new OpenloginAdapter({
      //   loginSettings: {
      //     mfaLevel: "mandatory",
      //   },
      //   adapterSettings: {
      //     uxMode: "popup",
      //     whiteLabel: {
      //       name: "Safe",
      //     },
      //   },
      // });

      const walletConnectV2Adapter = new WalletConnectV2Adapter({});

      const web3AuthModalPack = new Web3AuthModalPack({
        txServiceUrl: "https://safe-transaction-{chain}.safe.global",
      });

      await web3AuthModalPack.init({
        options,
        adapters: [],
        modalConfig,
      });

      setWeb3AuthModalPack(web3AuthModalPack);
    }

    initializeWeb3Auth();
  }, []);

  const handleLogin = async () => {
    if (web3AuthModalPack) {
      const userInfo = await web3AuthModalPack.signIn(); // Perform sign-in
      console.log(userInfo);
      setUser(userInfo); // Update the state with user info
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <div>
          {/* Display user details */}
          <p>Welcome, {user.eoa}!</p>
          {/* Add a logout button or other user-specific content */}
        </div>
      )}
    </main>
  );
}
