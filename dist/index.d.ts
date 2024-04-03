import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';
import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
export default class Nftoshis {
    static CONTRACT: typeof Contract;
    private serviceProvider;
    constructor(serviceProvider?: IEthServiceProvider);
    isHolder(userWalletAddress: EthAddress): Promise<boolean>;
}
export { QuickNodeServiceProvider, ViemServiceProvider, IEthServiceProvider, EthAddress };
