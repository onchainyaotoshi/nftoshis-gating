import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';
import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
export default class Nftoshis {
    static CONTRACT: typeof Contract;
    private serviceProvider;
    private neynar;
    constructor(serviceProvider?: IEthServiceProvider);
    isHolder(userWalletAddress: EthAddress): Promise<boolean>;
    isHolder(fid: number): Promise<boolean>;
    getNeynarApiClient(): NeynarAPIClient;
}
export { QuickNodeServiceProvider, ViemServiceProvider, IEthServiceProvider, EthAddress };
