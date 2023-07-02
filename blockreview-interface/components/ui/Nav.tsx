import Image from "next/image";
import Link from "next/link";
import WalletButton from "./WalletButton";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <div className='flex justify-between items-center px-20 pt-5'>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <WalletButton />
    </div>
  )
}
