# NFToshis Gating

NFToshis Gating is a package designed to provide gating functionality for projects utilizing NFToshis.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install NFToshis Gating via npm:

```
npm install nftoshis-gating
```

## Environment Setup

To run this project, create a `.env` file at the root with the following variables:

- `QUICKNODE_HTTPS_URL`: HTTPS URL for QuickNode endpoint.
- `NEYNAR_API_KEY`: API key for Neynar service.

### Example `.env`

```plaintext
QUICKNODE_HTTPS_URL=https://your-node.quicknode.com
NEYNAR_API_KEY=your-neynar-api-key
```

**Important: Do not commit the .env file to your repository. Ensure it's in your .gitignore.**

## Usage

To use NFToshis Gating in your project, import it and utilize its functions as needed:

For now, it only support 2 service provider.

### Farcaster Frame

This example demonstrates how to use the nftoshis-gating package to check if a user holds a token, given their Farcaster ID (FID). Ensure you have a .env file set up with the required environment variables before running the example.

```javascript

import Nftoshis from "nftoshis-gating";

const nftoshis = new Nftoshis();
const isHolder = await nftoshis.isHolder(FID);

```

### ES6

#### QuickNode SDK

Here is [QuickNode](https://www.quicknode.com/)

```javascript
import Nftoshis, {QuickNodeServiceProvider} from "nftoshis-gating";

const nftoshis = new Nftoshis(new QuickNodeServiceProvider(QUICKNODE_HTTPS_URL));
const isHolder = await nftoshis.isHolder(USER_WALLET_ADDRESS);

```

#### Viem SDK

it use mainnet [basescan](basescan.org) API

```javascript
import Nftoshis, {ViemServiceProvider} from "nftoshis-gating";

const nftoshis = new Nftoshis(new ViemServiceProvider());
const isHolder = await nftoshis.isHolder(USER_WALLET_ADDRESS);

```

#### Custom Service Provider SDK

You can implement your custom service provider and provide additional functionality. Below is an example of how you can create a custom service provider using the `IEthServiceProvider` interface provided by NFToshis Gating:

```javascript
import Nftoshis, { IEthServiceProvider, EthAddress } from "nftoshis-gating";

export default class CustomServiceProvider implements IEthServiceProvider {
    async balanceOf(userWalletAddress: EthAddress): Promise<number> {
        // Your implementation here
    }
}
```

and then you can use it:

```javascript
import Nftoshis from "nftoshis-gating";

const nftoshis = new Nftoshis(new CustomServiceProvider());
const isHolder = await nftoshis.isHolder(USER_WALLET_ADDRESS);
```

### cjs 

```javascript
async function loadModule() {
    return await import('nftoshis-gating');
}

(async()=>{
    const Nftoshis = await loadModule();

    const a = new Nftoshis.default(new Nftoshis.QuickNodeServiceProvider(QUICKNODE_HTTPS_URL));

    console.log("a",await a.isHolder(USER_WALLET_ADDRESS));

    const b = new Nftoshis.default(new Nftoshis.ViemServiceProvider());

    console.log("b",await b.isHolder(USER_WALLET_ADDRESS));
})();

```

## Contributing

Contributions to NFToshis Gating are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to include this Markdown content in your documentation. Let me know if you need further assistance!






