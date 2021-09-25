"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chart_module_sass_1 = require("./Chart.module.sass");
const react_chartjs_2_1 = require("react-chartjs-2");
const Chart = (response) => {
    function convertStaffResponseToChartDataFormat(response) {
        let charts_data_format = [];
        for (let key in response.filter) {
            const dataset = response.staff.map(person => person[key]);
            let chart_data = {
                label: key,
                data: dataset,
                type: 'line'
            };
            charts_data_format.push(chart_data);
        }
        return charts_data_format;
    }
    const data = convertStaffResponseToChartDataFormat(response);
    return (<div className={Chart_module_sass_1.default.Wrapper}>
            <div className={Chart_module_sass_1.default.Selector}>
                <div className={Chart_module_sass_1.default.Block}>Стаж</div>
                <div className={Chart_module_sass_1.default.Block}>Образование</div>
                <div className={Chart_module_sass_1.default.Block}>Наставник</div>
                <div className={Chart_module_sass_1.default.Block}>Пересмотр зарплаты</div>
            </div>
            <react_chartjs_2_1.Line className={Chart_module_sass_1.default.Chart} data={{
        datasets: data,
        labels: Array.from(Array(data[0].data.length).fill(''))
    }}/>
        </div>);
};
exports.default = Chart;
//# sourceMappingURL=Chart.js.map