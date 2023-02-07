/* eslint-disable @typescript-eslint/no-empty-interface */
import theme from "styles/theme";

type ThemeInternal = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeInternal {}
}
