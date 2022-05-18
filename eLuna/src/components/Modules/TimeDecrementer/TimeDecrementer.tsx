import React, { useEffect, useState } from 'react'
import { INF_TimeDecrementer } from './types'

let decrementerInterval: NodeJS.Timeout;
const TimeDecrementer = (props: INF_TimeDecrementer) => {
    const [currTime, setTime] = useState(props.t);

    decrementerInterval = setInterval(() => setTime(currTime - 1000), 1000);

    useEffect(() => {
        return () => clearInterval(decrementerInterval);
    }, [])

  return (
    <p>{ String(new Date(currTime)) }</p>
  )
}

export default TimeDecrementer;