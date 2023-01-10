import { BodyText, HeaderText } from 'components/Text'
import { Suspense } from 'preact/compat'
import classnames, {
  alignItems,
  animation,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  minHeight,
  space,
  textAlign,
  textColor,
  textDecoration,
  width,
} from 'classnames/tailwind'
import NewsBlock from './NewsBlock'
import AppStore from 'stores/AppStore'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  alignItems('items-center'),
  space('space-y-2'),
  height('h-fit'),
  minHeight('min-h-screen')
)

const whiteText = classnames(
  AppStore.dark ? textColor('text-white') : textColor('text-black-background')
)
const grayText = classnames(textColor('text-gray-300'))

const textStyle = classnames(
  whiteText,
  fontWeight('font-bold'),
  textAlign('text-center')
)
// let speed = 25
// let i = 0
// let phraseIndex = 0
// let text = ''

// let textArray = [
//   'Când cineva e beat la volan, nu mai produce accident, produce o crimă',
//   'Când cineva privește la telefon în timp ce conduce, nu mai produce accident, produce o crimă',
//   'Când cineva depășește viteza legală, nu mai produce accident, produce o crimă',
//   'Când drumurile sunt proiectate și menținute prost, autoritățile comit o crimă',
// ]
// async function typeWriter() {
//   if (i < text.length) {
//     let par = document.getElementById('textAnimat')
//     if (par) par.innerHTML += text.charAt(i)
//     else return
//     i++
//     setTimeout(typeWriter, speed)
//   } else {
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     while (i >= 0) {
//       let par = document.getElementById('textAnimat')
//       if (par) par.innerHTML = text.slice(0, i)
//       else return
//       i--
//       await new Promise((resolve) => setTimeout(resolve, 5))
//     }
//     if (phraseIndex < textArray.length - 1) {
//       phraseIndex++
//       i = 0
//       text = textArray[phraseIndex]
//       setTimeout(typeWriter, speed)
//     } else {
//       phraseIndex = 0
//       i = 0
//       text = textArray[phraseIndex]
//       setTimeout(typeWriter, speed)
//     }
//   }
// }

export default function () {
  return (
    <div className={container}>
      <p
        className={classnames(
          whiteText,
          fontWeight('font-bold'),
          fontSize('text-3xl', 'md:text-6xl'),
          width('w-full'),
          animation('animate-pulse')
        )}
      >
        accident
      </p>

      <p
        className={classnames(
          whiteText,
          fontSize('text-xl', 'md:text-4xl'),
          textAlign('text-justify')
        )}
      >
        * Eveniment fortuit,{' '}
        <span
          className={classnames(
            animation('animate-pulse'),
            fontWeight('font-bold')
          )}
        >
          imprevizibil
        </span>
        , care întrerupe mersul normal al lucrurilor (provocând avarii, răniri,
        mutilări sau chiar moartea).{' '}
      </p>
      <br />
      {/* <p
        className={classnames(
          whiteText,
          fontWeight('font-bold'),
          fontSize('text-2xl', 'md:text-4xl'),
          width('w-full'),
          animation('animate-pulse')
        )}
      >
        whitewashing
      </p>

      <p className={classnames(whiteText, fontSize('text-xl', 'md:text-2xl'))}>
        * prezentarea informației în mod unilateral pentru a îmbunătăți
        percepția publică față de un eveniment sau o persoană.{' '}
      </p> */}
      <p id="textAnimat"></p>
      <p
        className={classnames(
          whiteText,
          fontWeight('font-bold'),
          fontSize('text-2xl', 'md:text-4xl'),
          textAlign('text-center'),
          width('w-full'),
          animation('animate-pulse')
        )}
      >
        "accidente imprevizibile" în știri
      </p>
      <div
        className={classnames(
          display('flex'),
          justifyContent('justify-center')
        )}
      >
        <Suspense fallback={<BodyText>Loading...</BodyText>}>
          <NewsBlock />
        </Suspense>
      </div>

      <div
        className={classnames(
          display('flex'),
          flexDirection('flex-col'),
          justifyContent('justify-center'),
          alignItems('items-center'),
          whiteText
        )}
      >
        <p>Creat cu tristețe din Moldova</p>
        <br />
        <p>
          <a
            href="https://github.com/Moldoteck/nuaccident/issues"
            className={classnames(textDecoration('underline'))}
            target="_blank"
          >
            Contact
          </a>
        </p>
      </div>
    </div>
  )
}
// typeWriter()
