<!-- PROJECT HEADER -->
<br />
<div align="center">
  <a href="#">
    <img src="https://avatars.githubusercontent.com/u/110193542?s=96&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Virtualground Marketplace</h3>
  <a href="https://www.virtualground.it/">Link</a> 
</div>

<!-- ABOUT -->

### About

In the Virtualground marketplace, each NFT can be swapped for VGR tokens through a smart contract, allowing for trustless and transparent atomic swaps.

<!-- CONTRACT ADDRESS -->

### Address

- [Marketplace](https://polygonscan.com/address/0x48791815A6CfB75D716F3dad95d911c07445A4A1) (`0x48791815A6CfB75D716F3dad95d911c07445A4A1`)
- [Royalty Manager](https://polygonscan.com/address/0xA0537adB79849cF0FB4641568AAdAE21E6249EFc)(`0xA0537adB79849cF0FB4641568AAdAE21E6249EFc`)

<!-- TOOLS USED -->

### Built With

- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TERMINOLOGY -->

### Terminology

- **Order**: NFT listing. Every order has its unique id generated by the block timestamp, NFT owner, id and the price.

- **Asset**: NFT token which follows the ERC721 Ethereum standard.

- **Composable Asset**: An NFT token which is composed of other NFTs. For example: An estate is a composable NFT.

- **Account**: an Ethereum address.

<!-- DESIGN -->

### Design

This contract is upgradable, ownable and pausable. It accepts only tokens which follow the ERC721 Ethereum standard for listing and the VGR token for buying.

<!-- DESIGN -->

### Specification

#### Events

**OrderCreated**
Emitted when an asset is listed for sale.

```solidity
event OrderCreated(
  bytes32 id,
  uint256 indexed assetId,
  address indexed seller,
  address nftAddress,
  uint256 priceInWei,
  uint256 expiresAt
);
```

**OrderCancelled**

Emitted when an asset listing was cancelled.

```solidity
event OrderCancelled(
  bytes32 id,
  uint256 indexed assetId,
  address indexed seller,
  address nftAddress
);
```

**OrderSuccessful**

Emitted when an asset was successfully bought.

```solidity
event OrderSuccessful(
  bytes32 id,
  uint256 indexed assetId,
  address indexed seller,
  address nftAddress,
  uint256 totalPrice,
  address indexed buyer
);
```

**ChangedPublicationFee**

Emitted when the fee for listing was changed.

```solidity
event ChangedPublicationFee(
  uint256 publicationFee
);
```

**ChangedFeesCollectorCutPerMillion**

Emitted when

```solidity
event ChangedFeesCollectorCutPerMillion(
  uint256 feesCollectorCutPerMillion
);
```

**ChangedRoyaltiesCutPerMillion**

```solidity
event ChangedRoyaltiesCutPerMillion(
  uint256 royaltiesCutPerMillion
);
```

**FeesCollectorSet**

```solidity
event FeesCollectorSet(
  address indexed oldFeesCollector,
  address indexed newFeesCollector
);
```

**RoyaltiesManagerSet**

```solidity
event RoyaltiesManagerSet(
  IRoyaltiesManager index oldRoyaltiesManager,
  IRoyaltiesManager index newRoyaltiesManager
);
```

#### Functions

[TO BE ADDED...]

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
 
 
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
