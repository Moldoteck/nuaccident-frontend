import fetch from 'unfetch'
// import linkJson from '../linkContent.json'
export type Entry = {
  date: string
  title: string
  link: string
}
export default async function () {
  return (await (
    await fetch(
      'https://raw.githubusercontent.com/Moldoteck/nuaccident-frontend/main/src/linkContent.json'
    )
  ).json()) as Array<Entry>
  // return linkJson as Array<Entry>
}
