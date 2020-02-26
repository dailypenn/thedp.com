import s from 'styled-components'

interface IFillerProps  {
    readonly color: string
}

export const Filler = s.div<IFillerProps>`
margin-top: 1em;
margin-right: 1em;
margin-left: 1em;
margin-bottom: 2em;
height: 90px;
align: center;
background-color: ${({ color }): string => color};
`
