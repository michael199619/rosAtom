"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_module_sass_1 = require("../app/styles/index.module.sass");
const BaseLayout_1 = require("../app/layouts/BaseLayout/BaseLayout");
const Chart_1 = require("../app/components/local/Chart/Chart");
const TimeInterval_1 = require("../app/components/local/TimeInterval/TimeInterval");
const staff_1 = require("../app/types/staff");
const Index = () => {
    return (<BaseLayout_1.default title='Главная' className={index_module_sass_1.default.Wrapper}>
            <div className={index_module_sass_1.default.SelectTimeInterval}>
                <h2 className={index_module_sass_1.default.Title}>Промежуток времени</h2>
                <TimeInterval_1.default />
            </div>
            <div className={index_module_sass_1.default.Charts}>
                <Chart_1.default filter={{ age: 32 }} staff={[
        {
            age: 10,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 12,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 11,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 12,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
    ]}/>
                <Chart_1.default filter={{ age: 15 }} staff={[
        {
            age: 10,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 19,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 34,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 21,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
    ]}/>
                <Chart_1.default filter={{ age: 32 }} staff={[
        {
            age: 10,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 12,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 11,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 12,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
    ]}/>
                <Chart_1.default filter={{ age: 15 }} staff={[
        {
            age: 10,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 19,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 34,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
        {
            age: 21,
            education: staff_1.Education.HIGHER,
            have_children: false,
            salary: 20000
        },
    ]}/>
            </div>
        </BaseLayout_1.default>);
};
exports.default = Index;
//# sourceMappingURL=index.js.map