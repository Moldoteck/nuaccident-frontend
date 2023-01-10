import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  classnames,
  cursor,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  margin,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  pointerEvents,
  textAlign,
  textColor,
  width,
} from 'classnames/tailwind'
import { Entry } from 'helpers/getJSONData'
import AppStore from 'stores/AppStore'
import { useSnapshot } from 'valtio'

const whiteText = classnames(
  AppStore.dark ? textColor('text-white') : textColor('text-black-background')
)
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)
function linkChecker(link: string) {
  if (link.includes('tv8.md')) {
    return 'https://tv8.md/_next/static/files/logoDark.svg'
  } else if (link.includes('protv.md')) {
    return 'https://assets.protv.md/articles/images/original/2022/09/19/Logositeprotv-1601057615stycldm-1631566502xk3o1ql-1663572145lt2p8sq.png'
  } else if (link.includes('jurnal.md')) {
    return 'https://www.jurnal.md/img/logo/Jurnalmd_logo_pink.svg'
  } else if (link.includes('unimedia.info')) {
    return 'https://unimedia.info/img/uni-logo.svg'
  } else if (link.includes('agora.md')) {
    return 'https://agora.md/files/images/logo-white.png'
  } else if (link.includes('europalibera.org')) {
    return 'https://moldova.europalibera.org/Content/responsive/RFE/ro-MD/img/logo.svg'
  } else if (link.includes('zdg.md')) {
    return 'https://www.zdg.md/wp-content/uploads/2022/07/logo-footer-1.svg'
  } else if (link.includes('moldova.org')) {
    return 'https://www.moldova.org/wp-content/uploads/2022/01/cropped-vertical-logo-3.png'
  } else if (link.includes('publika.md')) {
    return 'https://assets.publika.md/new/svg/logo_ro.svg'
  } else if (link.includes('stiri.md')) {
    return 'https://stiri.md/static/images/newLogo2.svg'
  }

  return ''
}
export function NewsTile(tileObj: { children: Entry }) {
  return (
    <div
      className={classnames(
        display('flex'),
        flexDirection('flex-col'),
        justifyContent('justify-center'),
        cursor('cursor-pointer'),
        width('w-1/5'),
        maxWidth('max-w-fit'),
        minWidth('min-w-min'),
        height('h-fit'),
        minHeight('2xl:min-h-max'),
        margin('m-2'),
        borderStyle('!border-dashed'),
        borderColor(AppStore.dark ? 'border-white' : 'border-black-background'),
        backgroundColor(
          useSnapshot(AppStore).dark ? 'bg-black-background' : 'bg-gray-200'
        ),
        borderRadius('rounded-xl'),
        borderWidth('border-2'),
        padding('p-2')
      )}
      onClick={() => {
        window.open(tileObj.children.link, '_blank')
      }}
    >
      <div
        className={classnames(
          display('flex'),
          justifyContent('justify-center'),
          margin('m-2', 'my-5')
        )}
      >
        <img
          src={linkChecker(tileObj.children.link)}
          className={classnames(display('flex'), height('h-32'))}
        ></img>
      </div>
      <div className={classnames(display('flex'))}>
        <a
          href={tileObj.children.link}
          className={classnames(
            textColor(
              AppStore.dark ? 'text-white' : 'text-black-background',
              'visited:text-purple-500'
            ),
            pointerEvents('pointer-events-none')
          )}
          onClick={() => {
            return false
          }}
        >
          {tileObj.children.title}
        </a>
      </div>
      <div className={classnames(display('flex'))}></div>
    </div>
  )
}
