import { PropsWithChildren } from "react";
import WalletButton from "./Wallet/WalletButton";

export function CoreAppWrapper({
  children
}: PropsWithChildren<Record<never, never>>) {
  return (
    <main>
      {/* Top Nav */}
      <div className='flex'>
        <div>
          NAV ITEMS
        </div>
        <div>
          <WalletButton />
        </div>
      </div>
      {/* Page */}
      <div>
        {children}
      </div>
    </main>
  )
}
