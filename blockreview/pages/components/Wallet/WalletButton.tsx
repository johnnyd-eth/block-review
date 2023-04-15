import { useWallet } from "../../hooks/Wallet";
import { LogoutOutlined } from "@ant-design/icons";

export default function WalletButton() {
  const { userAddress, isConnected, connect } = useWallet();

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

  const Disconnect = () => (
    <>
      <span className="text-black dark:text-slate-100">Disconnect</span>
      <LogoutOutlined className="text-black dark:text-slate-100" rotate={-90} />
    </>
  );

  if (!userAddress) return null;

  return (
    <div className="flex items-center gap-2">
      {userAddress} <br /> <Disconnect />
    </div>
  );
}
