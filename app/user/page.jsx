"use client";

import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>
        <p className="description">
          Claim your test access pass by creating an account!
        </p>

        <ConnectWallet className="connect" />

        <div className="card">
          {address ? (
            <Web3Button
              contractAddress={editionDropAddress}
              action={(contract) =>
                contract.erc1155.claim(editionDropTokenId, 1)
              }
              onSuccess={() => alert("Claim successful!")}
              style={{ width: "100%", marginTop: "10px" }}
            >
              Claim!
            </Web3Button>
          ) : (
            <p>Login to claim!</p>
          )}
        </div>
      </main>
    </div>
  );
}
