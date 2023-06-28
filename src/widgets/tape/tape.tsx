import { FC } from 'react'
import { TapeGrey } from './tape-grey'
import { TapeBlack } from './tape-black'

type TapeProps = {
    text1: string,
    text2: string
}

export const Tape: FC<TapeProps> = ({ text1, text2 }) => {
    return (
        <div>
            <TapeGrey text1={text1} text2={text2}/>
            <TapeBlack text1={text1} text2={text2}/>
        </div>
    )
}