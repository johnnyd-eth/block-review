import { useWallet } from "../hooks/Wallet";

export default function WalletButton() {
  const { isConnected, connect } = useWallet();

  if (!isConnected) {
    return (
      <button
        onClick={() => connect()}
        className="rounded-lg bg-blue-100 py-4 px-5 text-blue-500"
      >
        Connect
      </button>
    );
  }

  return null
}
