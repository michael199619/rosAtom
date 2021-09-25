"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const axios_1 = require("axios");
class StaffTurnover {
    constructor() {
        this.staffTurnover = [];
        mobx_1.makeAutoObservable(this);
    }
    async fetch(params) {
        const response = await axios_1.default.get('/api/staff', {
            params
        });
        return response.staff;
    }
}
exports.default = new StaffTurnover();
//# sourceMappingURL=staffTurnover.js.map