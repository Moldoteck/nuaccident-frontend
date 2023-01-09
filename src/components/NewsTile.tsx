import {
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  classnames,
  cursor,
  display,
  flex,
  flexDirection,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  justifyContent,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  padding,
  pointerEvents,
  textAlign,
  textColor,
  textOverflow,
  whitespace,
  width,
} from 'classnames/tailwind'
import { Entry } from 'helpers/getJSONData'
import ChildrenProp from 'models/ChildrenProp'
import { ComponentChildren } from 'preact'

const whiteText = classnames(textColor('text-white'))
const grayText = classnames(textColor('text-gray-300'))

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold'),
  textAlign('text-center')
)

export function NewsTile(tileObj: { children: Entry }) {
  return (
    <div
      className={classnames(
        display('flex'),
        flexDirection('flex-col'),
        justifyContent('justify-center'),
        cursor('cursor-pointer'),
        width('w-1/3'),
        maxWidth('max-w-fit'),
        minWidth('min-w-min'),
        height('h-fit'),
        minHeight('2xl:min-h-max'),
        margin('m-2'),
        borderStyle('!border-dashed'),
        borderColor('border-white'),
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
          src="https://tv8.md/_next/static/files/logoDark.svg"
          className={classnames(display('flex'), height('h-32'))}
        ></img>
      </div>
      <div className={classnames(display('flex'))}>
        <a
          href={tileObj.children.link}
          className={classnames(
            textColor('text-white', 'visited:text-yellow-100'),
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
