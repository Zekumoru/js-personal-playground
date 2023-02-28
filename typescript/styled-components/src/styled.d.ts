import 'styled-components';

declare module 'styled-components' {
  export interface Button {
    fontFamily: string;
  }

  export interface Theme {
    primary: string;
    text: string;
  }

  export interface DefaultTheme {
    light: Theme;
    dark: Theme;
    button: Button;
  }
}
