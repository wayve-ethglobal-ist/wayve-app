"use client";

import { ConnectWallet, Web3Button, useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>
        <p className="description">{address}</p>
        <div className="connect">
          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                align: "center",
                side: "bottom",
              }}
              btnTitle="Login"
            />
          </div>
          <div className="card">
            {address ? (
              //display address
              <p>{address}</p>
            ) : (
              // You can then use this wallet to perform transactions via the SDK
              <p>Login to claim!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
