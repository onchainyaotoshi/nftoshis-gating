import NftoshisAbi from '../abi/nftoshis.json' assert { type: 'json' };

export type EthAddress = `0x${string}`;

export interface IEthServiceProvider {
    balanceOf(userWalletAddress: EthAddress): Promise<number>;
}

export default class Contract {
    static readonly ADDRESS: EthAddress = '0xBDB1A8772409A0C5eEb347060cbf4B41dD7B2C62';
    static readonly ABI: any = NftoshisAbi;
}