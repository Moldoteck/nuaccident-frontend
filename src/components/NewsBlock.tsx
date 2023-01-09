import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'preact/compat'
import { readFileSync } from 'fs'

import news from '../linkContent.json'
import classnames, {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  space,
  textAlign,
  textColor,
} from 'classnames/tailwind'
import { NewsTile } from './NewsTile'
import AppStore from 'stores/AppStore'
import { useSnapshot } from 'valtio'
import { Entry } from 'helpers/getJSONData'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-center'),
  alignItems('items-start'),
  height('h-fit')
)

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const textStyle = classnames(
  whiteText,
  fontWeight('font-bold'),
  textAlign('text-center')
)
export default function () {
  const { linkData } = useSnapshot(AppStore)
  // let data =
  if (linkData)
    return (
      <div className={container}>
        {linkData.map((element: Entry) => {
          return <NewsTile>{element}</NewsTile>
        })}
      </div>
    )
  else return <div>loading</div>
}
