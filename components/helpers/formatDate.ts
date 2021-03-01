export function formatDate(date: string) {
  const d = new Date(date)
  const monthLong = d.toLocaleDateString('cs', {
    month: 'long',
  })
  const month = monthLong.charAt(0).toUpperCase() + monthLong.slice(1, 3)
  const formatedDate = `${month} ${d.getDate()}, ${d.getFullYear()}`

  return formatedDate
}
