import { twMerge } from "tailwind-merge";
import { useWallet } from "../../Wallet";

export default function WalletButton({ 
  text,
  className
}: { 
  text?: string 
  className?: string
}) {
  const { isConnected, connect } = useWallet();

  if (!isConnected) {
    return (
      <button
        onClick={() => connect()}
        className={twMerge(
          'rounded-lg bg-swatch-100 py-3.5 px-6 text-swatch-400 hover:bg-swatch-200 transition text-base',
          className
        )}
      >
        {text ?? 'Connect'}
      </button>
    );
  }

  return null
}
