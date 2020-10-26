import {fonts, colors} from './frontend-conf.js'
import css from 'styled-jsx/css'


export default css`

    @media all{

        div{

            background-color: ${colors.primary};
            font-family: ${fonts.default};

        }

        main{

            display: flex;
            flex-direction: row;

    }}

`