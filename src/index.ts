import Contract, { EthAddress, IEthServiceProvider } from './utils/contract.js';

import QuickNodeServiceProvider from './providers/quick-node.js';
import ViemServiceProvider from './providers/viem.js';
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

export default class Nftoshis{
    public static CONTRACT = Contract;

    private serviceProvider: IEthServiceProvider;
    private neynar: NeynarAPIClient;

    constructor(serviceProvider: IEthServiceProvider = new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!)) {
        this.serviceProvider = serviceProvider;
        this.neynar = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);
    }

    // Overload signatures
    async isHolder(userWalletAddress: EthAddress): Promise<boolean>;
    async isHolder(fid: number): Promise<boolean>;

    async isHolder(arg: EthAddress | number): Promise<boolean> {
        if (typeof arg === 'string') {
            const balance = await this.serviceProvider.balanceOf(arg);
            return balance > 0;
        }else if (typeof arg === 'number') {
            const res = await this.neynar.lookupUserByFid(arg);
            // @ts-ignore
            const addresses = res.result.user.verifiedAddresses.eth_addresses;

            for(let i =0 ;i<addresses.length;i++){
                const isVerify = await this.isHolder(addresses[i]);
                if(isVerify){
                    return true;
                }
            }

            return false;
        }

        throw new Error('Invalid argument type');
    }

    getNeynarApiClient():NeynarAPIClient{
        return this.neynar;
    }
}

export { 
    QuickNodeServiceProvider, 
    ViemServiceProvider,
    IEthServiceProvider,
    EthAddress
}