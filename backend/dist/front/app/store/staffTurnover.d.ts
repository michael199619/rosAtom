import { PersonDataFormat, StaffQuery } from '../types/staff';
declare class StaffTurnover {
    staffTurnover: any[];
    constructor();
    fetch(params: StaffQuery): Promise<PersonDataFormat[]>;
}
declare const _default: StaffTurnover;
export default _default;
