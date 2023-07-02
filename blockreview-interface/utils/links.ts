export function withoutHttp(link: string | undefined) {
  if (!link) return
  if (link?.slice(0, 8) === 'https://') {
    return link.slice(8)
  }
  if (link?.slice(0, 7) === 'http://') {
    return link.slice(7)
  }
  return link
}
