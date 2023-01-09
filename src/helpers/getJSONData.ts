import fetch from 'unfetch'
export type Entry = {
  date: string
  title: string
  link: string
}
export default async function () {
  return (await (
    await fetch('http://localhost:5173/linkContent.json')
  ).json()) as Array<Entry>
}
