"use client";

import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContractWrite,
  useContract,
  paymasterAPI,
} from "@thirdweb-dev/react";
import { IDKitWidget, ISuccessResult, CredentialType } from "@worldcoin/idkit";

export default function Home() {
  const address = useAddress();
  const contractAddress = "0x9c376ecff687e22adde574330278ef626181567a";
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(contract, "vote");

  const merhabaFromWayve = () => {
    console.log("call wallet here");
  };

  const onSuccess = (result) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert(
      "Successfully verified with World ID! Your nullifier hash is: " +
        result.nullifier_hash
    );
  };

  const handleProof = async (result) => {
    console.log("Proof received from IDKit:\n", JSON.stringify(result)); // Log the proof from IDKit to the console for visibility

    const reqBody = {
      merkle_root: result.merkle_root,
      nullifier_hash: result.nullifier_hash,
      proof: result.proof,
      credential_type: result.credential_type,
      action: "yourActionHere", // Update this as needed
      signal: "",
    };

    console.log(
      "Sending proof to backend for verification:\n",
      JSON.stringify(reqBody)
    ); // Log the proof being sent to our backend for visibility

    try {
      const response = await fetch("http://localhost:3001/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(reqBody),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Successful response from backend:\n", data); // Log the response from our backend for visibility
      } else {
        throw new Error(`Error: ${response.status} - ${data.detail}`);
      }
    } catch (error) {
      console.error("Verification failed:", error.message);
    }
  };

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>
        <p className="description">{address}</p>
        <div className="connect">
          <div className="connect">
            {address ? (
              <Web3Button
                contractAddress={contractAddress}
                // Calls the "setName" function on your smart contract with "My Name" as the first argument
                action={() => mutateAsync({ args: [0, true] })}
                //log errors
                onError={(error) => console.log(error)}
                isLoading={isLoading}
              >
                Send Transaction
              </Web3Button>
            ) : (
              <ConnectWallet className="connect" />
            )}
          </div>
          <div className="card">
            <IDKitWidget
              app_id="app_e36d34413f30d6d9f59b0cd36474fda3"
              action="merhabaFromWayve"
              onSuccess={onSuccess} // optional callback when the proof is received
              handleVerify={handleProof} // optional callback to handle the proof
              credential_types={[CredentialType.Orb, CredentialType.Phone]} // optional, defaults to all credential types
              enableTelemetry // optional, defaults to false
            >
              {({ open }) => (
                <button onClick={open}>Verify with World ID</button>
              )}
            </IDKitWidget>
          </div>
        </div>
      </main>
    </div>
  );
}
