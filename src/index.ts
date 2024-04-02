import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';

import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';

export default class Nftoshis{
    public static CONTRACT = Contract;

    private serviceProvider: IEthServiceProvider;

    constructor(serviceProvider: IEthServiceProvider = new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!)) {
        this.serviceProvider = serviceProvider;
    }

    async isHolder(userWalletAddress: EthAddress): Promise<boolean> {
        const balance = await this.serviceProvider.balanceOf(userWalletAddress);
        return balance > 0;
    }
}

export { 
    QuickNodeServiceProvider, 
    ViemServiceProvider,
    IEthServiceProvider,
    EthAddress
}