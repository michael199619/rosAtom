import {FC} from 'react'
import styles from './TimeInterval.module.sass'
import DataPicker from '../../shared/DataPicker/DataPicker'
import {Field} from 'formik'

const TimeInterval: FC = () => {
    return (
        <div className={styles.Wrapper}>
            <DataPicker className={styles.Left}/>
            <span className={styles.Line}></span>
            <DataPicker className={styles.Right}/>
        </div>
    )
}

export default TimeInterval