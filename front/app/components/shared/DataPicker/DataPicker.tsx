import {FC} from 'react'
import styles from './DataPicker.module.sass'
import {Props} from '../../../types/props'


const DataPicker: FC<Props> = ({className}) => {
    return (
        <input className={`${className}`} type="date"/>
    )
}

export default DataPicker