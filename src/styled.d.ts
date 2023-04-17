import 'styled-components'
import { DefaultTheme } from './Styles_and_Themes/DefaultTheme'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
