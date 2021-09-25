"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeInterval_module_sass_1 = require("./TimeInterval.module.sass");
const DataPicker_1 = require("../../shared/DataPicker/DataPicker");
const TimeInterval = () => {
    return (<div className={TimeInterval_module_sass_1.default.Wrapper}>
            <DataPicker_1.default className={TimeInterval_module_sass_1.default.Left}/>
            <span className={TimeInterval_module_sass_1.default.Line}></span>
            <DataPicker_1.default className={TimeInterval_module_sass_1.default.Right}/>
        </div>);
};
exports.default = TimeInterval;
//# sourceMappingURL=TimeInterval.js.map