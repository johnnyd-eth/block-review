import { useWallet } from "../Wallet";

export default function WalletButton() {
  const { isConnected, connect } = useWallet();

  if (!isConnected) {
    return (
      <button
        onClick={() => connect()}
        className="rounded-lg bg-swatch-100 py-3.5 px-6 text-swatch-400 hover:bg-swatch-200 transition"
      >
        Connect
      </button>
    );
  }

  return null
}
