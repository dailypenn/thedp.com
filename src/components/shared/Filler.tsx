import s from 'styled-components'

export const Filler = s.div`
margin-top: 1em;
margin-right: 1em;
margin-left: 1em;
margin-bottom: 2em;
height: 90px;
align: center;
background-color: ${({ color }) => color};
`
