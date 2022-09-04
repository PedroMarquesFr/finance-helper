import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string;
      frontItems: string;
      text: string;
      textsec: string;
    };
    toggleTheme: () => void;
  }
}

// arquivo de definição de tipo / definição de tipo global

//o styled components usa para seuo setup de um tema padrao o ThemeProvider, um contextAPI.
//Voce chama essa context API com themeProvider
// que é aquivalente ao contextProvider de um contextAPI qualquer, ate a achamda e semalhante:
// <ThemeProvider theme={{...theme, toggleTheme}}>
//  ...
// </ThemeProvider> ou <GenectContext.Provider value={}></GenectContext.Provider>

//Getting the theme without styled components:
//Para pegar: se trata de um contextAPI normal, então, pode-se o acessar com useContext
// import { ThemeContext } from 'styled-components';

//obs: o ThemeContext foi declarado em algum lugar o codigo do styldComps assim: const ThemeContext = React.createContext();
//obs: e em um arquivo chamado ThemeProvider tem algo do tipo <ThemeContext.Provider>{props.children}</ThemeContext.Provider>

//lembrando que para o uso exclusivo do style components nao precisa disso pois ele o objeto do tema pode ser pego via props
