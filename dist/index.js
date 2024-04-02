var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Contract from './utils/contract.js';
import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
class Nftoshis {
    constructor(serviceProvider = new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL)) {
        this.serviceProvider = serviceProvider;
    }
    isHolder(userWalletAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.serviceProvider.balanceOf(userWalletAddress);
            return balance > 0;
        });
    }
}
Nftoshis.CONTRACT = Contract;
export default Nftoshis;
export { QuickNodeServiceProvider, ViemServiceProvider };
