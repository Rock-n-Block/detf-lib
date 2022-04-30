"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySortParams = void 0;
function applySortParams(items, _a) {
    var sortBy = _a.sortBy, sortDirection = _a.sortDirection;
    return items.sort(function (a, b) {
        return sortDirection === 'ASC' ? (a[sortBy] > b[sortBy] ? 1 : -1) : (a[sortBy] < b[sortBy] ? 1 : -1);
    });
}
exports.applySortParams = applySortParams;
