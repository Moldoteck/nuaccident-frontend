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

const whiteText = classnames(
  AppStore.dark ? textColor('text-white') : textColor('text-black-background')
)
const grayText = classnames(textColor('text-gray-300'))

const textStyle = classnames(
  whiteText,
  fontWeight('font-bold'),
  textAlign('text-center')
)
const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-center'),
  alignItems('items-start'),
  height('h-fit'),
  textStyle
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
