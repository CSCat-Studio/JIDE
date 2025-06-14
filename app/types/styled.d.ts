import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      primary: string;
      primaryLight: string;
      secondary: string;
      border: string;
      shadow: string;
      starred: string;
      star: string;
    };
  }
} 