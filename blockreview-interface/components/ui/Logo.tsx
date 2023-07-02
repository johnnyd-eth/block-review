import Image from "next/image"

export function Logo({
  width,
  height,
  theme,
}: {
  width?: number
  height?: number
  theme?: "light" | "dark"
}) {
  const _width = width ?? 180
  const _height = height ?? 23
  if (theme === "dark") {
    return <Image src='/assets/blockreview-logo-white.png' alt='Blockreview logo' width={_width} height={_height} />
  }
  return (
    <Image src='/assets/blockreview-logo1.png' alt='Blockreview logo' width={_width} height={_height} />
  )
}
