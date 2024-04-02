
import { EthAddress, IEthServiceProvider } from './types/types';
import Contract from './utils/contract';

import QuickNodeServiceProvider from './providers/quick-node';
import ViemServiceProvider from './providers/viem';

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