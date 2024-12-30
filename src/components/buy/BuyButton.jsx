import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import address from "../../credentials/address";

// eslint-disable-next-line react/prop-types
const BuyButton = ({ solAmount }) => {
  const { publicKey, connect, wallet, sendTransaction, connected, select } =
    useWallet();

  const recipientAddress = address; // Replace with your wallet address
  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  // Automatically select Phantom wallet if available
  useEffect(() => {
    if (!window.solana?.isPhantom) {
      alert("Phantom Wallet is not installed. Please install it first.");
      return;
    }

    if (!wallet && window.solana?.isPhantom) {
      select("Phantom");
    }
  }, [wallet, select]);

  const handlePayment = async () => {
    try {
      if (!wallet) {
        alert(
          "No wallet adapter found. Please ensure you have a wallet installed."
        );
        return;
      }

      if (!connected) {
        await connect(); // Trigger the wallet modal to connect the wallet
        return;
      }

      if (!publicKey) {
        alert("Failed to connect wallet. Please try again.");
        return;
      }

      if (!solAmount || solAmount <= 0) {
        alert("Invalid SOL amount. Please enter a valid amount.");
        return;
      }

      // Convert SOL amount to Lamports
      const amountInLamports = solAmount * 1e9; // 1 SOL = 10^9 Lamports

      // Create the transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey, // The user's public key
          toPubkey: new PublicKey(recipientAddress), // Your wallet address
          lamports: amountInLamports, // Payment amount in Lamports
        })
      );

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);

      // Confirm the transaction
      await connection.confirmTransaction(signature, "confirmed");

      alert("Payment Successful! Thank you for your purchase.");
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    }
  };

  const handleInstall = () => {
    window.open("https://phantom.app/", "_blank");
  };

  const isPhantomInstalled = !!window?.solana?.isPhantom;

  return (
    <div className="flex justify-center items-center w-full">
      <div
        onClick={
          !isPhantomInstalled
            ? handleInstall
            : publicKey
            ? handlePayment
            : async () => {
                try {
                  await connect();
                } catch (error) {
                  console.error("Failed to connect wallet", error);
                  alert("Failed to connect wallet. Please try again.");
                }
              }
        }
        className="mx-auto p-2 m-3 flex justify-center items-center gap-2 border border-[#ec5c5b] cursor-pointer sm:h-[46.51px] sm:w-[283.65px] w-1/2"
        style={{
          backgroundImage:
            "radial-gradient(circle at left, #9a2929 0%, black 70%)",
        }}
      >
        <div className="sm:w-[32.71px] h-7">
          <img
            src="melon-left.png"
            alt="melon-left"
            className="h-full w-full"
          />
        </div>
        <div
          className="text-red-500 text-5xl whitespace-nowrap"
          style={{
            textShadow:
              "1px 0px 2px rgba(255, 255, 255, 0.5), 2px 0px 4px rgba(0, 255, 0, .6)",
          }}
        >
          {!isPhantomInstalled
            ? "Install Wallet"
            : publicKey
            ? // ? `Pay ${solAmount} SOL`
              `PaY`
            : "Connect Wallet"}
        </div>
        <div className="sm:w-[32.71px] h-7">
          <img
            src="melon-right.png"
            alt="melon-right"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyButton;
