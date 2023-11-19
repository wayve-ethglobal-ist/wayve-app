"use client";

import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContractWrite,
  useContract,
  paymasterAPI,
} from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const contractAddress = "0x9c376ecff687e22adde574330278ef626181567a";
  const { contract } = useContract(contractAddress);
  const { mutateAsync, isLoading, error } = useContractWrite(contract, "vote");

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
            {/* {address ? (
              // <Web3Button
              //   contractAddress=
              //   action={(contract) =>
              //     contract.erc1155.claim(editionDropTokenId, 1)
              //   }
              //   onSuccess={() => alert("Claim successful!")}
              //   style={{ width: "100%", marginTop: "10px" }}
              // >
              //   Claim!
              // </Web3Button>
            ) : (
              <p>Login to claim!</p>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
}
