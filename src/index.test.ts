import { expect, test } from 'vitest'
import Nftoshis, {QuickNodeServiceProvider, ViemServiceProvider, EthAddress} from './index';

import dotenv from 'dotenv';
dotenv.config();

test('Quick Node Provider', async () => {
    const toshi = new Nftoshis(new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!));
    expect(await toshi.isHolder(process.env.USER_WALLET_ADDRESS as EthAddress)).toBe(true)
});

test('Viem Provider', async () => {
    const toshi = new Nftoshis(new ViemServiceProvider());
    expect(await toshi.isHolder(process.env.USER_WALLET_ADDRESS as EthAddress)).toBe(true)
});