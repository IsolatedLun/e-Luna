import React from 'react'
import Input from './Input'
import { INF_Input } from './types'

const NumberInput = (props: INF_Input<number>) => {
  return <Input { ...props } type='number' />
}

export default NumberInput