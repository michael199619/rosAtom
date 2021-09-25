import {FC} from 'react'
import styles from '../app/styles/index.module.sass'
import BaseLayout from '../app/layouts/BaseLayout/BaseLayout'
import Chart from '../app/components/local/Chart/Chart'
import TimeInterval from '../app/components/local/TimeInterval/TimeInterval'
import {Education} from '../app/types/staff'

const Index: FC = () => {
    return (
        <BaseLayout title='Главная' className={styles.Wrapper}>
            <div className={styles.SelectTimeInterval}>
                <h2 className={styles.Title}>Промежуток времени</h2>
                <TimeInterval/>
            </div>
            <div className={styles.Charts}>
                <Chart filter={{age: 32}} staff={[
                    {
                        age: 10,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 11,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                ]}/>
                <Chart filter={{age: 15}} staff={[
                    {
                        age: 10,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 19,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 34,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 21,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                ]}/>
                <Chart filter={{age: 32}} staff={[
                    {
                        age: 10,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 11,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                ]}/>
                <Chart filter={{age: 15}} staff={[
                    {
                        age: 10,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 19,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 34,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 21,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                ]}/>
            </div>
        </BaseLayout>
    )
}

export default Index