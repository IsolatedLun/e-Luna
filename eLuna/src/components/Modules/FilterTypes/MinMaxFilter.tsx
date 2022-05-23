import { useEffect, useState } from 'react'
import NumberInput from '../../Interactibles/Inputs/NumberInput'
import FlexItems from '../Flex/FlexItems'
import { INF_MultiFilterType } from './types'

const MinMaxFilter = (props: INF_MultiFilterType) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        addMinMaxFilter('__lte');
    }, [min])

    useEffect(() => {
        addMinMaxFilter('__gte');
    }, [max])

    function addMinMaxFilter(type: string) {
        props.setter!({
            filter: type,
            name: type === '__gte' ? `Greater than ${max}` : `Less than ${min}`,
            value: type === '__gte' ? `__gte=${max}` : `__lte=${min}`
        }, true)
    }

    return (
        <FlexItems blockCls='min-max-filter' alignCenter direction='x'>
            <NumberInput placeholder='Min' val={min} onInput={(e) => {
                setMin(Number(e.currentTarget.value));
            }} />
            <p>&</p>
            <NumberInput placeholder='Max' val={max} onInput={(e) => {
                setMax(Number(e.currentTarget.value));
            }} />
        </FlexItems>
    )
}

export default MinMaxFilter