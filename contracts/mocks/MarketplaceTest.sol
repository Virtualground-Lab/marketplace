// SPDX-License-Identifier: MIT

pragma solidity >0.4.23;

import "../../contracts/marketplace/Marketplace.sol";

contract MarketplaceTest is Marketplace {
    constructor(
        address _owner,
        address _feesCollector,
        address _acceptedToken,
        IRoyaltiesManager _royaltiesManager,
        uint256 _feesCollectorCutPerMillion,
        uint256 _royaltiesCutPerMillion
    )
        Marketplace(
            _owner,
            _feesCollector,
            _acceptedToken,
            _royaltiesManager,
            _feesCollectorCutPerMillion,
            _feesCollectorCutPerMillion
        )
    {}

    function cancelOrderNew(address nftAddress, uint256 assetId)
        public
        whenNotPaused
    {
        _cancelOrder(nftAddress, assetId);
    }
}
