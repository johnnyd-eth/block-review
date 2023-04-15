import Image from "next/image";
import Link from "next/link";
import WalletButton from "./WalletButton";

export function Nav() {
  return (
    <div className='flex justify-between items-center px-20 pt-5'>
      <div>
        <Link href='/'>
          <Image src='/assets/blockreview-logo.png' alt='Blockreview logo' width={200} height={200} />
        </Link>
      </div>
      <WalletButton />
    </div>
  )
}
