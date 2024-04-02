"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@quicknode/sdk");
const contract_1 = __importDefault(require("../utils/contract"));
class QuickNodeServiceProvider {
    constructor(quickNodeHttpsUrl) {
        this.core = new sdk_1.Core({
            endpointUrl: quickNodeHttpsUrl
        });
    }
    balanceOf(userWalletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return Number(yield this.core.client.readContract({
                address: contract_1.default.ADDRESS,
                abi: contract_1.default.ABI,
                functionName: "balanceOf",
                args: [userWalletAddress],
            }));
        });
    }
}
exports.default = QuickNodeServiceProvider;
