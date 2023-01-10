import {
  backgroundColor,
  classnames,
  container,
  margin,
  maxWidth,
  padding,
  width,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import AppStore from 'stores/AppStore'
import { useSnapshot } from 'valtio'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  padding('pb-10', 'py-4'),
  maxWidth('max-w-7xl')
)
export default function ({ children }: ChildrenProp) {
  return (
    <div
      className={backgroundColor(
        useSnapshot(AppStore).dark ? 'bg-black-background' : 'bg-gray-300'
      )}
    >
      <div className={root}>{children}</div>
    </div>
  )
}
