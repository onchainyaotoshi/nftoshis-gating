import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'
import { IEthServiceProvider, EthAddress } from '../types/types';
import Contract from '../utils/contract';

export const publicClient = createPublicClient({
    chain: base,
    transport: http()
})

export default class ViemServiceProvider implements IEthServiceProvider {
    async balanceOf(userWalletAddress: EthAddress): Promise<number> {
        return Number(await publicClient.readContract({
            address: Contract.ADDRESS,
            abi: Contract.ABI,
            functionName: "balanceOf",
            args: [userWalletAddress],
        }));
    }
}