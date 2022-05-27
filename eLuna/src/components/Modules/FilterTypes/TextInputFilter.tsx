import React, { useEffect, useState } from 'react'
import Input from '../../Interactibles/Inputs/Input'
import { INF_TextInputFilter } from './types'

const TextInputFilter = (props: INF_TextInputFilter) => {
    const [text, setText] = useState('');

    useEffect(() => {
        props.setter({
            name: `${props.keyName} contains "${text}"`,
            filter: props.filter,
            value: text
        }, true)
    }, [text])

    useEffect(() => {
        if(props.value)
            setText(props.value);
    }, [])

    return (
        <Input placeholder={props.placeholder} val={text} 
            onInput={(e) => {
                setText(e.currentTarget.value);}
            } 

            onClearInput={() => setText('')}
            />
    )
}

export default TextInputFilter