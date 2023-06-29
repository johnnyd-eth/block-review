import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className='h-40 w-full bg-swatch-800 px-20 flex justify-between items-center'>
      <Logo theme="dark" />
      <span className="text-gray-400 text-base">© 2023 Blockreview. All rights reserved.</span>
    </div>
  )
}
