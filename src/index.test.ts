import { expect, test } from 'vitest'
import Nftoshis from './index';
import QuickNodeServiceProvider from './providers/quick-node';
import { EthAddress } from './types/types';

import dotenv from 'dotenv';
dotenv.config();

test('Quick Node Provider', async () => {
    const toshi = new Nftoshis(new QuickNodeServiceProvider(process.env.QUICKNODE_HTTPS_URL!));
    expect(await toshi.isHolder(process.env.USER_WALLET_ADDRESS as EthAddress)).toBe(true)
});