"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateLabelsByDataGap = void 0;
const moment_1 = require("moment");
function generateLabelsByDataGap(data_from, data_to) {
    let labels = [];
    labels.push(moment_1.default(data_from).format('YYYY'));
    labels.push(moment_1.default(data_to).format('YYYY'));
    return labels;
}
exports.generateLabelsByDataGap = generateLabelsByDataGap;
//# sourceMappingURL=generateDateGap.js.map