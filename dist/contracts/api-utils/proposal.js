"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVote = exports.getItemStatusProposalById = exports.parseDescription = void 0;
var constants_1 = require("../../constants");
function parseDescription(description) {
    var parseDescription = description.split(constants_1.SPLITTER_DESCRIPTION);
    return {
        title: parseDescription[0].trim(),
        description: parseDescription.length > 1 ? parseDescription[1].trim() : parseDescription[0].trim(),
    };
}
exports.parseDescription = parseDescription;
function getItemStatusProposalById(id) {
    var result;
    switch (id) {
        case "0":
            result = "created";
            break;
        case "4":
        case "5":
        case "7":
            result = "passed";
            break;
        case "1":
            result = "active";
            break;
        case "2":
        case "3":
        case "6":
            result = "failed";
            break;
        default:
            break;
    }
    return result;
}
exports.getItemStatusProposalById = getItemStatusProposalById;
function parseVote(id) {
    var result;
    switch (id) {
        case "0":
            result = "against";
            break;
        case "1":
            result = "for";
            break;
        case "2":
            result = "abstain";
            break;
    }
    return result;
}
exports.parseVote = parseVote;
