import NftoshisAbi from '../abi/nftoshis.json';
import { EthAddress } from '../types/types';

export default class Contract {
    static readonly ADDRESS: EthAddress = '0xBDB1A8772409A0C5eEb347060cbf4B41dD7B2C62';
    static readonly ABI: any = NftoshisAbi;
}