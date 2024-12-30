import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
} from "@solana/spl-token";
import address from "../../credentials/address";
import nighachu_address from "../../credentials/nighachu_address";
import { Buffer } from "buffer";
window.Buffer = Buffer;

// eslint-disable-next-line react/prop-types
const BuyButton = ({ solAmount, nigachuValue }) => {
  const { publicKey, connect, wallet, sendTransaction, connected, select } =
    useWallet();
  const [loading, setLoading] = useState(false);

  // Convert recipientAddress to PublicKey
  const recipientAddress = new PublicKey(address);
  const connection = new Connection(
    "https://solana-api.projectserum.com",
    "confirmed"
  );

  const nigachuMintAddress = new PublicKey(nighachu_address); // Ensure it's a valid public key

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
      setLoading(true);
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

      // Create the transaction to transfer SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey, // The user's public key
          toPubkey: recipientAddress, // Your wallet address
          lamports: amountInLamports, // Payment amount in Lamports
        })
      );

      // Send the SOL transaction
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      // Now transfer Nigachu tokens to the user
      await transferNigachuTokens(publicKey, nigachuValue);
      alert("Payment Successful! Nigachu Tokens Sent.");
    } catch (error) {
      console.error("Payment failed", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const transferNigachuTokens = async (userPublicKey, nigachuValue) => {
    try {
      // Get the user's associated token account
      const userTokenAccount = await getAssociatedTokenAddress(
        nigachuMintAddress,
        userPublicKey
      );

      // Check if the user's token account exists
      const accountInfo = await connection.getAccountInfo(userTokenAccount);
      const transaction = new Transaction();

      if (!accountInfo) {
        // If not, create the associated token account
        transaction.add(
          createAssociatedTokenAccountInstruction(
            publicKey, // Payer
            userTokenAccount, // Associated token account
            userPublicKey, // Owner of the token account
            nigachuMintAddress // Token mint
          )
        );
      }

      // Transfer Nigachu tokens to the user's account
      const nigachuAmount = parseFloat(nigachuValue) * 1e6; // Convert the nigachu value to micro-units
      transaction.add(
        createTransferInstruction(
          await getAssociatedTokenAddress(nigachuMintAddress, publicKey), // Source token account
          userTokenAccount, // Destination token account
          publicKey, // Authority
          nigachuAmount // Token amount (in micro units for SPL tokens)
        )
      );

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");
    } catch (error) {
      console.error("Failed to transfer Nigachu tokens", error);
      throw error;
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
          {loading
            ? "Loading..."
            : !isPhantomInstalled
            ? "Install Wallet"
            : publicKey
            ? "PaY"
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
