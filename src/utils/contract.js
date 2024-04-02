"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nftoshis_json_1 = __importDefault(require("../abi/nftoshis.json"));
class Contract {
}
Contract.ADDRESS = '0xBDB1A8772409A0C5eEb347060cbf4B41dD7B2C62';
Contract.ABI = nftoshis_json_1.default;
exports.default = Contract;
