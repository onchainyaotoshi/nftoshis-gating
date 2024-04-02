export type EthAddress = `0x${string}`;

export interface IEthServiceProvider {
    balanceOf(userWalletAddress: EthAddress): Promise<number>;
}