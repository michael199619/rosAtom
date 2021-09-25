import {FC} from 'react'
import styles from './Chart.module.sass'
import {Line} from 'react-chartjs-2'
import {StaffQuery, PersonDataFormat, StaffResponse, ChartDataFormat} from '../../../types/staff'
import {generateLabelsByDataGap} from '../../../utils/generateDateGap'
import {ChartDataset, ChartTypeRegistry} from 'chart.js'

const Chart: FC<StaffResponse> = (response) => {
    function convertStaffResponseToChartDataFormat(response: StaffResponse): ChartDataFormat[] {
        let charts_data_format: ChartDataFormat[] = []
        for(let key in response.filter) {
            const dataset = response.staff.map(person => person[key])
            // @ts-ignore
            let chart_data: ChartDataFormat = {
                label: key,
                data: dataset,
                type: 'line'
            }
            charts_data_format.push(chart_data)
        }
        return charts_data_format
    }
    const data = convertStaffResponseToChartDataFormat(response)
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Selector}>
                <div className={styles.Block}>Стаж</div>
                <div className={styles.Block}>Образование</div>
                <div className={styles.Block}>Наставник</div>
                <div className={styles.Block}>Пересмотр зарплаты</div>
            </div>
            <Line className={styles.Chart} data={{
                datasets: data,
                labels: Array.from(Array(data[0].data.length).fill(''))
            }}/>
        </div>
    )
}

export default Chart