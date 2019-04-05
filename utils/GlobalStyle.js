import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot'

const options ={

};

const GlobalStyle = createGlobalStyle`
    ${reboot(options)}
`;

export default GlobalStyle;



