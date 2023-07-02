export function VerifiedIcon({
  width=26,
  height=26
}: {
  width?: number
  height?: number
}) {
  return (
    <img src='/assets/badge.png' alt='Verified project badge' width={width} height={height} />
  )
}
