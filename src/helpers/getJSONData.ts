import fetch from 'unfetch'
import linkJson from '../linkContent.json'
export type Entry = {
  date: string
  title: string
  link: string
}
export default async function () {
  // return (await (
  //   await fetch('http://localhost:5173/linkContent.json')
  // ).json()) as Array<Entry>
  return linkJson as Array<Entry>
}
