import { Core } from '@quicknode/sdk';
import { IEthServiceProvider, EthAddress } from '../types/types';
import Contract from '../utils/contract';

export default class QuickNodeServiceProvider implements IEthServiceProvider {
    private core: Core;

    constructor(quickNodeHttpsUrl : string){
        this.core = new Core({
            endpointUrl: quickNodeHttpsUrl!
        });
    }

    async balanceOf(userWalletAddress: EthAddress): Promise<number> {
        return Number(await this.core.client.readContract({
            address: Contract.ADDRESS,
            abi: Contract.ABI,
            functionName: "balanceOf",
            args: [userWalletAddress],
        }));
    }
}